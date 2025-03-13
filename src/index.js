import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // 🚀 Importamos o Router
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'; // 🚀 Agora o App gerencia as rotas

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* 🚀 O Router agora envolve o App */}
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
