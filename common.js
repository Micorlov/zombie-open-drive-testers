// Pure helpers and constants shared by both pages and by check.mjs (no browser or CDN imports here).
export const ADMIN_EMAIL = 'micorlov@gmail.com';
export const GOAL = 12;
export const JOIN_URL = 'https://play.google.com/apps/testing/com.micorlov.zombieopendrive';

// Same pattern as the one in firestore.rules; change both together.
export const EMAIL_RE = /^[a-z0-9._%+-]{1,64}@[a-z0-9.-]{1,190}\.[a-z]{2,}$/;

export function normalizeEmail(s) {
  const e = String(s ?? '').trim().toLowerCase();
  return EMAIL_RE.test(e) ? e : null;
}
