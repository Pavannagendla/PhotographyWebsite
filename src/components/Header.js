import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="portfolio-utility-ribbon">
      <div className="ribbon-inner-container">
        
        {/* LEFT PANEL: CHRONO & GEOLOCATION METADATA */}
        <div className="ribbon-metadata-left">
          <div className="meta-item">
            <i className="fas fa-location-dot item-icon"></i>
            <span className="meta-txt">NELLORE, AP // IN</span>
          </div>
          <div className="meta-item hide-mobile">
            <i className="fas fa-envelope item-icon"></i>
            <a href="mailto:hackercamerawork@gmail.com" className="meta-link">hackercamerawork@gmail.com</a>
          </div>
          <div className="meta-item hide-tablet">
            <i className="fas fa-phone item-icon"></i>
            <a href="tel:+917981471527" className="meta-link">+91 79814 71527</a>
          </div>
        </div>

        {/* RIGHT PANEL: CONNECT ARCHIVE PATHS */}
        <div className="ribbon-social-right">
          <a href="https://www.instagram.com/hacker_camerawork" target="_blank" rel="noopener noreferrer" title="Instagram Profile">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/hackercameraart" target="_blank" rel="noopener noreferrer" title="Twitter Profile">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/pavankumar.kalyan.96/" target="_blank" rel="noopener noreferrer" title="Facebook Profile">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;