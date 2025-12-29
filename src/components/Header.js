import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-left">
        <ul>
          <li><i className="fas fa-location-dot"></i> Nellore, Andhra Pradesh</li>
          <li><i className="fas fa-envelope"></i> <a href="mailto:hackercamerawork@gmail.com">hackercamerawork@gmail.com</a></li>
          <li><i className="fas fa-phone"></i> +91-7981471527</li>
        </ul>
      </div>
      <div className="header-right">
        <a href="https://www.facebook.com/pavankumar.kalyan.96/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/hackercameraart" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com//hacker_camerawork" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
      </div>
    </header>
  );
};

export default Header;