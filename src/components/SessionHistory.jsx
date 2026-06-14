function SessionHistory({
  sessionHistory
}) {
  const recentSessions =
    sessionHistory
      .slice(-5)
      .reverse();

  return (
    <div
      style={{
        marginTop: '2rem',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '12px'
      }}
    >
      <h3>
        Recent Sessions
      </h3>

      {recentSessions.length === 0 ? (
        <p>No sessions yet.</p>
      ) : (
        recentSessions.map((session) => (
          <div
            key={session.id}
            style={{
              padding: '0.75rem 0',
              borderBottom:
                '1px solid #eee'
            }}
          >
            <div>
              Words Read:
              {' '}
              {session.wordsRead}
            </div>

            <div>
              Mode:
              {' '}
              {session.focusMode}
            </div>

            <div>
              WPM:
            {' '}
            {session.wpm}
            </div>
            <div>
            Delay:
            {' '}
            {session.wordDelay}ms
            </div>
            <div>
              Completed:
              {' '}
              {new Date(
                session.completedAt
              ).toLocaleString()}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default SessionHistory;