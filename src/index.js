import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { FirebaseProvider } from './FirebaseContext';  // Import FirebaseProvider

// Create a root for rendering
const container = document.getElementById('root');
const root = createRoot(container);  // Use the new createRoot API

// Render the app
root.render(
  <React.StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </React.StrictMode>
);
