import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './elements/Header'
import Nav from './elements/Nav'
import Motion from './elements/Motion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Header />
      <Nav />
      <Motion />
    </React.StrictMode>
  </Router>
  
);

reportWebVitals();
