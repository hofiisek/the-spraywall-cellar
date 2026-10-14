import type { Climber } from './types';
import { saveClimbers } from './storage';

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Open the admin modal for managing the ticklist roster. Changes stay local
 * until "Save" is clicked. Removing a climber hides their ticks; the tick
 * entries stay in the boulder documents but are no longer counted.
 */
export function openClimbersModal(current: Climber[]): void {
  const climbers: Climber[] = current.map((c) => ({ ...c }));
  let saving = false;

  const overlay = document.createElement('div');
  overlay.className = 'fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 md:p-4';
  overlay.innerHTML = `
    <div class="bg-gray-900 text-white rounded-lg shadow-2xl w-full max-w-sm max-h-[90vh] overflow-y-auto p-4">
      <h2 class="text-lg font-bold mb-3">Climbers</h2>
      <div id="climbers-rows" class="space-y-2 mb-3"></div>
      <div class="flex gap-2 mb-4">
        <input id="climber-new" type="text" maxlength="40" placeholder="New climber name"
          class="flex-1 px-3 py-2 bg-gray-700 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button id="climber-add" class="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium">Add</button>
      </div>
      <div class="flex gap-2">
        <button id="climbers-save" class="flex-1 px-4 py-2 bg-emerald-800 hover:bg-emerald-900 rounded font-medium text-sm disabled:opacity-50">Save</button>
        <button id="climbers-cancel" class="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded font-medium text-sm">Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const rowsEl = overlay.querySelector('#climbers-rows') as HTMLElement;
  const newInput = overlay.querySelector('#climber-new') as HTMLInputElement;

  function renderRows(): void {
    rowsEl.innerHTML = climbers.length === 0
      ? '<p class="text-sm text-gray-500">No climbers yet.</p>'
      : climbers.map((c, i) => `
        <div class="flex gap-2 items-center">
          <input type="text" maxlength="40" value="${escapeHtml(c.name)}" data-climber-index="${i}"
            class="flex-1 px-3 py-2 bg-gray-700 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button data-remove-index="${i}" class="p-2 text-red-400 hover:text-red-300" title="Remove">✕</button>
        </div>
      `).join('');
  }

  function close(): void {
    overlay.remove();
  }

  function addClimber(): void {
    const name = newInput.value.trim();
    if (!name) return;
    climbers.push({ id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, name });
    newInput.value = '';
    renderRows();
    newInput.focus();
  }

  rowsEl.addEventListener('input', (e) => {
    const input = e.target as HTMLInputElement;
    const index = input.dataset.climberIndex;
    if (index !== undefined) climbers[Number(index)].name = input.value;
  });
  rowsEl.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('[data-remove-index]') as HTMLElement | null;
    if (!btn) return;
    const climber = climbers[Number(btn.dataset.removeIndex)];
    if (!confirm(`Remove ${climber.name}? Their ticks will no longer be shown.`)) return;
    climbers.splice(Number(btn.dataset.removeIndex), 1);
    renderRows();
  });
  overlay.querySelector('#climber-add')!.addEventListener('click', addClimber);
  newInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addClimber();
  });
  overlay.querySelector('#climbers-cancel')!.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  const saveBtn = overlay.querySelector('#climbers-save') as HTMLButtonElement;
  saveBtn.addEventListener('click', async () => {
    if (saving) return;
    const cleaned = climbers
      .map((c) => ({ id: c.id, name: c.name.trim() }))
      .filter((c) => c.name.length > 0);
    saving = true;
    saveBtn.disabled = true;
    try {
      await saveClimbers(cleaned);
      close();
    } catch (error) {
      alert('Failed to save climbers. Please check your connection.');
      console.error(error);
      saving = false;
      saveBtn.disabled = false;
    }
  });

  renderRows();
  newInput.focus();
}
