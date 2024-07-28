import React from 'react';
import './Navbar.css';

const Navbar = ({ onMenuClick, onThemeToggle }) => {
  return (
    <nav>
      <i className='bx bx-menu' onClick={onMenuClick}></i>
      <a href="#" className="nav-link">Categories</a>
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="submit" className="search-btn"><i className='bx bx-search'></i></button>
        </div>
      </form>
      <input type="checkbox" id="switch-mode" hidden onChange={onThemeToggle} />
      <label htmlFor="switch-mode" className="switch-mode"></label>
      <a href="#" className="notification">
        <i className='bx bxs-bell'></i>
        <span className="num">8</span>
      </a>
      <a href="#" className="profile">
        <img src="img/people.png" alt="Profile" />
      </a>
    </nav>
  );
};

export default Navbar;
