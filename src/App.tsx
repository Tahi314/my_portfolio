import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import IntroductionPage from "./components/pages/IntroductionPage";
import HomePage from "./components/pages/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;