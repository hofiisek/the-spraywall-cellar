import type { Board, Boulder, Climber } from './types';
import { db, storage } from './firebase';
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  deleteField,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const BOARDS_COLLECTION = 'boards';
const BOULDERS_SUBCOLLECTION = 'boulders';
const CLIMBERS_DOC = doc(db, 'config', 'climbers');

// ============================================================================
// Boards
// ============================================================================

/** Format a Date as "vYYYYMMDD" for use as a Board.version label. */
export function formatBoardVersion(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `v${y}${m}${day}`;
}

/**
 * Subscribe to ALL boards. Fires immediately with the current set and again
 * on any board create / update / delete. The callback receives:
 *   - the sorted list (newest first, version → createdAt tiebreaker)
 *   - the latest board (or null if there are none)
 *
 * Single-field orderBy on `version` keeps Firestore happy (no composite index).
 * The "vYYYYMMDD" string sorts lexicographically the same as chronologically;
 * the createdAt tiebreaker for same-day boards is applied client-side.
 */
export function subscribeToAllBoards(
  callback: (boards: Board[], latest: Board | null) => void,
): () => void {
  const q = query(collection(db, BOARDS_COLLECTION), orderBy('version', 'desc'));
  return onSnapshot(
    q,
    (snap) => {
      const boards = snap.docs.map((d) => d.data() as Board);
      boards.sort((a, b) => {
        if (a.version !== b.version) return a.version < b.version ? 1 : -1;
        return b.createdAt - a.createdAt;
      });
      callback(boards, boards[0] ?? null);
    },
    (error) => {
      console.error('Error subscribing to boards:', error);
    },
  );
}

/**
 * Upload an image to Storage at boards/{boardId}.jpg and return its public URL
 * + natural dimensions.
 */
export async function uploadBoardImage(
  file: File,
  boardId: string,
): Promise<{ url: string; path: string; width: number; height: number }> {
  const path = `boards/${boardId}.jpg`;
  const ref = storageRef(storage, path);
  await uploadBytes(ref, file, { contentType: file.type || 'image/jpeg' });
  const url = await getDownloadURL(ref);

  const { width, height } = await readImageDimensions(file);
  return { url, path, width, height };
}

function readImageDimensions(file: File): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const result = { width: img.naturalWidth, height: img.naturalHeight };
      URL.revokeObjectURL(url);
      resolve(result);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to read image dimensions'));
    };
    img.src = url;
  });
}

// ============================================================================
// Boulders (under boards/{boardId}/boulders)
// ============================================================================

function bouldersCol(boardId: string) {
  return collection(db, BOARDS_COLLECTION, boardId, BOULDERS_SUBCOLLECTION);
}

export async function saveBoulder(boardId: string, boulder: Boulder): Promise<void> {
  try {
    await setDoc(doc(bouldersCol(boardId), boulder.id), boulder);
  } catch (error) {
    console.error('Failed to save boulder:', error);
    throw new Error('Failed to save boulder. Check your connection.');
  }
}

export function subscribeToBoulders(
  boardId: string,
  callback: (boulders: Boulder[]) => void,
): () => void {
  return onSnapshot(
    bouldersCol(boardId),
    (snap) => {
      const boulders: Boulder[] = [];
      snap.forEach((d) => boulders.push(d.data() as Boulder));
      callback(boulders);
    },
    (error) => {
      console.error('Error subscribing to boulders:', error);
    },
  );
}

export async function deleteBoulderFromFirebase(boardId: string, boulderId: string): Promise<void> {
  try {
    await deleteDoc(doc(bouldersCol(boardId), boulderId));
  } catch (error) {
    console.error('Failed to delete boulder:', error);
    throw new Error('Failed to delete boulder. Check your connection.');
  }
}

/**
 * Add or remove one climber's tick. Only the `ticks.{climberId}` field is
 * written, so ticks recorded at the same time from another device are kept.
 */
export async function setTick(
  boardId: string,
  boulderId: string,
  climberId: string,
  ticked: boolean,
): Promise<void> {
  try {
    await updateDoc(doc(bouldersCol(boardId), boulderId), {
      [`ticks.${climberId}`]: ticked ? Date.now() : deleteField(),
    });
  } catch (error) {
    console.error('Failed to update tick:', error);
    throw new Error('Failed to update tick. Check your connection.');
  }
}

// ============================================================================
// Climbers (ticklist roster, stored in config/climbers)
// ============================================================================

export function subscribeToClimbers(callback: (climbers: Climber[]) => void): () => void {
  return onSnapshot(
    CLIMBERS_DOC,
    (snap) => {
      callback((snap.data()?.climbers as Climber[] | undefined) ?? []);
    },
    (error) => {
      console.error('Error subscribing to climbers:', error);
    },
  );
}

export async function saveClimbers(climbers: Climber[]): Promise<void> {
  try {
    await setDoc(CLIMBERS_DOC, { climbers });
  } catch (error) {
    console.error('Failed to save climbers:', error);
    throw new Error('Failed to save climbers. Check your connection.');
  }
}
