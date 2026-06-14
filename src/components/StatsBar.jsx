import React from 'react';

export default function StatsBar({
  wordsRead,
  totalSessions,
  readingStreak,
  textColor
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255,255,255,0.05)',
          padding: '1.5rem',
          borderRadius: '12px',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: textColor
          }}
        >
          {wordsRead}
        </div>

        <div
          style={{
            opacity: 0.7,
            marginTop: '0.5rem'
          }}
        >
          Words Read
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'rgba(255,255,255,0.05)',
          padding: '1.5rem',
          borderRadius: '12px',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: textColor
          }}
        >
          {totalSessions}
        </div>

        <div
          style={{
            opacity: 0.7,
            marginTop: '0.5rem'
          }}
        >
          Sessions
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'rgba(255,255,255,0.05)',
          padding: '1.5rem',
          borderRadius: '12px',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: textColor
          }}
        >
          {readingStreak}
        </div>

        <div
          style={{
            opacity: 0.7,
            marginTop: '0.5rem'
          }}
        >
          Day Streak
        </div>
      </div>
    </div>
  );
}