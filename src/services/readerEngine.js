export function splitWords(text) {
  if (!text) return [];

  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}
export function calculateWordDelay(wpm) {
  if (!wpm) return 300;

  return Math.round(60000 / wpm);
}
export function calculateWPM(wordDelay) {
  if (!wordDelay) return 0;

  return Math.round(
    60000 / wordDelay
  );
}
export function calculateProgress(
  currentWordIndex,
  totalWords
) {
  if (!totalWords) return 0;

  return (
    ((currentWordIndex + 1) / totalWords) * 100
  );
}

export function getContextWords(
  words,
  currentWordIndex,
  contextSize = 2
) {
  if (!words.length) return [];

  const start = Math.max(
    0,
    currentWordIndex - contextSize
  );

  const end = Math.min(
    words.length,
    currentWordIndex + contextSize + 1
  );

  return words.slice(start, end);
}

export function getSentenceChunk(
  text,
  currentWordIndex
) {
  if (!text) return '';

  const sentences =
    text.match(/[^.!?]+[.!?]+/g) || [text];

  let wordCount = 0;

  for (const sentence of sentences) {
    const sentenceWords = splitWords(sentence);

    if (
      currentWordIndex <
      wordCount + sentenceWords.length
    ) {
      return sentence.trim();
    }

    wordCount += sentenceWords.length;
  }

  return sentences[0]?.trim() || '';
}
export function advanceWordIndex(
  currentWordIndex,
  totalWords
) {
  if (currentWordIndex >= totalWords - 1) {
    return currentWordIndex;
  }

  return currentWordIndex + 1;
}

export function isReadingComplete(
  currentWordIndex,
  totalWords
) {
  return currentWordIndex >= totalWords - 1;
}

export function buildUpdatedProfile(
  adaptiveProfile,
  speed
) {
  return {
    ...adaptiveProfile,
    completedTexts:
      adaptiveProfile.completedTexts + 1,
    preferredSpeed: speed
  };
}

export function calculateSessionStats(
  totalWords
) {
  return {
    wordsRead: totalWords,
    sessions: 1
  };
}
export function createReadingSession(
  textId,
  language
) {
  return {
    textId,
    language,
    startedAt: Date.now(),
    completedAt: null,
    completed: false,
    wordsRead: 0,
    duration: 0,
    averageWPM: 0
  };
}

export function completeReadingSession(
  session,
  wordsRead,
  averageWPM
) {
  return {
    ...session,
    completed: true,
    completedAt: Date.now(),
    wordsRead,
    averageWPM,
    duration:
      Date.now() - session.startedAt
  };
}
export function handleCompletionState({
  adaptiveProfile,
  speed,
  totalWords,
  session
}) {

  const sessionStats =
    calculateSessionStats(totalWords);

  const updatedProfile =
    buildUpdatedProfile(
      adaptiveProfile,
      speed
    );

  const completedSession =
    completeReadingSession(
      session,
      totalWords,
      calculateWPM(speed)
    );

  return {
    sessionStats,
    updatedProfile,
    completedSession
  };
}