import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// StrictMode removed to prevent double-firing of effects (which caused word/session counters to double)
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
