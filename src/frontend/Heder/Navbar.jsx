import React, { useState } from 'react';
import { CiInstagram, CiTwitter, CiFacebook } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import { FaWindowClose } from "react-icons/fa";
import './navbar.css';

function Header({ headerOpaque }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${headerOpaque ? 'header--opaque' : ''}`}>
      <div className="header__inner">
        <div className="header__logo">
          <img src="https://i.imgur.com/3zACXLF.png" alt="Logo" />
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
            <li className="menu__item"><h4>Shop</h4></li>
            <li className="menu__item"><h4>Plan my kitchen</h4></li>
            <li className="menu__item"><h4>About us</h4></li>
            <li className="menu__item"><h4>Gallery</h4></li>
            <li className="menu__item">
              <button className="button">MY ORDER</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
