import React from 'react';
import NavBar from './components/Navbar';
import TitleHeader from './components/TitleHeader';
import WhoWeAre from './components/WhoWeAre';

const App = (): React.ReactNode => {
  return (
    <div>
      <NavBar />
      <TitleHeader />
      <WhoWeAre title='Who we are' cards={[{ img: '', title: '', description: '' }]} />
    </div>
  )
}

export default App
