import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './elements/Header'
import Nav from './elements/Nav'
import Motion from './elements/Motion';
import About from './elements/About';
import Projects from './elements/Projects';
import Contact from './elements/Contact';
import Resume from './elements/Resume';
import Zen from './elements/Zen'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
        <Header />
        <Nav />
        <Routes>
          <Route path="/zen/" element={<Zen />} />
          <Route path="/about/" element={<About />} />
          <Route path="/projects/" element={<Projects />} />
          <Route path="/resume/" element={<Resume />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="*" element={<Navigate to="/projects/" replace />} />
        </Routes>
      <Motion />
    </React.StrictMode>
  </Router>
  
);

reportWebVitals();
