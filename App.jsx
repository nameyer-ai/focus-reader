import React, { useState, useEffect, useRef } from 'react';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  UserButton
} from '@clerk/clerk-react';
import {
  Play, Pause, RotateCcw, Settings, BookOpen,
  Menu, Plus, Trash2, Download, Upload
} from 'lucide-react';

// ✅ Use Vite-style environment variable
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const ADHDReadingTool = () => {
  const [texts, setTexts] = useState([
    {
      id: 1,
      title: "Default Reading",
      content:
        "Learning is a journey of discovery. Each word you read builds new pathways in your brain. With practice and the right tools, reading becomes easier and more enjoyable. Stay focused on one sentence at a time. Your progress matters, no matter how small.",
      createdAt: new Date().toISOString()
    }
  ]);
  const [currentTextId, setCurrentTextId] = useState(1);
  const [showTextMenu, setShowTextMenu] = useState(false);
  const [showAddText, setShowAddText] = useState(false);
  const [newTextTitle, setNewTextTitle] = useState('');
  const [newTextContent, setNewTextContent] = useState('');
  const [remoteUrl, setRemoteUrl] = useState('');
  const [isLoadingRemote, setIsLoadingRemote] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [speed, setSpeed] = useState(300);
  const [fontSize, setFontSize] = useState(24);
  const [backgroundColor, setBackgroundColor] = useState('#1a1a2e');
  const [textColor, setTextColor] = useState('#eee');
  const [highlightColor, setHighlightColor] = useState('#00d4ff');
  const [showSettings, setShowSettings] = useState(false);
  const [focusMode, setFocusMode] = useState('word');
  const [wordsRead, setWordsRead] = useState(0);
  const [totalSessions, setTotalSessions] = useState(0);
  const [streakDays, setStreakDays] = useState(0);
  const intervalRef = useRef(null);

  const currentText = texts.find(t => t.id === currentTextId)?.content || '';
  const words = currentText.split(' ').filter(w => w.length > 0);

  // ⏱️ Word-by-word playback
  useEffect(() => {
    if (isPlaying && currentWordIndex < words.length) {
      intervalRef.current = setInterval(() => {
        setCurrentWordIndex(prev => {
          if (prev >= words.length - 1) {
            setIsPlaying(false);
            setWordsRead(w => w + words.length);
            setTotalSessions(s => s + 1);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, speed, currentWordIndex, words.length]);

  const togglePlay = () => {
    if (currentWordIndex >= words.length - 1) {
      setCurrentWordIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  const reset = () => {
    setIsPlaying(false);
    setCurrentWordIndex(0);
  };

  const addNewText = () => {
    if (newTextTitle.trim() && newTextContent.trim()) {
      const newText = {
        id: Date.now(),
        title: newTextTitle.trim(),
        content: newTextContent.trim(),
        createdAt: new Date().toISOString()
      };
      setTexts([...texts, newText]);
      setCurrentTextId(newText.id);
      setNewTextTitle('');
      setNewTextContent('');
      setShowAddText(false);
      setCurrentWordIndex(0);
      setIsPlaying(false);
    }
  };

  const deleteText = id => {
    if (texts.length === 1) {
      alert('You must keep at least one text!');
      return;
    }
    const newTexts = texts.filter(t => t.id !== id);
    setTexts(newTexts);
    if (currentTextId === id) {
      setCurrentTextId(newTexts[0].id);
      setCurrentWordIndex(0);
      setIsPlaying(false);
    }
  };

  const loadFromRemote = async () => {
    if (!remoteUrl.trim()) return;
    setIsLoadingRemote(true);
    try {
      const response = await fetch(remoteUrl);
      if (!response.ok) throw new Error('Failed to fetch');
      const content = await response.text();
      const filename = remoteUrl.split('/').pop() || 'Remote Text';
      const newText = {
        id: Date.now(),
        title: `Remote: ${filename}`,
        content,
        createdAt: new Date().toISOString(),
        remoteUrl
      };
      setTexts([...texts, newText]);
      setCurrentTextId(newText.id);
      setRemoteUrl('');
      setCurrentWordIndex(0);
      setIsPlaying(false);
      alert('Remote text loaded successfully!');
    } catch (error) {
      alert('Failed to load remote text. Make sure the URL returns plain text.');
    } finally {
      setIsLoadingRemote(false);
    }
  };

  const exportTexts = () => {
    const dataStr = JSON.stringify(texts, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'adhd-reader-texts.json';
    link.click();
  };

  const importTexts = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const imported = JSON.parse(ev.target.result);
        if (Array.isArray(imported)) {
          setTexts([...texts, ...imported]);
          alert(`Imported ${imported.length} text(s) successfully!`);
        }
      } catch {
        alert('Invalid file format.');
      }
    };
    reader.readAsText(file);
  };

  const getContextWords = () => {
    const context = 2;
    const start = Math.max(0, currentWordIndex - context);
    const end = Math.min(words.length, currentWordIndex + context + 1);
    return words.slice(start, end).map((word, idx) => ({
      word,
      index: start + idx,
      isCurrent: start + idx === currentWordIndex
    }));
  };

  // ✅ Return JSX
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedOut>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
          <SignIn routing="hash" />
        </div>
      </SignedOut>

      <SignedIn>
        <div style={{
          minHeight: '100vh',
          backgroundColor: backgroundColor,
          color: textColor,
          padding: '2rem',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
            <UserButton />
          </div>

          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <BookOpen size={32} color={highlightColor} />
                <h1 style={{ fontSize: '2rem', margin: 0, color: highlightColor }}>
                  Focus Reader
                </h1>
              </div>
            </div>

            {/* ✅ Example reading display */}
            <div style={{
              fontSize: `${fontSize}px`,
              lineHeight: 1.8,
              textAlign: 'center',
              marginTop: '3rem'
            }}>
              {focusMode === 'word'
                ? getContextWords().map((w, i) => (
                    <span
                      key={i}
                      style={{
                        color: w.isCurrent ? highlightColor : textColor,
                        margin: '0 0.5rem',
                        fontWeight: w.isCurrent ? 'bold' : 'normal'
                      }}
                    >
                      {w.word}
                    </span>
                  ))
                : currentText}
            </div>
          </div>
        </div>
      </SignedIn>
    </ClerkProvider>
  );
};

export default ADHDReadingTool;
