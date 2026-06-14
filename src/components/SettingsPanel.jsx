import React from 'react';

export default function SettingsPanel({
  showSettings,
  setShowSettings,
  speed,
  setSpeed,
  fontSize,
  setFontSize,
  focusMode,
  setFocusMode,
  selectedLanguage,
  setSelectedLanguage,
  textLibrary,
  setTexts,
  setCurrentTextId,
  setCurrentWordIndex,
  setIsPlaying,
  textColor
}) {
  if (!showSettings) return null;

  return (
    <div
      style={{
        backgroundColor: 'rgba(255,255,255,0.05)',
        padding: '2rem',
        borderRadius: '16px',
        marginBottom: '2rem'
      }}
    >
      {/* Reading Speed */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 600
          }}
        >
          Reading Speed: {speed} WPM
                  </label>

        <input
          type="range"
          min="100"
          max="1000"
          step="50"
          value={speed}
          onChange={(e) =>
            setSpeed(Number(e.target.value))
          }
          style={{ width: '100%' }}
        />
      </div>

      {/* Font Size */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 600
          }}
        >
          Font Size: {fontSize}px
        </label>

        <input
          type="range"
          min="16"
          max="72"
          step="2"
          value={fontSize}
          onChange={(e) =>
            setFontSize(Number(e.target.value))
          }
          style={{ width: '100%' }}
        />
      </div>

      {/* Language */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 600
          }}
        >
          Language
        </label>

        <select
          value={selectedLanguage}
          onChange={(e) => {
            const lang = e.target.value;

            setSelectedLanguage(lang);

            const libraryTexts =
              textLibrary[lang] || [];

            setTexts(libraryTexts);

            if (libraryTexts.length > 0) {
              setCurrentTextId(libraryTexts[0].id);
            }

            setCurrentWordIndex(0);
            setIsPlaying(false);
          }}
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '8px',
            border: 'none',
            background: 'rgba(255,255,255,0.1)',
            color: '#000'
            
        }}
        >
          <option value="english" style={{ color: '#000' }}>
            English
            </option>
          <option value="afrikaans" style={{ color: '#000' }}>
            Afrikaans
          </option>
        </select>
      </div>

      {/* Focus Mode */}
      <div>
        <label
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 600
          }}
        >
          Focus Mode
        </label>

        <select
          value={focusMode}
          onChange={(e) =>
            setFocusMode(e.target.value)
          }
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '8px',
            border: 'none',
            background: 'rgba(255,255,255,0.1)',
            color: textColor
          }}
        >
          <option value="single" style={{ color: '#000' }}>
              Single Word
          </option>

          <option value="context" style={{ color: '#000' }}>
              Context Window
          </option>

          <option value="sentence" style={{ color: '#000' }}>
              Sentence Focus
          </option>
        </select>
      </div>
    </div>
  );
}