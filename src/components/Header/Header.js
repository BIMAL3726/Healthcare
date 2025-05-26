import React from 'react';
import './Header.css';
import { FaBell, FaPlus,FaSearch } from 'react-icons/fa';
import avatar from '../../assets/avatar.png';

function Header() {
  return (
    <header className="header">
      <div className="search-container">
        <FaSearch className="icon-search" />
        <input type="text" placeholder="Search" className="search-input" />
        <FaBell className="icon-bell" />
      </div>

      <div className="user-actions">
        <img src={avatar} alt="User Avatar" className="avatar" />
        <button className="add-btn"><FaPlus /></button>
        
      </div>
    </header>
  );
}

export default Header;