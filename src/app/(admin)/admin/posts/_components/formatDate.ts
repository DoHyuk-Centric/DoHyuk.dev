/** "2026-07-31" → "2026.07.31" (dateTime 속성에는 ISO 원본을 그대로 쓴다) */
export function formatDate(isoDate: string) {
  return isoDate.replace(/-/g, ".");
}
