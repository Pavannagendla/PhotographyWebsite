import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p>&copy; 2022 Hacker_Camerawork. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://www.instagram.com//hacker_camerawork" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://unsplash.com/@hacker_camerwork" target="_blank" rel="noopener noreferrer">Unsplash</a>
          <a href="https://www.threads.com/@hacker_camerawork" target="_blank" rel="noopener noreferrer">Threads</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;