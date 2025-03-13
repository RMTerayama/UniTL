import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // 🚀 Importando o Router
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './auth/pages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* 🚀 Agora o Login está dentro do Router */}
      <Login />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
