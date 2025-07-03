import React from 'react';
import { FaHeart, FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';
import Logo from './Logo';
import SearchBar from './SearchBar';


function SubNav() {
  return (
    <div className="subnav">
      <Logo />
      <SearchBar />

      {/* Actions */}
      <div className="subnav__actions">
        {/* Language Selector */}
        <div className="action__selector">
          <button className="lang-btn">
            <span className="flag-icon">🇻🇳</span>
            <span className="arrow">&#9660;</span>
          </button>
        </div>
        {/* Currency Selector */}
        <div className="action__selector">
          <button className="currency-btn">
            VND <span className="arrow">&#9660;</span>
          </button>
        </div>
        {/* Menu Items */}
        <ul className="action__menu">
          <li>TRỢ GIÚP</li>
          <li>LIÊN HỆ</li>
          <li><FaHeart /></li>
          <li><FaUser /></li>
          <li><FaShoppingCart /></li>
        </ul>
      </div>
    </div>
  );
}

export default SubNav;