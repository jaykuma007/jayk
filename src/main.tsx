// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import JK from './jk'; // 👈 Importing your component

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JK /> {/* 👈 Rendering JK instead of App */}
  </StrictMode>,
);

