import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isHidden }) => {
  return (
    <section id="sidebar" className={isHidden ? 'hide' : ''}>
      <a href="#" className="brand">
        <i className='bx bxs-smile'></i>
        <span className="text">AdminHub</span>
      </a>
      <ul className="side-menu top">
        <li className="active">
          <a href="#">
            <i className='bx bxs-dashboard'></i>
            <span className="text">Dashboard</span>
          </a>
        </li>
        {/* Add other menu items here */}
      </ul>
      <ul className="side-menu">
        <li>
          <a href="#" className="logout">
            <i className='bx bxs-log-out-circle'></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
