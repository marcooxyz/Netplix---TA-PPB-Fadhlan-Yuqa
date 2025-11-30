import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Ensure this CSS file is correctly linked

const Navbar = () => {
  return (
    <div>
      {/* Navbar for menu navigation */}
      <div className="navbar-menu">
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/trending" className="navbar-link">Trending</Link>
          <Link to="/profile" className="navbar-link">Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
