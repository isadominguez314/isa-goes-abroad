import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import FlightIcon from '@mui/icons-material/Flight'; // Importing the connecting airports icon
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'; // Importing the photo icon

function Header() {
  return (
    <header className="header">
      <div className="icon-left">
        <FlightIcon className="icon-large" style={{ color: 'white', marginRight: '10px' }} /> {/* Styling directly or you can use className */}
        <div className="header-title">ISA GOES ABROAD!</div>
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"} end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/updates" className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"}>
              Updates
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="icon-right">
        <div className="header-title"> INSTAGRAM </div>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <PhotoCameraIcon className="icon-large" style={{ color: 'white', marginLeft: '10px' }} /> {/* Styling directly or you can use className */}
        </a>
      </div>
    </header>
  );
}

export default Header;
