import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Navbar from './frontend/Header/Navbar';
import Main from '../src/frontend/Main/Main';
import About from '../src/frontend/About/About';
import Gallery from '../src/frontend/Gallery/Gallery'; // Example component for another route
import Plan from '../src/frontend/Plan/Plan'; // Example component for another route
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
    <Router>
      <div>
         <Navbar headerOpaque={headerOpaque} />

        {/* Define routes for different components */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/plan" element={<Plan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
