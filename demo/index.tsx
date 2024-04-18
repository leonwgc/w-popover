import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App1';

createRoot(document.querySelector('#root') as HTMLElement).render(<App />);
