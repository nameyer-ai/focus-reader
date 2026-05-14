import { ClerkProvider, SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react';
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Settings, BookOpen, Target, Trophy, Zap, Menu, X, Plus, Trash2, Download, Upload } from 'lucide-react';

const ADHDReadingTool = () => {
  const [texts, setTexts] = useState([
    {
      id: 1,
      title: "Default Reading",
      content: "Learning is a journey of discovery. Each word you read builds new pathways in your brain. With practice and the right tools, reading becomes easier and more enjoyable. Stay focused on one sentence at a time. Your progress matters, no matter how small.",
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

  const deleteText = (id) => {
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
        content: content,
        createdAt: new Date().toISOString(),
        remoteUrl: remoteUrl
      };
      
      setTexts([...texts, newText]);
      setCurrentTextId(newText.id);
      setRemoteUrl('');
      setCurrentWordIndex(0);
      setIsPlaying(false);
      alert('Remote text loaded successfully!');
    } catch (error) {
      alert('Failed to load remote text. Make sure the URL is accessible and returns plain text.');
    } finally {
      setIsLoadingRemote(false);
    }
  };

  const updateCurrentText = (newContent) => {
    setTexts(texts.map(t => 
      t.id === currentTextId ? { ...t, content: newContent } : t
    ));
    setCurrentWordIndex(0);
    setIsPlaying(false);
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

  const importTexts = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (Array.isArray(imported)) {
          setTexts([...texts, ...imported]);
          alert(`Imported ${imported.length} text(s) successfully!`);
        }
      } catch (error) {
        alert('Failed to import texts. Make sure the file is valid JSON.');
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

  const renderSentenceFocus = () => {
    const sentences = currentText.match(/[^.!?]+[.!?]+/g) || [currentText];
    let wordCount = 0;
    let currentSentenceIdx = 0;
    
    for (let i = 0; i < sentences.length; i++) {
      const sentenceWords = sentences[i].split(' ').filter(w => w.length > 0);
      if (currentWordIndex < wordCount + sentenceWords.length) {
        currentSentenceIdx = i;
        break;
      }
      wordCount += sentenceWords.length;
    }

    return sentences.map((sentence, idx) => (
      <p
        key={idx}
        style={{
          fontSize: `${fontSize}px`,
          opacity: idx === currentSentenceIdx ? 1 : 0.3,
          transition: 'opacity 0.3s',
          margin: '1rem 0',
          lineHeight: 1.8
        }}
      >
        {sentence}
      </p>
    ));
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: backgroundColor,
      color: textColor,
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <BookOpen size={32} color={highlightColor} />
            <h1 style={{ fontSize: '2rem', margin: 0, color: highlightColor }}>Focus Reader</h1>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => setShowTextMenu(!showTextMenu)}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: showTextMenu ? highlightColor : 'rgba(255,255,255,0.1)',
                color: showTextMenu ? backgroundColor : textColor,
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                transition: 'all 0.3s'
              }}
            >
              <Menu size={20} />
              Texts ({texts.length})
            </button>
            <button
              onClick={() => setShowSettings(!showSettings)}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: showSettings ? highlightColor : 'rgba(255,255,255,0.1)',
                color: showSettings ? backgroundColor : textColor,
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                transition: 'all 0.3s'
              }}
            >
              <Settings size={20} />
              Settings
            </button>
          </div>
        </div>

        {showTextMenu && (
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            padding: '2rem',
            borderRadius: '16px',
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ margin: 0, color: highlightColor }}>Your Reading Texts</h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={exportTexts}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: textColor,
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Download size={16} />
                  Export
                </button>
                <label style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: textColor,
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Upload size={16} />
                  Import
                  <input
                    type="file"
                    accept=".json"
                    onChange={importTexts}
                    style={{ display: 'none' }}
                  />
                </label>
                <button
                  onClick={() => setShowAddText(!showAddText)}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: highlightColor,
                    color: backgroundColor,
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: 'bold'
                  }}
                >
                  <Plus size={16} />
                  Add New
                </button>
              </div>
            </div>

            {showAddText && (
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                padding: '1.5rem',
                borderRadius: '12px',
                marginBottom: '1.5rem'
              }}>
                <h4 style={{ marginTop: 0, marginBottom: '1rem' }}>Add New Text</h4>
                <input
                  type="text"
                  placeholder="Text title..."
                  value={newTextTitle}
                  onChange={(e) => setNewTextTitle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    marginBottom: '1rem',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    color: textColor,
                    border: '2px solid rgba(255,255,255,0.1)',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                />
                <textarea
                  placeholder="Paste or type your text here..."
                  value={newTextContent}
                  onChange={(e) => setNewTextContent(e.target.value)}
                  style={{
                    width: '100%',
                    minHeight: '100px',
                    padding: '0.75rem',
                    marginBottom: '1rem',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    color: textColor,
                    border: '2px solid rgba(255,255,255,0.1)',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
                <div style={{ marginBottom: '1rem' }}>
                  <h5 style={{ marginBottom: '0.5rem' }}>Or Load from URL:</h5>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                      type="text"
                      placeholder="https://example.com/text.txt"
                      value={remoteUrl}
                      onChange={(e) => setRemoteUrl(e.target.value)}
                      style={{
                        flex: 1,
                        padding: '0.75rem',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        color: textColor,
                        border: '2px solid rgba(255,255,255,0.1)',
                        borderRadius: '6px',
                        fontSize: '1rem'
                      }}
                    />
                    <button
                      onClick={loadFromRemote}
                      disabled={isLoadingRemote}
                      style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: isLoadingRemote ? 'rgba(255,255,255,0.05)' : highlightColor,
                        color: isLoadingRemote ? textColor : backgroundColor,
                        border: 'none',
                        borderRadius: '6px',
                        cursor: isLoadingRemote ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold'
                      }}
                    >
                      {isLoadingRemote ? 'Loading...' : 'Load URL'}
                    </button>
                  </div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.5rem' }}>
                    URL must be publicly accessible and return plain text
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                  <button
                    onClick={() => {
                      setShowAddText(false);
                      setNewTextTitle('');
                      setNewTextContent('');
                      setRemoteUrl('');
                    }}
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: textColor,
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addNewText}
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: highlightColor,
                      color: backgroundColor,
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    Add Text
                  </button>
                </div>
              </div>
            )}

            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {texts.map(text => (
                <div
                  key={text.id}
                  style={{
                    padding: '1rem',
                    backgroundColor: currentTextId === text.id ? 'rgba(0,212,255,0.1)' : 'rgba(255,255,255,0.03)',
                    border: currentTextId === text.id ? `2px solid ${highlightColor}` : '2px solid transparent',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.2s'
                  }}
                  onClick={() => {
                    setCurrentTextId(text.id);
                    setCurrentWordIndex(0);
                    setIsPlaying(false);
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{text.title}</div>
                    <div style={{ fontSize: '0.875rem', opacity: 0.7 }}>
                      {text.content.split(' ').filter(w => w.length > 0).length} words • 
                      {text.remoteUrl ? ' Remote' : ' Local'} • 
                      {new Date(text.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (window.confirm(`Delete "${text.title}"?`)) {
                        deleteText(text.id);
                      }
                    }}
                    style={{
                      padding: '0.5rem',
                      backgroundColor: 'rgba(255,0,0,0.2)',
                      color: '#ff6b6b',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.05)',
            padding: '1rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <Target size={24} color={highlightColor} />
            <div>
              <div style={{ fontSize: '0.875rem', opacity: 0.7 }}>Words Read</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{wordsRead}</div>
            </div>
          </div>
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.05)',
            padding: '1rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <Trophy size={24} color={highlightColor} />
            <div>
              <div style={{ fontSize: '0.875rem', opacity: 0.7 }}>Sessions</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{totalSessions}</div>
            </div>
          </div>
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.05)',
            padding: '1rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <Zap size={24} color={highlightColor} />
            <div>
              <div style={{ fontSize: '0.875rem', opacity: 0.7 }}>Streak Days</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{streakDays}</div>
            </div>
          </div>
        </div>

        {showSettings && (
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            padding: '2rem',
            borderRadius: '16px',
            marginBottom: '2rem'
          }}>
            <h3 style={{ marginTop: 0, color: highlightColor }}>Customize Your Experience</h3>
            
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Reading Speed: {Math.round(60000 / speed)} words per minute
                </label>
                <input
                  type="range"
                  min="100"
                  max="800"
                  value={speed}
                  onChange={(e) => {
                    const wasPlaying = isPlaying;
                    setIsPlaying(false);
                    setSpeed(Number(e.target.value));
                    if (wasPlaying) {
                      setTimeout(() => setIsPlaying(true), 50);
                    }
                  }}
                  style={{ width: '100%', accentColor: highlightColor }}
                />
                <div style={{ fontSize: '0.875rem', opacity: 0.7, marginTop: '0.25rem' }}>
                  Slower speeds help with focus. Start slow and increase as you improve. ({speed}ms per word)
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Font Size: {fontSize}px
                </label>
                <input
                  type="range"
                  min="16"
                  max="48"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  style={{ width: '100%', accentColor: highlightColor }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Focus Mode
                </label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    onClick={() => setFocusMode('word')}
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: focusMode === 'word' ? highlightColor : 'rgba(255,255,255,0.1)',
                      color: focusMode === 'word' ? backgroundColor : textColor,
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      flex: 1,
                      transition: 'all 0.3s'
                    }}
                  >
                    Single Word
                  </button>
                  <button
                    onClick={() => setFocusMode('context')}
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: focusMode === 'context' ? highlightColor : 'rgba(255,255,255,0.1)',
                      color: focusMode === 'context' ? backgroundColor : textColor,
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      flex: 1,
                      transition: 'all 0.3s'
                    }}
                  >
                    With Context
                  </button>
                  <button
                    onClick={() => setFocusMode('sentence')}
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: focusMode === 'sentence' ? highlightColor : 'rgba(255,255,255,0.1)',
                      color: focusMode === 'sentence' ? backgroundColor : textColor,
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      flex: 1,
                      transition: 'all 0.3s'
                    }}
                  >
                    Full Sentence
                  </button>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Color Theme
                </label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>Background</label>
                    <input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      style={{ width: '60px', height: '40px', cursor: 'pointer', border: 'none', borderRadius: '4px' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>Text</label>
                    <input
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      style={{ width: '60px', height: '40px', cursor: 'pointer', border: 'none', borderRadius: '4px' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>Highlight</label>
                    <input
                      type="color"
                      value={highlightColor}
                      onChange={(e) => setHighlightColor(e.target.value)}
                      style={{ width: '60px', height: '40px', cursor: 'pointer', border: 'none', borderRadius: '4px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          padding: '3rem',
          borderRadius: '16px',
          minHeight: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
          position: 'relative'
        }}>
          {focusMode === 'word' && (
            <div style={{
              fontSize: `${fontSize * 2}px`,
              fontWeight: 'bold',
              color: highlightColor,
              textAlign: 'center',
              animation: 'fadeIn 0.2s'
            }}>
              {words[currentWordIndex] || 'Start reading...'}
            </div>
          )}

          {focusMode === 'context' && (
            <div style={{
              fontSize: `${fontSize}px`,
              textAlign: 'center',
              lineHeight: 2
            }}>
              {getContextWords().map((item, idx) => (
                <span
                  key={idx}
                  style={{
                    color: item.isCurrent ? highlightColor : textColor,
                    fontSize: item.isCurrent ? `${fontSize * 1.5}px` : `${fontSize}px`,
                    fontWeight: item.isCurrent ? 'bold' : 'normal',
                    opacity: item.isCurrent ? 1 : 0.5,
                    transition: 'all 0.3s',
                    margin: '0 0.25rem'
                  }}
                >
                  {item.word}
                </span>
              ))}
            </div>
          )}

          {focusMode === 'sentence' && (
            <div style={{ width: '100%', maxWidth: '800px' }}>
              {renderSentenceFocus()}
            </div>
          )}

          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            right: '1rem',
            height: '4px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${(currentWordIndex / words.length) * 100}%`,
              height: '100%',
              backgroundColor: highlightColor,
              transition: 'width 0.3s'
            }} />
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <button
            onClick={togglePlay}
            style={{
              padding: '1rem 2rem',
              backgroundColor: highlightColor,
              color: backgroundColor,
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '1.125rem',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'transform 0.2s',
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            {isPlaying ? 'Pause' : currentWordIndex >= words.length - 1 ? 'Start Over' : 'Play'}
          </button>
          <button
            onClick={reset}
            style={{
              padding: '1rem 2rem',
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: textColor,
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '1.125rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'all 0.2s'
            }}
          >
            <RotateCcw size={24} />
            Reset
          </button>
        </div>

        <div style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          padding: '2rem',
          borderRadius: '16px'
        }}>
          <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 600, fontSize: '1.125rem' }}>
            Edit Current Text: {texts.find(t => t.id === currentTextId)?.title}
          </label>
          <textarea
            value={currentText}
            onChange={(e) => updateCurrentText(e.target.value)}
            style={{
              width: '100%',
              minHeight: '150px',
              padding: '1rem',
              fontSize: '1rem',
              backgroundColor: 'rgba(255,255,255,0.05)',
              color: textColor,
              border: '2px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
            placeholder="Edit your reading material here..."
          />
          <div style={{ fontSize: '0.875rem', opacity: 0.7, marginTop: '0.5rem' }}>
            Total words: {words.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ADHDReadingTool;