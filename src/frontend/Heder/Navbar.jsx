import React from 'react';
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import { FaWindowClose } from "react-icons/fa";

function Header({ menuOpen, toggleMenu, headerOpaque }) {
  return (
    <header className={`header ${headerOpaque ? 'header--opaque' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header__inner">
        <nav className="header__nav">
          <button className="menu__button button button--dropdown" id="menu-button" onClick={toggleMenu}>
            <RiMenu3Line /><FaWindowClose />
          </button>
          <ul className="header__menu">
            <li className="menu__item">
            <CiInstagram  className='menu__icon '/>
            <CiTwitter  className="menu__icon "/>
            <CiFacebook className="menu__icon "/>
            </li>
            <li className="menu__item">
              <h4>Shop</h4>
            </li>
            <li className="menu__item">
              <h4>Plan my kitchen</h4>
            </li>
            {/* <li className="menu__item--logo-placeholder"></li> */}
            <li className="menu__item">
              <h4>About us</h4>
            </li>
            <li className="menu__item">
              <h4>Gallery</h4>
            </li>
            <li className="menu__item">
              <button className="menu__button button button--alt-bw">
                My order
              </button>
            </li>
          </ul>
        </nav>
        <div className="header__logo">
          <img src="https://i.imgur.com/3zACXLF.png" alt="Logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
