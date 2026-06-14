// App.jsx — Focus Reader (fixed: duplicate state, reset stats, stale userId key, auth guard)
import React, { useState, useEffect, useRef } from 'react';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  UserButton,
  useUser
} from '@clerk/clerk-react';
import {
  Play, Pause, RotateCcw, Settings, BookOpen,
  Target, Trophy, Zap, Menu, Plus, Trash2,
  Download, Upload, CheckCircle
} from 'lucide-react';
import LandingPage from './LandingPage.jsx';
import { readingLibrary } from './data/readingLibrary.js';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const PAYPAL_PLAN_ID = 'P-9LL76996SP682060VNIBXKDA';
const PAYPAL_CLIENT_ID = 'AWOt9K9UY_OeS31zNdvQC9p6DvP-3ZLZRWTuvwYw-NgbAdwk4Ez_VN0UclsExM2wOOnDBq_nV8mGUWxD';
const OWNER_EMAILS = ['nameyer@live.com'];

// ─── Shared styles ─────────────────────────────────────────────────────────────
const fullPageStyle = {
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  padding: '2rem', boxSizing: 'border-box'
};
const cardStyle = {
  background: 'white', padding: '3rem', borderRadius: '20px',
  maxWidth: '500px', width: '100%', boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
};

// ─── PayPal Button ─────────────────────────────────────────────────────────────
function PayPalButton({ onSuccess }) {
  const containerRef = useRef(null);
  const rendered = useRef(false);

  useEffect(() => {
    if (rendered.current) return;
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&vault=true&intent=subscription`;
    script.setAttribute('data-sdk-integration-source', 'button-factory');
    script.async = true;
    script.onload = () => {
      if (!containerRef.current) return;
      window.paypal.Buttons({
        style: { shape: 'rect', color: 'blue', layout: 'vertical', label: 'subscribe' },
        createSubscription: (data, actions) =>
          actions.subscription.create({ plan_id: PAYPAL_PLAN_ID }),
        onApprove: (data) => onSuccess(data.subscriptionID),
        onError: (err) => {
          console.error('PayPal error', err);
          alert('Payment failed. Please try again.');
        }
      }).render(containerRef.current);
      rendered.current = true;
    };
    document.body.appendChild(script);
    return () => { if (script.parentNode) script.parentNode.removeChild(script); };
  }, [onSuccess]);

  return <div ref={containerRef} style={{ marginTop: '1rem' }} />;
}

// ─── Defaults ──────────────────────────────────────────────────────────────────
const defaultProgress = {
  wordsRead: 0, totalSessions: 0, streakDays: 0,
  timeSpentMs: 0, lastSessionDate: null, lastTextId: 1, lastWordIndex: 0
};
const defaultTexts = readingLibrary.map((text) => ({
  ...text,
  createdAt: text.createdAt || new Date().toISOString()
}));
const defaultSettings = {
  speed: 300, fontSize: 24, backgroundColor: '#1a1a2e',
  textColor: '#eee', highlightColor: '#00d4ff', focusMode: 'word'
};

// ─── Main reading tool ─────────────────────────────────────────────────────────
const ADHDReadingTool = () => {
  const { user } = useUser();

  // ── Storage key helpers — always uses current user id ──────────────────────
  // FIX: store userId in a ref so all helpers always read the current value,
  //      avoiding stale-closure bugs where progressKey() returns 'guest'
  //      after Clerk has loaded the real user.
  const userIdRef = useRef(user?.id || 'guest');
  useEffect(() => { userIdRef.current = user?.id || 'guest'; }, [user]);

  const progressKey  = () => `frProgress_${userIdRef.current}`;
  const textsKey     = () => `frTexts_${userIdRef.current}`;
  const settingsKey  = () => `frSettings_${userIdRef.current}`;
  const sessionsKey = () => `frSessions_${userIdRef.current}`;
  // ── Raw loaders ─────────────────────────────────────────────────────────────
  const loadProgress = () => {
    try {
      const saved = localStorage.getItem(progressKey());
      return saved ? { ...defaultProgress, ...JSON.parse(saved) } : { ...defaultProgress };
    } catch { return { ...defaultProgress }; }
  };
  const loadTexts = () => {
  try {
    const saved = localStorage.getItem(textsKey());
    const savedTexts = saved ? JSON.parse(saved) : [];

    const customTexts = savedTexts.filter(
      (text) => !readingLibrary.some((libraryText) => libraryText.id === text.id)
    );

    return [
      ...defaultTexts,
      ...customTexts
    ];
  } catch {
    return defaultTexts;
  }
};
  const loadSettings = () => {
    try {
      const saved = localStorage.getItem(settingsKey());
      return saved ? { ...defaultSettings, ...JSON.parse(saved) } : { ...defaultSettings };
    } catch { return { ...defaultSettings }; }
  };
const loadSessions = () => {
  try {
    const saved = localStorage.getItem(sessionsKey());
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};
  // ── State — declared ONCE ───────────────────────────────────────────────────
  const [texts,            setTexts]            = useState(defaultTexts);
  const [currentTextId,    setCurrentTextId]    = useState(1);
  const [showTextMenu,     setShowTextMenu]      = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [showAddText,      setShowAddText]       = useState(false);
  const [newTextTitle,     setNewTextTitle]      = useState('');
  const [newTextContent,   setNewTextContent]    = useState('');
  const [remoteUrl,        setRemoteUrl]         = useState('');
  const [isLoadingRemote,  setIsLoadingRemote]   = useState(false);
  const [isPlaying,        setIsPlaying]         = useState(false);
  const [currentWordIndex, setCurrentWordIndex]  = useState(0);
  const [speed,            setSpeed]             = useState(300);
  const [fontSize,         setFontSize]          = useState(24);
  const [backgroundColor,  setBackgroundColor]   = useState('#1a1a2e');
  const [textColor,        setTextColor]         = useState('#eee');
  const [highlightColor,   setHighlightColor]    = useState('#00d4ff');
  const [showSettings,     setShowSettings]      = useState(false);
  const [focusMode,        setFocusMode]         = useState('word');
  const [wordsRead,        setWordsRead]         = useState(0);
  const [totalSessions,    setTotalSessions]     = useState(0);
  const [streakDays,       setStreakDays]        = useState(0);
  const [timeSpentMs,      setTimeSpentMs]       = useState(0);
  const [dataLoaded,       setDataLoaded]        = useState(false);
  const [sessionHistory, setSessionHistory] = useState([]);
  // Quiz state
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(null);
  const intervalRef        = useRef(null);
  const sessionStartRef    = useRef(null);
  const lastCountedIndexRef = useRef(0);
  const isResettingRef     = useRef(false); // blocks saveProgress during reset

  const currentText = texts.find((t) => t.id === currentTextId)?.content || '';
  const words = currentText.split(' ').filter((w) => w.length > 0);
  const filteredTexts =
  selectedDifficulty === "All"
    ? texts
    : texts.filter((text) => text.difficulty === selectedDifficulty);
  // ── Load all data once user identity is known ───────────────────────────────
  // FIX: guard against user===null so we don't load guest data and then
  //      immediately overwrite it with real-user data, causing a flash.
  useEffect(() => {
    if (!user) return;               // wait for Clerk to resolve the real user
    userIdRef.current = user.id;     // ensure ref is up-to-date before loading

    const p = loadProgress();
    const t = loadTexts();
    const s = loadSettings();
    const sessions = loadSessions();
    setWordsRead(p.wordsRead);
    setTotalSessions(p.totalSessions);
    setStreakDays(p.streakDays);
    setTimeSpentMs(p.timeSpentMs || 0);
    setCurrentWordIndex(p.lastWordIndex || 0);
    setCurrentTextId(p.lastTextId || 1);
    lastCountedIndexRef.current = p.lastWordIndex || 0;
    setTexts(t);
    setSpeed(s.speed);
    setFontSize(s.fontSize);
    setSessionHistory(sessions);
    setBackgroundColor(s.backgroundColor);
    setTextColor(s.textColor);
    setHighlightColor(s.highlightColor);
    setFocusMode(s.focusMode);
    setDataLoaded(true);
  }, [user]);

  // ── Persist helpers ─────────────────────────────────────────────────────────
  const saveProgress = (updates) => {
    if (isResettingRef.current) return; // don't overwrite a reset in progress
    try {
      const current = loadProgress();
      const merged = { ...current, ...updates };
      localStorage.setItem(progressKey(), JSON.stringify(merged));
      if (user) user.update({ unsafeMetadata: { focusReaderProgress: merged } }).catch(() => {});
    } catch {}
  };
  const saveTexts = (newTexts) => {
    try { localStorage.setItem(textsKey(), JSON.stringify(newTexts)); } catch {}
  };
  const saveSettings = (updates) => {
    try {
      const current = loadSettings();
      localStorage.setItem(settingsKey(), JSON.stringify({ ...current, ...updates }));
    } catch {}
  };
const saveSessions = (sessions) => {
  try {
    localStorage.setItem(sessionsKey(), JSON.stringify(sessions));
  } catch {}
};
  // ── Persist texts whenever they change (after data is loaded) ───────────────
  useEffect(() => {
    if (dataLoaded) saveTexts(texts);
  }, [texts, dataLoaded]);

  // ── Persist settings whenever they change ───────────────────────────────────
  useEffect(() => {
    if (dataLoaded) saveSettings({ speed, fontSize, backgroundColor, textColor, highlightColor, focusMode });
  }, [speed, fontSize, backgroundColor, textColor, highlightColor, focusMode, dataLoaded]);

  // ── Streak calculation ──────────────────────────────────────────────────────
  const updateStreak = () => {
    const progress = loadProgress();
    const today = new Date().toDateString();
    const lastSession = progress.lastSessionDate;
    if (lastSession === today) return progress.streakDays;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    return lastSession === yesterday ? progress.streakDays + 1 : 1;
  };

  // ── Track time while playing ─────────────────────────────────────────────────
  useEffect(() => {
    if (isPlaying) {
      sessionStartRef.current = Date.now();
    } else if (sessionStartRef.current) {
      const elapsed = Date.now() - sessionStartRef.current;
      setTimeSpentMs((t) => {
        const newTime = t + elapsed;
        saveProgress({ timeSpentMs: newTime });
        return newTime;
      });
      sessionStartRef.current = null;
    }
  }, [isPlaying]);

  // ── Save last position when word index changes ───────────────────────────────
  useEffect(() => {
    if (dataLoaded) saveProgress({ lastTextId: currentTextId, lastWordIndex: currentWordIndex });
  }, [currentWordIndex, currentTextId, dataLoaded]);

  // ── Reading interval ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (isPlaying && currentWordIndex < words.length) {
      intervalRef.current = setInterval(() => {
        setCurrentWordIndex((prev) => {
          if (prev >= words.length - 1) {
            setIsPlaying(false);
            setShowQuiz(true);
            setSelectedAnswers({});
            setQuizCompleted(false);
            setQuizScore(null);
            const wordsThisSession = prev - lastCountedIndexRef.current;
            lastCountedIndexRef.current = 0;
            setWordsRead((w) => {
              const newWords = w + wordsThisSession;
              setTotalSessions((s) => {
                const newSessions = s + 1;
                const newStreak = updateStreak();
                setStreakDays(newStreak);
                saveProgress({
                  wordsRead: newWords, totalSessions: newSessions,
                  streakDays: newStreak, lastSessionDate: new Date().toDateString(),
                  lastWordIndex: 0
                });
                return newSessions;
              });
              return newWords;
            });
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    } else {
      clearInterval(intervalRef.current);
      if (!isPlaying && currentWordIndex > 0) {
        const wordsThisSegment = currentWordIndex - lastCountedIndexRef.current;
        if (wordsThisSegment > 0) {
          lastCountedIndexRef.current = currentWordIndex;
          setWordsRead((w) => {
            const newWords = w + wordsThisSegment;
            saveProgress({ wordsRead: newWords, lastWordIndex: currentWordIndex });
            return newWords;
          });
        }
      }
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, speed, words.length]);

  // ── Format time ──────────────────────────────────────────────────────────────
  const formatTime = (ms) => {
    const mins = Math.floor(ms / 60000);
    const hrs = Math.floor(mins / 60);
    if (hrs > 0) return `${hrs}h ${mins % 60}m`;
    return `${mins}m`;
  };

  const togglePlay = () => {
    if (currentWordIndex >= words.length - 1) {
      setCurrentWordIndex(0);
      lastCountedIndexRef.current = 0;
    }
    setIsPlaying((p) => !p);
  };

  // Reset reading position only
  const reset = () => {
    setIsPlaying(false);
    setCurrentWordIndex(0);
    lastCountedIndexRef.current = 0;
    saveProgress({ lastWordIndex: 0 });
  };

  // FIX: Reset all progress stats — writes correct key, updates all state
  const [confirmingReset, setConfirmingReset] = useState(false);

const resetProgress = () => {
  if (!confirmingReset) {
    setConfirmingReset(true);
    setTimeout(() => setConfirmingReset(false), 4000); // auto-cancel after 4s
    return;
  }
  setConfirmingReset(false);
  isResettingRef.current = true;
  sessionStartRef.current = null;
  const key = progressKey();
  const cleared = {
    wordsRead: 0, totalSessions: 0, streakDays: 0,
    timeSpentMs: 0, lastSessionDate: null,
    lastTextId: currentTextId, lastWordIndex: 0
  };
  localStorage.setItem(key, JSON.stringify(cleared));
  setWordsRead(0);
  setTotalSessions(0);
  setStreakDays(0);
  setTimeSpentMs(0);
  lastCountedIndexRef.current = 0;
  if (user) user.update({ unsafeMetadata: { focusReaderProgress: cleared } }).catch(() => {});
  setTimeout(() => { isResettingRef.current = false; }, 200);
};

  const addNewText = () => {
    if (newTextTitle.trim() && newTextContent.trim()) {
      const newText = {
        id: Date.now(), title: newTextTitle.trim(),
        content: newTextContent.trim(), createdAt: new Date().toISOString()
      };
      const updated = [...texts, newText];
      setTexts(updated);
      setCurrentTextId(newText.id);
      setNewTextTitle(''); setNewTextContent('');
      setShowAddText(false); setCurrentWordIndex(0); setIsPlaying(false);
    }
  };

  const deleteText = (id) => {
    if (texts.length === 1) { alert('You must keep at least one text!'); return; }
    const newTexts = texts.filter((t) => t.id !== id);
    setTexts(newTexts);
    if (currentTextId === id) { setCurrentTextId(newTexts[0].id); setCurrentWordIndex(0); setIsPlaying(false); }
  };

  const loadFromRemote = async () => {
    if (!remoteUrl.trim()) return;
    setIsLoadingRemote(true);
    try {
      const response = await fetch(remoteUrl);
      if (!response.ok) throw new Error('Failed to fetch');
      const content = await response.text();
      const filename = remoteUrl.split('/').pop() || 'Remote Text';
      const newText = { id: Date.now(), title: `Remote: ${filename}`, content, createdAt: new Date().toISOString(), remoteUrl };
      setTexts((t) => [...t, newText]);
      setCurrentTextId(newText.id); setRemoteUrl(''); setCurrentWordIndex(0); setIsPlaying(false);
      alert('Remote text loaded successfully!');
    } catch { alert('Failed to load remote text.'); }
    finally { setIsLoadingRemote(false); }
  };

  const updateCurrentText = (newContent) => {
    setTexts((t) => t.map((x) => (x.id === currentTextId ? { ...x, content: newContent } : x)));
    setCurrentWordIndex(0); setIsPlaying(false);
  };

  const downloadReport = () => {
    const name = user?.firstName || user?.primaryEmailAddress?.emailAddress || 'Learner';
    const avgWpm = timeSpentMs > 0 ? Math.round(wordsRead / (timeSpentMs / 60000)) : 0;
    const avgSession = totalSessions > 0 ? Math.round(wordsRead / totalSessions) : 0;
    const report = `FOCUS READER — PROGRESS REPORT
Generated: ${new Date().toLocaleDateString('en-ZA', { dateStyle: 'full' })}
User: ${name}
${'─'.repeat(50)}

READING STATISTICS
──────────────────
Total Words Read:      ${wordsRead.toLocaleString()}
Total Sessions:        ${totalSessions}
Reading Streak:        ${streakDays} day${streakDays !== 1 ? 's' : ''}
Total Time Reading:    ${formatTime(timeSpentMs)}

PERFORMANCE AVERAGES
────────────────────
Words per Session:     ${avgSession}
Reading Speed:         ${avgWpm} words per minute
Time per Session:      ${totalSessions > 0 ? formatTime(Math.round(timeSpentMs / totalSessions)) : '0m'}

TEXT LIBRARY
────────────
${texts.map((t, i) => `${i + 1}. ${t.title} (${t.content.split(' ').filter(w => w.length > 0).length} words)`).join('\n')}

${'─'.repeat(50)}
Focus Reader · app.toptutoring.co.za
`;
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `focus-reader-report-${new Date().toISOString().split('T')[0]}.txt`;
    link.click();
  };

  const exportTexts = () => {
    const dataBlob = new Blob([JSON.stringify(texts, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a'); link.href = url; link.download = 'focus-reader-texts.json'; link.click();
  };

  const importTexts = (event) => {
    const file = event.target.files?.[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (Array.isArray(imported)) { setTexts((t) => [...t, ...imported]); alert(`Imported ${imported.length} text(s)!`); }
        else alert('File did not contain an array of texts.');
      } catch { alert('Failed to import. Make sure the file is valid JSON.'); }
    };
    reader.readAsText(file);
  };

  const getContextWords = () => {
    const context = 2;
    const start = Math.max(0, currentWordIndex - context);
    const end = Math.min(words.length, currentWordIndex + context + 1);
    return words.slice(start, end).map((word, idx) => ({
      word, index: start + idx, isCurrent: start + idx === currentWordIndex
    }));
  };

  const renderSentenceFocus = () => {
    const sentences = currentText.match(/[^.!?]+[.!?]+/g) || [currentText];
    let wordCount = 0; let currentSentenceIdx = 0;
    for (let i = 0; i < sentences.length; i++) {
      const sw = sentences[i].split(' ').filter((w) => w.length > 0);
      if (currentWordIndex < wordCount + sw.length) { currentSentenceIdx = i; break; }
      wordCount += sw.length;
    }
    return sentences.map((sentence, idx) => (
      <p key={idx} style={{ fontSize: `${fontSize}px`, opacity: idx === currentSentenceIdx ? 1 : 0.3, transition: 'opacity 0.3s', margin: '1rem 0', lineHeight: 1.8 }}>
        {sentence}
      </p>
    ));
  };

  const progressPercent = words.length ? (currentWordIndex / words.length) * 100 : 0;

  // Show loading state until user is resolved and data is loaded
  if (!dataLoaded) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#1a1a2e' }}>
        <div style={{ color: '#00d4ff', fontSize: '1.2rem' }}>Loading your progress...</div>
      </div>
    );
  }
const currentTextObject =
  texts.find((t) => t.id === currentTextId);

const currentQuestions =
  currentTextObject?.questions || [];

const handleAnswerSelect = (questionId, answerIndex) => {
  if (quizCompleted) return;

  setSelectedAnswers((prev) => ({
    ...prev,
    [questionId]: answerIndex
  }));
};

const submitQuiz = () => {
  const totalQuestions = currentQuestions.length;

  if (!totalQuestions) return;

  let correct = 0;

  currentQuestions.forEach((q) => {
    if (selectedAnswers[q.id] === q.correctAnswerIndex) {
      correct += 1;
    }
  });

  const score = Math.round((correct / totalQuestions) * 100);

  setQuizScore({
    correct,
    total: totalQuestions,
    percentage: score
  });

  setQuizCompleted(true);

  const sessionRecord = {
    id: Date.now(),
    textId: currentTextObject?.id,
    title: currentTextObject?.title || "Untitled Text",
    difficulty: currentTextObject?.difficulty || "Unspecified",
    gradeBand: currentTextObject?.gradeBand || "Unspecified",
    ageBand: currentTextObject?.ageBand || "Unspecified",
    category: currentTextObject?.category || "Unspecified",
    estimatedReadingLevel: currentTextObject?.estimatedReadingLevel || null,
    wordCount: currentTextObject?.wordCount || words.length,
    comprehensionScore: score,
    correctAnswers: correct,
    totalQuestions,
    completedAt: new Date().toISOString()
  };

  console.log("Saving session:", sessionRecord);

  setSessionHistory((history) => {
    const updated = [...history, sessionRecord];
    saveSessions(updated);
    console.log("Saved sessions:", updated);
    return updated;
  });
};
const totalCompletedSessions = sessionHistory.length;

const totalComprehensionScore = sessionHistory.reduce(
  (sum, session) => sum + (session.comprehensionScore || 0),
  0
);

const averageComprehension =
  totalCompletedSessions > 0
    ? Math.round(totalComprehensionScore / totalCompletedSessions)
    : 0;

const highestComprehension =
  totalCompletedSessions > 0
    ? Math.max(...sessionHistory.map((s) => s.comprehensionScore || 0))
    : 0;

const totalWordsFromSessions = sessionHistory.reduce(
  (sum, session) => sum + (session.wordCount || 0),
  0
);

const beginnerSessions = sessionHistory.filter(
  (s) => s.difficulty === "Beginner"
).length;

const intermediateSessions = sessionHistory.filter(
  (s) => s.difficulty === "Intermediate"
).length;

const advancedSessions = sessionHistory.filter(
  (s) => s.difficulty === "Advanced"
).length;

const firstFiveAverage =
  sessionHistory.length >= 5
    ? Math.round(
        sessionHistory
          .slice(0, 5)
          .reduce((sum, s) => sum + (s.comprehensionScore || 0), 0) / 5
      )
    : null;

const lastFiveAverage =
  sessionHistory.length >= 5
    ? Math.round(
        sessionHistory
          .slice(-5)
          .reduce((sum, s) => sum + (s.comprehensionScore || 0), 0) / 5
      )
    : null;

const comprehensionImprovement =
  firstFiveAverage !== null && lastFiveAverage !== null
    ? lastFiveAverage - firstFiveAverage
    : null;

   return (
    <div style={{ minHeight: '100vh', backgroundColor, color: textColor, padding: '2rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
        <UserButton afterSignOutUrl="/" />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <BookOpen size={32} color={highlightColor} />
            <div>
              <h1 style={{ fontSize: '2rem', margin: 0, color: highlightColor }}>Focus Reader</h1>
              {user && <div style={{ fontSize: '0.85rem', opacity: 0.6, marginTop: '0.2rem' }}>Welcome back, {user.firstName || user.primaryEmailAddress?.emailAddress} 👋</div>}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => setShowTextMenu((s) => !s)} style={{ padding: '0.75rem 1.5rem', backgroundColor: showTextMenu ? highlightColor : 'rgba(255,255,255,0.1)', color: showTextMenu ? backgroundColor : textColor, border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', transition: 'all 0.3s' }}>
              <Menu size={20} /> Texts ({texts.length})
            </button>
            <button onClick={() => setShowSettings((s) => !s)} style={{ padding: '0.75rem 1.5rem', backgroundColor: showSettings ? highlightColor : 'rgba(255,255,255,0.1)', color: showSettings ? backgroundColor : textColor, border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', transition: 'all 0.3s' }}>
              <Settings size={20} /> Settings
            </button>
          </div>
        </div>

        {/* Text menu */}
        {showTextMenu && (
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ margin: 0, color: highlightColor }}>Your Reading Texts</h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={exportTexts} style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(255,255,255,0.1)', color: textColor, border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Download size={16} /> Export
                </button>
                <label style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(255,255,255,0.1)', color: textColor, border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Upload size={16} /> Import
                  <input type="file" accept=".json" onChange={importTexts} style={{ display: 'none' }} />
                </label>
                <button onClick={() => setShowAddText((s) => !s)} style={{ padding: '0.5rem 1rem', backgroundColor: highlightColor, color: backgroundColor, border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                  <Plus size={16} /> Add New
                </button>
              </div>
            </div>

            {showAddText && (
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                <h4 style={{ marginTop: 0, marginBottom: '1rem' }}>Add New Text</h4>
                <input type="text" placeholder="Text title..." value={newTextTitle} onChange={(e) => setNewTextTitle(e.target.value)} style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', color: textColor, border: '2px solid rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box' }} />
                <textarea placeholder="Paste or type your text here..." value={newTextContent} onChange={(e) => setNewTextContent(e.target.value)} style={{ width: '100%', minHeight: '100px', padding: '0.75rem', marginBottom: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', color: textColor, border: '2px solid rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box' }} />
                <div style={{ marginBottom: '1rem' }}>
                  <h5 style={{ marginBottom: '0.5rem' }}>Or Load from URL:</h5>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input type="text" placeholder="https://example.com/text.txt" value={remoteUrl} onChange={(e) => setRemoteUrl(e.target.value)} style={{ flex: 1, padding: '0.75rem', backgroundColor: 'rgba(255,255,255,0.05)', color: textColor, border: '2px solid rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '1rem' }} />
                    <button onClick={loadFromRemote} disabled={isLoadingRemote} style={{ padding: '0.75rem 1.5rem', backgroundColor: isLoadingRemote ? 'rgba(255,255,255,0.05)' : highlightColor, color: isLoadingRemote ? textColor : backgroundColor, border: 'none', borderRadius: '6px', cursor: isLoadingRemote ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}>
                      {isLoadingRemote ? 'Loading...' : 'Load URL'}
                    </button>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                  <button onClick={() => { setShowAddText(false); setNewTextTitle(''); setNewTextContent(''); setRemoteUrl(''); }} style={{ padding: '0.75rem 1.5rem', backgroundColor: 'rgba(255,255,255,0.1)', color: textColor, border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
                  <button onClick={addNewText} style={{ padding: '0.75rem 1.5rem', backgroundColor: highlightColor, color: backgroundColor, border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Add Text</button>
                </div>
              </div>
            )}
            <div
  style={{
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1rem',
    flexWrap: 'wrap'
  }}
>
  {["All", "Beginner", "Intermediate", "Advanced"].map((difficulty) => (
    <button
      key={difficulty}
      onClick={() => setSelectedDifficulty(difficulty)}
      style={{
        padding: '0.5rem 1rem',
        backgroundColor:
          selectedDifficulty === difficulty
            ? highlightColor
            : 'rgba(255,255,255,0.1)',
        color:
          selectedDifficulty === difficulty
            ? backgroundColor
            : textColor,
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}
    >
      {difficulty}
    </button>
  ))}
</div>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
             {filteredTexts.map((text) => (
                <div key={text.id} style={{ padding: '1rem', backgroundColor: currentTextId === text.id ? 'rgba(0,212,255,0.1)' : 'rgba(255,255,255,0.03)', border: currentTextId === text.id ? `2px solid ${highlightColor}` : '2px solid transparent', borderRadius: '8px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.2s' }}
                  onClick={() => { setCurrentTextId(text.id); setCurrentWordIndex(0); setIsPlaying(false); }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{text.title}</div>
                    <div style={{ fontSize: '0.875rem', opacity: 0.7 }}>{text.wordCount || text.content.split(' ').filter((w) => w.length > 0).length} words · {text.difficulty} · {text.gradeBand} · Age {text.ageBand} · {text.category}</div>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); if (window.confirm(`Delete "${text.title}"?`)) deleteText(text.id); }} style={{ padding: '0.5rem', backgroundColor: 'rgba(255,0,0,0.2)', color: '#ff6b6b', border: 'none', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats dashboard */}
        <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '16px', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h3 style={{ margin: 0, color: highlightColor, fontSize: '1.1rem' }}>📊 Progress Dashboard</h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
  onClick={resetProgress}
  style={{
    padding: '0.5rem 1rem',
    backgroundColor: confirmingReset ? '#c53030' : 'rgba(255,100,100,0.2)',
    color: confirmingReset ? 'white' : '#ff6b6b',
    border: '1px solid rgba(255,100,100,0.3)',
    borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem'
  }}>
  {confirmingReset ? '⚠️ Click again to confirm' : 'Reset Stats'}
</button>
              <button onClick={downloadReport} style={{ padding: '0.5rem 1rem', backgroundColor: highlightColor, color: backgroundColor, border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Download size={14} /> Download Report
              </button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
            {[
              { icon: <Target size={22} color={highlightColor} />, label: 'Words Read', value: wordsRead.toLocaleString() },
              { icon: <Trophy size={22} color={highlightColor} />, label: 'Sessions', value: totalSessions },
              { icon: <Zap size={22} color={highlightColor} />, label: 'Streak Days', value: streakDays },
              { icon: <BookOpen size={22} color={highlightColor} />, label: 'Time Reading', value: formatTime(timeSpentMs) },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {icon}
                <div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{label}</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{value}</div>
                </div>
              </div>
            ))}
          </div>
          {totalSessions > 0 && (
            <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '8px', fontSize: '0.85rem', opacity: 0.7 }}>
              Average session: <strong>{Math.round(wordsRead / totalSessions)} words</strong> &nbsp;·&nbsp;
              Avg time per session: <strong>{formatTime(Math.round(timeSpentMs / totalSessions))}</strong> &nbsp;·&nbsp;
              Reading speed: <strong>{timeSpentMs > 0 ? Math.round((wordsRead / (timeSpentMs / 60000))) : 0} wpm</strong>
            </div>
          )}
        </div>
{sessionHistory.length > 0 && (
  <div style={{
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: '1.5rem',
    borderRadius: '16px',
    marginBottom: '2rem'
  }}>
    <h3 style={{ marginTop: 0, color: highlightColor }}>
      Recent Sessions
    </h3>

    {sessionHistory.slice(-5).reverse().map((session) => (
      <div
        key={session.id}
        style={{
          padding: '1rem',
          backgroundColor: 'rgba(255,255,255,0.04)',
          borderRadius: '10px',
          marginBottom: '0.75rem'
        }}
      >
        <strong>{session.title}</strong>
        <div style={{ fontSize: '0.85rem', opacity: 0.75 }}>
          {session.difficulty} · {session.gradeBand} · Score: {session.correctAnswers}/{session.totalQuestions} ({session.comprehensionScore}%)
        </div>
        <div style={{ fontSize: '0.8rem', opacity: 0.55 }}>
          {new Date(session.completedAt).toLocaleString()}
        </div>
      </div>
    ))}
  </div>
)}
        {/* Settings panel */}
        {showSettings && (
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', marginBottom: '2rem' }}>
            <h3 style={{ marginTop: 0, color: highlightColor }}>Customize Your Experience</h3>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Reading Speed: {Math.round(60000 / speed)} words per minute</label>
                <input type="range" min="100" max="800" value={speed} onChange={(e) => { const wasPlaying = isPlaying; setIsPlaying(false); setSpeed(Number(e.target.value)); if (wasPlaying) setTimeout(() => setIsPlaying(true), 50); }} style={{ width: '100%', accentColor: highlightColor }} />
                <div style={{ fontSize: '0.875rem', opacity: 0.7, marginTop: '0.25rem' }}>Slower speeds help with focus. ({speed}ms per word)</div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Font Size: {fontSize}px</label>
                <input type="range" min="16" max="48" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} style={{ width: '100%', accentColor: highlightColor }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Focus Mode</label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {[['word', 'Single Word'], ['context', 'With Context'], ['sentence', 'Full Sentence']].map(([mode, label]) => (
                    <button key={mode} onClick={() => setFocusMode(mode)} style={{ padding: '0.75rem 1.5rem', backgroundColor: focusMode === mode ? highlightColor : 'rgba(255,255,255,0.1)', color: focusMode === mode ? backgroundColor : textColor, border: 'none', borderRadius: '8px', cursor: 'pointer', flex: 1, transition: 'all 0.3s' }}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Color Theme</label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {[['Background', backgroundColor, setBackgroundColor], ['Text', textColor, setTextColor], ['Highlight', highlightColor, setHighlightColor]].map(([label, val, setter]) => (
                    <div key={label}>
                      <label style={{ fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>{label}</label>
                      <input type="color" value={val} onChange={(e) => setter(e.target.value)} style={{ width: '60px', height: '40px', cursor: 'pointer', border: 'none', borderRadius: '4px' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
{/* Parent Report */}
{sessionHistory.length > 0 && (
  <div
    style={{
      backgroundColor: 'rgba(255,255,255,0.05)',
      padding: '1.5rem',
      borderRadius: '16px',
      marginBottom: '2rem'
    }}
  >
    <h3 style={{ marginTop: 0, color: highlightColor }}>
      Parent Progress Report
    </h3>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}
    >
      <div>
        <div style={{ opacity: 0.6, fontSize: '0.85rem' }}>Completed Sessions</div>
        <strong style={{ fontSize: '1.4rem' }}>{totalCompletedSessions}</strong>
      </div>

      <div>
        <div style={{ opacity: 0.6, fontSize: '0.85rem' }}>Words Practised</div>
        <strong style={{ fontSize: '1.4rem' }}>{totalWordsFromSessions.toLocaleString()}</strong>
      </div>

      <div>
        <div style={{ opacity: 0.6, fontSize: '0.85rem' }}>Average Comprehension</div>
        <strong style={{ fontSize: '1.4rem' }}>{averageComprehension}%</strong>
      </div>

      <div>
        <div style={{ opacity: 0.6, fontSize: '0.85rem' }}>Best Score</div>
        <strong style={{ fontSize: '1.4rem' }}>{highestComprehension}%</strong>
      </div>
    </div>

    <div
      style={{
        backgroundColor: 'rgba(255,255,255,0.04)',
        padding: '1rem',
        borderRadius: '10px',
        marginBottom: '1rem'
      }}
    >
      <strong>Reading Level Activity</strong>
      <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
        Beginner: {beginnerSessions} session(s) · Intermediate: {intermediateSessions} session(s) · Advanced: {advancedSessions} session(s)
      </div>
    </div>

    {comprehensionImprovement !== null && (
      <div
        style={{
          backgroundColor: 'rgba(255,255,255,0.04)',
          padding: '1rem',
          borderRadius: '10px'
        }}
      >
        <strong>Comprehension Trend</strong>
        <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
          First 5 sessions: {firstFiveAverage}% · Last 5 sessions: {lastFiveAverage}% · Improvement: {comprehensionImprovement >= 0 ? '+' : ''}{comprehensionImprovement}%
        </div>
      </div>
    )}
  </div>
)}
        {/* Reader display */}
        <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '3rem', borderRadius: '16px', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', position: 'relative' }}>
          {focusMode === 'word' && (
            <div style={{ fontSize: `${fontSize * 2}px`, fontWeight: 'bold', color: highlightColor, textAlign: 'center' }}>
              {words[currentWordIndex] || 'Start reading...'}
            </div>
          )}
          {focusMode === 'context' && (
            <div style={{ fontSize: `${fontSize}px`, textAlign: 'center', lineHeight: 2 }}>
              {getContextWords().map((item, idx) => (
                <span key={idx} style={{ color: item.isCurrent ? highlightColor : textColor, fontSize: item.isCurrent ? `${fontSize * 1.5}px` : `${fontSize}px`, fontWeight: item.isCurrent ? 'bold' : 'normal', opacity: item.isCurrent ? 1 : 0.5, transition: 'all 0.3s', margin: '0 0.25rem' }}>
                  {item.word}
                </span>
              ))}
            </div>
          )}
          {focusMode === 'sentence' && (
            <div style={{ width: '100%', maxWidth: '800px' }}>{renderSentenceFocus()}</div>
          )}
          <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ width: `${progressPercent}%`, height: '100%', backgroundColor: highlightColor, transition: 'width 0.3s' }} />
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button onClick={togglePlay} style={{ padding: '1rem 2rem', backgroundColor: highlightColor, color: backgroundColor, border: 'none', borderRadius: '12px', cursor: 'pointer', fontSize: '1.125rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.75rem', transition: 'transform 0.2s' }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            {isPlaying ? 'Pause' : currentWordIndex >= words.length - 1 ? 'Start Over' : 'Play'}
          </button>
          <button onClick={reset} style={{ padding: '1rem 2rem', backgroundColor: 'rgba(255,255,255,0.1)', color: textColor, border: 'none', borderRadius: '12px', cursor: 'pointer', fontSize: '1.125rem', display: 'flex', alignItems: 'center', gap: '0.75rem', transition: 'all 0.2s' }}>
            <RotateCcw size={24} /> Reset
          </button>
        </div>
{showQuiz && currentQuestions.length > 0 && (
  <div style={{
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: '2rem',
    borderRadius: '16px',
    marginBottom: '2rem'
  }}>
    <h3 style={{ color: highlightColor, marginTop: 0 }}>
      Comprehension Check
    </h3>

    {currentQuestions.map((q, questionIndex) => (
      <div key={q.id} style={{ marginBottom: '1.5rem' }}>
        <p style={{ fontWeight: 'bold' }}>
          {questionIndex + 1}. {q.question}
        </p>

        <div style={{ display: 'grid', gap: '0.5rem' }}>
          {q.options.map((option, optionIndex) => (
            <button
              key={optionIndex}
              onClick={() => handleAnswerSelect(q.id, optionIndex)}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: 'none',
                textAlign: 'left',
                cursor: quizCompleted ? 'default' : 'pointer',
                backgroundColor:
                  selectedAnswers[q.id] === optionIndex
                    ? highlightColor
                    : 'rgba(255,255,255,0.1)',
                color:
                  selectedAnswers[q.id] === optionIndex
                    ? backgroundColor
                    : textColor
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {quizCompleted && (
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            Correct answer: {q.options[q.correctAnswerIndex]}
            {q.explanation ? ` — ${q.explanation}` : ''}
          </p>
        )}
      </div>
    ))}

    {!quizCompleted ? (
      <button
        onClick={submitQuiz}
        style={{
          padding: '1rem 2rem',
          backgroundColor: highlightColor,
          color: backgroundColor,
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Submit Answers
      </button>
    ) : (
      <div style={{
        padding: '1rem',
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderRadius: '10px',
        fontWeight: 'bold'
      }}>
        Score: {quizScore.correct}/{quizScore.total} — {quizScore.percentage}%
      </div>
    )}
  </div>
)}
        {/* Paste / Edit text area */}
        <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', border: `1px solid rgba(255,255,255,0.1)` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600, fontSize: '1.1rem', color: highlightColor }}>
              ✏️ Paste or Edit Text
            </label>
            <span style={{ fontSize: '0.85rem', opacity: 0.6 }}>
              Currently: <strong>{texts.find((t) => t.id === currentTextId)?.title}</strong> · {words.length} words
            </span>
          </div>
          <textarea
            value={currentText}
            onChange={(e) => updateCurrentText(e.target.value)}
            style={{ width: '100%', minHeight: '200px', padding: '1rem', fontSize: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', color: textColor, border: `2px solid ${highlightColor}40`, borderRadius: '8px', fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box', lineHeight: 1.7 }}
            placeholder="Paste any text here — articles, homework, book passages, worksheets — then press Play to start reading..."
          />
          <div style={{ fontSize: '0.85rem', opacity: 0.6, marginTop: '0.5rem' }}>
            💡 Tip: Paste any text directly here, or use the <strong>Texts</strong> menu above to save multiple texts and switch between them.
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Trial expired overlay ─────────────────────────────────────────────────────
function TrialExpiredOverlay({ onSubscribe }) {
  const containerRef = useRef(null);
  const rendered = useRef(false);
  useEffect(() => {
    if (rendered.current) return;
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&vault=true&intent=subscription`;
    script.async = true;
    script.onload = () => {
      if (!containerRef.current) return;
      window.paypal.Buttons({
        style: { shape: 'rect', color: 'blue', layout: 'vertical', label: 'subscribe' },
        createSubscription: (data, actions) => actions.subscription.create({ plan_id: PAYPAL_PLAN_ID }),
        onApprove: (data) => onSubscribe(data.subscriptionID),
        onError: (err) => { console.error('PayPal error', err); alert('Payment failed. Please try again.'); }
      }).render(containerRef.current);
      rendered.current = true;
    };
    document.body.appendChild(script);
  }, [onSubscribe]);

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ background: 'white', borderRadius: '20px', padding: '3rem', maxWidth: '480px', width: '100%', textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⏰</div>
        <h2 style={{ color: '#1a1a2e', marginBottom: '0.75rem', fontSize: '1.8rem' }}>Your Free Trial Has Ended</h2>
        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '0.5rem' }}>
          We hope you enjoyed your 7-day free trial of Focus Reader!
        </p>
        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '2rem' }}>
          Subscribe now for just <strong>$12/month</strong> to keep full access for you and your learners.
        </p>
        <div ref={containerRef} />
        <p style={{ color: '#aaa', fontSize: '0.8rem', marginTop: '1rem' }}>Cancel any time. No lock-in.</p>
      </div>
    </div>
  );
}

// ─── Trial warning banner ──────────────────────────────────────────────────────
function TrialWarningBanner({ daysLeft }) {
  if (daysLeft > 5) return null;
  const urgent = daysLeft <= 1;
  return (
    <div style={{ background: urgent ? '#fff5f5' : '#fffbeb', borderBottom: `3px solid ${urgent ? '#fc8181' : '#f6ad55'}`, padding: '0.75rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontFamily: 'sans-serif', fontSize: '0.95rem' }}>
      <span>{urgent ? '🚨' : '⚠️'}</span>
      <span style={{ color: urgent ? '#c53030' : '#744210' }}>
        {daysLeft <= 0
          ? 'Your free trial has expired.'
          : daysLeft === 1
          ? 'Last day of your free trial! Subscribe today to keep access.'
          : `Your free trial ends in ${daysLeft} days. Subscribe to keep access.`}
      </span>
      <a href="#pricing" style={{ color: urgent ? '#c53030' : '#744210', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>
        Subscribe now →
      </a>
    </div>
  );
}

// ─── Trial-aware wrapper ───────────────────────────────────────────────────────
function TrialWrapper({ children }) {
  const { user } = useUser();
  const [trialStatus, setTrialStatus] = useState('loading');
  const [daysLeft, setDaysLeft] = useState(7);

  const storageKey = user ? `focusReaderTrial_${user.id}` : null;
  const subKey = user ? `focusReaderSub_${user.id}` : null;

  useEffect(() => {
    if (!storageKey || !user) return;

    const email = user.primaryEmailAddress?.emailAddress?.toLowerCase();
    if (OWNER_EMAILS.includes(email)) {
      setTrialStatus('subscribed');
      return;
    }

    if (localStorage.getItem(subKey)) { setTrialStatus('subscribed'); return; }
    let trialStart = localStorage.getItem(storageKey);
    if (!trialStart) {
      trialStart = new Date().toISOString();
      localStorage.setItem(storageKey, trialStart);
    }
    const start = new Date(trialStart);
    const diffDays = Math.floor((Date.now() - start) / (1000 * 60 * 60 * 24));
    const remaining = 7 - diffDays;
    setDaysLeft(remaining);
    setTrialStatus(remaining <= 0 ? 'expired' : 'active');
  }, [storageKey, subKey]);

  const handleSubscribe = (subId) => {
    localStorage.setItem(subKey, subId);
    setTrialStatus('subscribed');
  };

  if (trialStatus === 'loading') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#1a1a2e' }}>
        <div style={{ color: 'white', fontSize: '1.2rem' }}>Loading...</div>
      </div>
    );
  }

  return (
    <>
      {trialStatus === 'active' && <TrialWarningBanner daysLeft={daysLeft} />}
      {trialStatus === 'expired' && <TrialExpiredOverlay onSubscribe={handleSubscribe} />}
      {children}
    </>
  );
}

// ─── Auth screens ──────────────────────────────────────────────────────────────
function AuthScreen({ mode }) {
  if (mode === 'register-paid') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '2rem' }}>
        <div style={{ background: 'white', padding: '2.5rem', borderRadius: '20px', maxWidth: '480px', width: '100%', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
          <div style={{ background: '#f0fff4', border: '2px solid #48bb78', borderRadius: '12px', padding: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <CheckCircle size={24} color="#48bb78" />
            <div>
              <div style={{ fontWeight: 'bold', color: '#276749' }}>Payment successful! 🎉</div>
              <div style={{ fontSize: '0.85rem', color: '#276749' }}>Create your account to access Focus Reader.</div>
            </div>
          </div>
          <SignUp routing="hash" afterSignUpUrl="/" appearance={{ elements: { rootBox: { width: '100%' }, card: { boxShadow: 'none', padding: 0 } } }} />
        </div>
      </div>
    );
  }
  if (mode === 'register-trial') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '2rem' }}>
        <div style={{ background: 'white', padding: '2.5rem', borderRadius: '20px', maxWidth: '480px', width: '100%', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
          <div style={{ background: '#ebf8ff', border: '2px solid #63b3ed', borderRadius: '12px', padding: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <CheckCircle size={24} color="#3182ce" />
            <div>
              <div style={{ fontWeight: 'bold', color: '#2b6cb0' }}>Start your 7-day free trial! 🎉</div>
              <div style={{ fontSize: '0.85rem', color: '#2b6cb0' }}>No credit card needed. Full access for 7 days.</div>
            </div>
          </div>
          <SignUp routing="hash" afterSignUpUrl="/" appearance={{ elements: { rootBox: { width: '100%' }, card: { boxShadow: 'none', padding: 0 } } }} />
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '2rem' }}>
      <div style={{ background: 'white', padding: '2.5rem', borderRadius: '20px', maxWidth: '480px', width: '100%', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
        <SignIn routing="hash" afterSignInUrl="/" appearance={{ elements: { rootBox: { width: '100%' }, card: { boxShadow: 'none', padding: 0 } } }} />
      </div>
    </div>
  );
}

// ─── Root export ───────────────────────────────────────────────────────────────
export default function App() {
  const [authMode, setAuthMode] = useState(null);

  const handlePaymentSuccess = (subId) => {
    sessionStorage.setItem('pendingSubscriptionId', subId);
    setAuthMode('register-paid');
  };

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedOut>
        {authMode === null && (
          <LandingPage
            onPaymentSuccess={handlePaymentSuccess}
            onLoginClick={() => setAuthMode('login')}
            onTrialClick={() => setAuthMode('register-trial')}
          />
        )}
        {authMode !== null && <AuthScreen mode={authMode} />}
      </SignedOut>
      <SignedIn>
        <TrialWrapper>
          <ADHDReadingTool />
        </TrialWrapper>
      </SignedIn>
    </ClerkProvider>
  );
}
