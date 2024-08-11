import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import WhoWeAre from './pages/WhoWeAre';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NavBar from './components/Navbar';
import LmFooter from './components/LmFooter';

const App: React.FC = (): React.ReactNode => {
  const location = useLocation();
  return (
    <div>
      <NavBar />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="slide"
          timeout={700} // Adjust timing as needed
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <LmFooter />
    </div>
  )
}

export default App
