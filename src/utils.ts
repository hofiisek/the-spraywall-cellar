/**
 * Escape text before inserting it into HTML built with template strings, so
 * user-entered values (names, descriptions, ...) are shown as plain text.
 */
export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
