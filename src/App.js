import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./frontend/Header/Navbar";
import Main from "./frontend/Main/Main"; // Adjusted path
import About from "./frontend/About/About";
import {GalleryWithPopup} from "./frontend/Gallery/Gallery"; // Ensure GalleryWithPopup is correctly exported
import { PlanWithPopup } from "./frontend/Plan/Plan";
import Footer from "./frontend/Footer/footer";
import Shop from "./frontend/Shop/shop"; // Ensure paths are correct
// import Contact from "./frontend/Contact/contact"; // If unused, keep commented out
import "./App.css";

function App() {
  const [headerOpaque, setHeaderOpaque] = useState(false);

  // Handle header opacity on scroll
  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setHeaderOpaque(true);
    } else {
      setHeaderOpaque(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div>
        {/* Navbar with dynamic opacity */}
        <Navbar headerOpaque={headerOpaque} />

        {/* Define routes for different components */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryWithPopup />} />
          <Route path="/plan" element={<PlanWithPopup />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>

      {/* Footer component */}
      <Footer />
    </Router>
  );
}

export default App;
