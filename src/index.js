import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css'

const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
