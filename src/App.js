import React, { useState, useEffect } from 'react';
import Navbar from '../src/frontend/Heder/Navbar';
import Main from '../src/frontend/Main/Main';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerOpaque, setHeaderOpaque] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setHeaderOpaque(true);
    } else {
      setHeaderOpaque(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        headerOpaque={headerOpaque}
      />
      <Main />
    </div>
  );
}

export default App;
