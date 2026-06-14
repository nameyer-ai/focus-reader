import React from 'react';

export default function ReaderDisplay({
  focusMode,
  fontSize,
  highlightColor,
  textColor,
  words,
  currentWordIndex,
  getContextWords,
  renderSentenceFocus,
  progressPercent
}) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255,255,255,0.03)',
        padding: '3rem',
        borderRadius: '16px',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
        position: 'relative'
      }}
    >
      {focusMode === 'single' && (
        <div
          style={{
            fontSize: `${fontSize * 2}px`,
            fontWeight: 'bold',
            color: highlightColor,
            textAlign: 'center'
          }}
        >
          {words[currentWordIndex] || 'Start reading...'}
        </div>
      )}

      {focusMode === 'context' && (
        <div
          style={{
            fontSize: `${fontSize}px`,
            textAlign: 'center',
            lineHeight: 2
          }}
        >
          {getContextWords().map((item, idx) => (
            <span
              key={idx}
              style={{
                color: item.isCurrent
                  ? highlightColor
                  : textColor,
                fontSize: item.isCurrent
                  ? `${fontSize * 1.5}px`
                  : `${fontSize}px`,
                fontWeight: item.isCurrent
                  ? 'bold'
                  : 'normal',
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
  <div
    style={{
      width: '100%',
      maxWidth: '800px',
      fontSize: `${fontSize}px`,   // 👈 KEY FIX
      lineHeight: 1.8,
      textAlign: 'center'
    }}
  >
    {renderSentenceFocus()}
  </div>
)}

      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '1rem',
          right: '1rem',
          height: '4px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            width: `${progressPercent}%`,
            height: '100%',
            backgroundColor: highlightColor,
            transition: 'width 0.3s'
          }}
        />
      </div>
    </div>
  );
}