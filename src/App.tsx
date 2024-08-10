import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import WhoWeAre from './pages/WhoWeAre';

const App: React.FC = (): React.ReactNode => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/who-we-are" element={<WhoWeAre />} />
    </Routes>
    </div>
  )
}

export default App
