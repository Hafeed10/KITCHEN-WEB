import React, { useState, useEffect } from 'react';
import Navbar from '../src/frontend/Heder/Navbar';
import Main from '../src/frontend/Main/Main';
import './App.css';

function App() {
  const [headerOpaque, setHeaderOpaque] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setHeaderOpaque(true);
    } else {
      setHeaderOpaque(false);
    }
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
        headerOpaque={headerOpaque}
      />
      <Main />
    </div>
  );
}

export default App;
