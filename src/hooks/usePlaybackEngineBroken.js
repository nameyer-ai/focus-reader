import { useEffect } from 'react';

export function usePlaybackEngine({
  isPlaying,
  speed,
  words,
  setCurrentWordIndex,
  advanceWordIndex,
  calculateWordDelay,
  onComplete
}) {
if (
  !sessionCompletedRef.current
) {

  sessionCompletedRef.current = true;

  const completionState =
    handleCompletionState({
      adaptiveProfile,
      speed,
      totalWords: words.length,
      session: readingSession
    });

  setWordsRead(
    (w) =>
      w +
      completionState.sessionStats.wordsRead
  );

  setTotalSessions(
    (s) =>
      s +
      completionState.sessionStats.sessions
  );

  setAdaptiveProfile(
    completionState.updatedProfile
  );

  setReadingSession(
    completionState.completedSession
  );

  setSessionHistory((history) => [
    ...history,
    {
      id: Date.now(),

      completedAt:
        new Date().toISOString(),

      wordsRead:
        completionState.sessionStats.wordsRead,

      wpm: speed,

      wordDelay:
        calculateWordDelay(speed),

      focusMode,

      duration:
        completionState.completedSession
          ?.duration || 0
    }
  ]);

  setSessionCompleted(true);

  setIsPlaying(false);

}
  useEffect(() => {

    if (!isPlaying) return;

    const wordDelay =
      calculateWordDelay(speed);

    const interval =
      setInterval(() => {

        setCurrentWordIndex((prev) => {

          if (
            prev >= words.length - 2
          ) {

            onComplete?.();

            return prev;
          }

          return advanceWordIndex(
            prev,
            words.length
          );

        });

      }, wordDelay);

    return () =>
      clearInterval(interval);

  }, [
    isPlaying,
    speed,
    words,
    setCurrentWordIndex,
    advanceWordIndex,
    calculateWordDelay,
    onComplete
  ]);

}