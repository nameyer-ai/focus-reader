export const STORAGE_KEYS = {
  WORDS_READ: 'focus_reader_words_read',
  TOTAL_SESSIONS: 'focus_reader_total_sessions',
  ADAPTIVE_PROFILE: 'focus_reader_adaptive_profile',
  SPEED: 'focus_reader_speed',
  FOCUS_MODE: 'focus_reader_focus_mode',
  FONT_SIZE: 'focus_reader_font_size',
  SESSION_HISTORY:  'focus_reader_session_history',
};

export function saveToStorage(key, value) {
  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
}

export function loadFromStorage(key, fallback) {
  const stored =
    localStorage.getItem(key);

  if (!stored) return fallback;

  try {
    return JSON.parse(stored);
  } catch {
    return fallback;
  }
}