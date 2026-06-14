{/* Controls */}
       import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export default function ReaderControls({
  isPlaying,
  togglePlay,
  reset,
  currentWordIndex,
  wordsLength,
  highlightColor,
  backgroundColor,
  textColor
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '2rem'
      }}
    >
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
          transition: 'transform 0.2s'
        }}
        onMouseDown={(e) =>
          (e.currentTarget.style.transform = 'scale(0.95)')
        }
        onMouseUp={(e) =>
          (e.currentTarget.style.transform = 'scale(1)')
        }
      >
        {isPlaying
          ? <Pause size={24} />
          : <Play size={24} />
        }

        {isPlaying
          ? 'Pause'
          : currentWordIndex >= wordsLength - 1
            ? 'Start Over'
            : 'Play'}
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
  );
}