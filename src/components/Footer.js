import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-terminal-footer">
      <div className="footer-structural-max">
        
        {/* LEFT CODE: RIGHTS & ARCHIVE IDENTIFICATION */}
        <div className="footer-meta-left">
          <p className="copyright-mono">
            &copy; {currentYear} HACKER_CAMERAWORK // ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* RIGHT CODE: EXPORT ARCHIVE CHANNELS */}
        <div className="footer-links-right">
          <a 
            href="https://www.instagram.com/hacker_camerawork" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-editorial-link"
          >
            INSTAGRAM <span className="arrow-diagonal">↗</span>
          </a>
          <a 
            href="https://unsplash.com/@hacker_camerawork" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-editorial-link"
          >
            UNSPLASH <span className="arrow-diagonal">↗</span>
          </a>
          <a 
            href="https://www.threads.net/@hacker_camerawork" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-editorial-link"
          >
            THREADS <span className="arrow-diagonal">↗</span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;