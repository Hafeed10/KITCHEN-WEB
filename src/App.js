import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Navbar from '../src/frontend/Heder/Navbar';
import Main from '../src/frontend/Main/Main';
import About from '../src/frontend/About/About';
// import Contact from '../src/frontend/Contact/Contact'; // Example component for another route
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
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
