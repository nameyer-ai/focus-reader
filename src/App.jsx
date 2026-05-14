// App.jsx
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
  Download, Upload, CheckCircle, Clock, AlertCircle
} from 'lucide-react';
import LandingPage from './LandingPage.jsx';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const PAYPAL_PLAN_ID = 'P-9LL76996SP682060VNIBXKDA';
const PAYPAL_CLIENT_ID = 'AWOt9K9UY_OeS31zNdvQC9p6DvP-3ZLZRWTuvwYw-NgbAdwk4Ez_VN0UclsExM2wOOnDBq_nV8mGUWxD';
const TRIAL_DAYS = 14;

// ─── Shared styles ────────────────────────────────────────────────────────────
const fullPageStyle = {
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  padding: '2rem', boxSizing: 'border-box'
};
const cardStyle = {
  background: 'white', padding: '3rem', borderRadius: '20px',
  maxWidth: '500px', width: '100%', boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
};

// ─── Trial helpers ────────────────────────────────────────────────────────────
function getTrialStatus(user) {
  if (!user) return 'unknown';
  const meta = user.publicMetadata || {};
  const status = meta.subscriptionStatus;
  if (status === 'active') return 'active';
  if (status === 'trial' && meta.trialStartDate) {
    const start = new Date(meta.trialStartDate);
    const now = new Date();
    const diffDays = (now - start) / (1000 * 60 * 60 * 24);
    return diffDays < TRIAL_DAYS ? 'trial' : 'expired';
  }
  return 'none';
}

function getDaysRemaining(user) {
  const start = new Date(user.publicMetadata?.trialStartDate);
  const now = new Date();
  const diffDays = (now - start) / (1000 * 60 * 60 * 24);
  return Math.max(0, Math.ceil(TRIAL_DAYS - diffDays));
}

// ─── PayPal Button ────────────────────────────────────────────────────────────
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

// ─── Trial Expired Paywall ────────────────────────────────────────────────────
function TrialExpiredScreen() {
  const { user } = useUser();
  const [paying, setPaying] = useState(false);

  const handlePaymentSuccess = async (subId) => {
    setPaying(true);
    try {
      await fetch('/api/activate-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, subscriptionId: subId })
      });
      window.location.reload();
    } catch (err) {
      console.error('Failed to activate subscription:', err);
      alert('Payment received but activation failed. Please contact support.');
      setPaying(false);
    }
  };

  return (
    <div style={{ ...fullPageStyle }}>
      <div style={{ ...cardStyle, textAlign: 'center' }}>
        <AlertCircle size={48} color="#e53e3e" style={{ marginBottom: '1rem' }} />
        <h2 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>Your free trial has ended</h2>
        <p style={{ color: '#718096', marginBottom: '2rem' }}>
          We hope you enjoyed Focus Reader! Subscribe now to keep full access — unlimited learners, one account.
        </p>
        <div style={{ background: '#f7fafc', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2d3748' }}>
            $12<span style={{ fontSize: '1rem', color: '#718096' }}>/month</span>
          </div>
          <div style={{ color: '#718096', marginTop: '0.5rem' }}>Unlimited learners · Cancel anytime</div>
        </div>
        {paying
          ? <div style={{ color: '#718096' }}>Activating your subscription...</div>
          : <PayPalButton onSuccess={handlePaymentSuccess} />
        }
        <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#a0aec0' }}>
          Signed in as {user?.primaryEmailAddress?.emailAddress}
        </div>
      </div>
    </div>
  );
}

// ─── Trial Banner ─────────────────────────────────────────────────────────────
function TrialBanner({ daysRemaining, textColor, highlightColor }) {
  const urgent = daysRemaining <= 3;
  return (
    <div style={{
      background: urgent ? 'rgba(229,62,62,0.15)' : 'rgba(0,212,255,0.1)',
      border: `1px solid ${urgent ? '#e53e3e' : highlightColor}`,
      borderRadius: '8px', padding: '0.75rem 1.25rem',
      marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem',
      fontSize: '0.9rem'
    }}>
      <Clock size={18} color={urgent ? '#e53e3e' : highlightColor} />
      <span style={{ color: textColor }}>
        {urgent
          ? `⚠️ Only ${daysRemaining} day${daysRemaining === 1 ? '' : 's'} left in your free trial!`
          : `🎉 Free trial active — ${daysRemaining} day${daysRemaining === 1 ? '' : 's'} remaining`}
      </span>
    </div>
  );
}

// ─── Trial Starter ────────────────────────────────────────────────────────────
// Fires once for brand-new users who have no subscription metadata yet.
function TrialStarter() {
  const { user } = useUser();
  const [called, setCalled] = useState(false);

  useEffect(() => {
    if (!user || called) return;
    const status = user.publicMetadata?.subscriptionStatus;
    if (status) return;
    setCalled(true);
    fetch('/api/start-trial', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.id })
    })
      .then((res) => res.json())
      .then(() => user.reload().then(() => window.location.reload()))
      .catch((err) => console.error('Failed to start trial:', err));
  }, [user, called]);

  return (
    <div style={{ ...fullPageStyle }}>
      <div style={{ color: 'white', fontSize: '1.25rem' }}>Starting your trial...</div>
    </div>
  );
}

// ─── Gate: decides what a signed-in user sees ─────────────────────────────────
function TrialStarterGate() {
  const { user } = useUser();
  if (!user) return null;
  const status = user.publicMetadata?.subscriptionStatus;
  // No metadata yet — new user coming from trial sign-up
  if (!status) return <TrialStarter />;
  return <ADHDReadingTool />;
}

// ─── Auth screens ─────────────────────────────────────────────────────────────
function AuthScreen({ mode, isTrial }) {
  if (mode === 'register') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '2rem' }}>
        <div style={{ background: 'white', padding: '2.5rem', borderRadius: '20px', maxWidth: '480px', width: '100%', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
          <div style={{ background: isTrial ? '#ebf8ff' : '#f0fff4', border: `2px solid ${isTrial ? '#4299e1' : '#48bb78'}`, borderRadius: '12px', padding: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <CheckCircle size={24} color={isTrial ? '#4299e1' : '#48bb78'} />
            <div>
              <div style={{ fontWeight: 'bold', color: isTrial ? '#2b6cb0' : '#276749' }}>
                {isTrial ? 'Starting your free 14-day trial! 🎉' : 'Payment successful! 🎉'}
              </div>
              <div style={{ fontSize: '0.85rem', color: isTrial ? '#2b6cb0' : '#276749' }}>
                {isTrial
                  ? 'Create your account to get started — no credit card needed.'
                  : 'Now create your account to access Focus Reader.'}
              </div>
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

// ─── Main reading tool ────────────────────────────────────────────────────────
const ADHDReadingTool = () => {
  const { user } = useUser();
  const trialStatus = getTrialStatus(user);
  const daysRemaining = trialStatus === 'trial' ? getDaysRemaining(user) : 0;

  if (trialStatus === 'expired') return <TrialExpiredScreen />;

  const [texts, setTexts] = useState([{
    id: 1, title: 'Default Reading',
    content: 'Learning is a journey of discovery. Each word you read builds new pathways in your brain. With practice and the right tools, reading becomes easier and more enjoyable. Stay focused on one sentence at a time. Your progress matters, no matter how small.',
    createdAt: new Date().toISOString()
  }]);
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
  const currentText = texts.find((t) => t.id === currentTextId)?.content || '';
  const words = currentText.split(' ').filter((w) => w.length > 0);

  useEffect(() => {
    if (isPlaying && currentWordIndex < words.length) {
      intervalRef.current = setInterval(() => {
        setCurrentWordIndex((prev) => {
          if (prev >= words.length - 1) {
            setIsPlaying(false);
            setWordsRead((w) => w + words.length);
            setTotalSessions((s) => s + 1);
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
    if (currentWordIndex >= words.length - 1) setCurrentWordIndex(0);
    setIsPlaying((p) => !p);
  };
  const reset = () => { setIsPlaying(false); setCurrentWordIndex(0); };

  const addNewText = () => {
    if (newTextTitle.trim() && newTextContent.trim()) {
      const newText = { id: Date.now(), title: newTextTitle.trim(), content: newTextContent.trim(), createdAt: new Date().toISOString() };
      setTexts((t) => [...t, newText]);
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
    return words.slice(start, end).map((word, idx) => ({ word, index: start + idx, isCurrent: start + idx === currentWordIndex }));
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

        {/* Trial banner */}
        {trialStatus === 'trial' && (
          <TrialBanner daysRemaining={daysRemaining} textColor={textColor} highlightColor={highlightColor} />
        )}

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

            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {texts.map((text) => (
                <div key={text.id} style={{ padding: '1rem', backgroundColor: currentTextId === text.id ? 'rgba(0,212,255,0.1)' : 'rgba(255,255,255,0.03)', border: currentTextId === text.id ? `2px solid ${highlightColor}` : '2px solid transparent', borderRadius: '8px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.2s' }}
                  onClick={() => { setCurrentTextId(text.id); setCurrentWordIndex(0); setIsPlaying(false); }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{text.title}</div>
                    <div style={{ fontSize: '0.875rem', opacity: 0.7 }}>{text.content.split(' ').filter((w) => w.length > 0).length} words • {text.remoteUrl ? 'Remote' : 'Local'} • {new Date(text.createdAt).toLocaleDateString()}</div>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); if (window.confirm(`Delete "${text.title}"?`)) deleteText(text.id); }} style={{ padding: '0.5rem', backgroundColor: 'rgba(255,0,0,0.2)', color: '#ff6b6b', border: 'none', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { icon: <Target size={24} color={highlightColor} />, label: 'Words Read', value: wordsRead },
            { icon: <Trophy size={24} color={highlightColor} />, label: 'Sessions', value: totalSessions },
            { icon: <Zap size={24} color={highlightColor} />, label: 'Streak Days', value: streakDays }
          ].map(({ icon, label, value }) => (
            <div key={label} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {icon}
              <div><div style={{ fontSize: '0.875rem', opacity: 0.7 }}>{label}</div><div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</div></div>
            </div>
          ))}
        </div>

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
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
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

        {/* Edit current text */}
        <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px' }}>
          <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 600, fontSize: '1.125rem' }}>
            Edit Current Text: {texts.find((t) => t.id === currentTextId)?.title}
          </label>
          <textarea value={currentText} onChange={(e) => updateCurrentText(e.target.value)} style={{ width: '100%', minHeight: '150px', padding: '1rem', fontSize: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', color: textColor, border: '2px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box' }} placeholder="Edit your reading material here..." />
          <div style={{ fontSize: '0.875rem', opacity: 0.7, marginTop: '0.5rem' }}>Total words: {words.length}</div>
        </div>
      </div>
    </div>
  );
};

// ─── Root export ──────────────────────────────────────────────────────────────
export default function App() {
  // ⚡ DEV BYPASS: set VITE_DEV_BYPASS=true in .env.local to skip PayPal during development.
  const devBypass = import.meta.env.VITE_DEV_BYPASS === 'true';
  const [authMode, setAuthMode] = useState(devBypass ? 'register' : null);
  const [isTrial, setIsTrial] = useState(false);

  const handlePaymentSuccess = (subId) => {
    sessionStorage.setItem('pendingSubscriptionId', subId);
    setIsTrial(false);
    setAuthMode('register');
  };

  const handleTrialStart = () => {
    setIsTrial(true);
    setAuthMode('register');
  };

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedOut>
        {authMode === null && (
          <LandingPage
            onPaymentSuccess={handlePaymentSuccess}
            onLoginClick={() => setAuthMode('login')}
            onTrialStart={handleTrialStart}
          />
        )}
        {authMode !== null && <AuthScreen mode={authMode} isTrial={isTrial} />}
      </SignedOut>
      <SignedIn>
        <TrialStarterGate />
      </SignedIn>
    </ClerkProvider>
  );
}
