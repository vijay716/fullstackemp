import React from 'react';
import './navbar.css'; // Import the external CSS file
import profile from '../../assets/profile-user.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Vision
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/welcome">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          </ul>
          <div className="profile-logo">
          <img src={profile} alt="Profile" className="profile-user" />
      
        </div>
      
      
      </div>
    </nav>
  );
};

export default Navbar;
