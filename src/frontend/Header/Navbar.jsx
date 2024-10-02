import React, { useState } from 'react';
import { CiInstagram, CiTwitter, CiFacebook } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import { FaWindowClose } from "react-icons/fa";
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaWhatsappSquare } from "react-icons/fa";

function Header({ headerOpaque }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for controlling modal visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Open the modal
  const handleContactClick = () => {
    setShowModal(true);
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <header className={`header ${headerOpaque ? 'header--opaque' : ''}`}>
      <div className="header__inner">
        <div className="header__logo">
          <Link to='/' className="header__link">
            <img src="https://i.imgur.com/3zACXLF.png" alt="Logo" />
          </Link>
        </div>
        <nav className="header__nav">
          <button
            className="menu__button"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaWindowClose /> : <RiMenu3Line />}
          </button>
          <ul className={`header__menu ${menuOpen ? 'header__menu--open' : ''}`}>
            <li className="menu__item"><CiInstagram className='menu__icon' /></li>
            <li className="menu__item"><CiTwitter className='menu__icon' /></li>
            <li className="menu__item"><CiFacebook className='menu__icon' /></li>
            <Link to='/about' className="menu__iteme"><h4>About us</h4></Link>
            <Link to='/gallery' className="menu__iteme"><h4>Gallery</h4></Link>
            <Link to='/plan' className="menu__iteme"><h4>Plan my kitchen</h4></Link>
            <Link to='/shop' className="menu__iteme"><h4>Shop</h4></Link>
            <li className="menu__item">
              <button onClick={handleContactClick} className="button">CONTACT ME</button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Modal structure */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
            <h2>Contact Us</h2>
            <p> you can your other information.</p>
               <p className='max'><FaWhatsappSquare size={30}/>+91 7558847558</p>

          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
