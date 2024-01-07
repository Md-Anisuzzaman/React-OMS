// Header.js

import React from 'react';
import "../styless/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">OMS</div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
