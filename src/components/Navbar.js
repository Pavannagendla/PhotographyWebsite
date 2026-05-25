import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const overlayRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll background layers when exhibition index window is expanded
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isNavOpen]);

  const handleLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <>
      {/* FIXED PERIMETER FRAME */}
      <header className={`nav-hud-perimeter ${isScrolled ? 'has-scrolled' : ''}`}>
        <div className="nav-hud-frame-inner">
          
          {/* BRAND EMBLEM LOGO */}
          <div className="nav-hud-logo-mono">
            <NavLink to="/" onClick={handleLinkClick}>
              HACKER_<span>CAMERAWORK</span>
            </NavLink>
          </div>

          {/* DUAL ACTION CAMERA SHUTTER TRIGGER */}
          <button 
            className={`shutter-dial-trigger ${isNavOpen ? 'is-expanded' : ''}`}
            onClick={() => setNavOpen(!isNavOpen)}
            aria-label="Toggle Exhibition Index Menu"
            aria-expanded={isNavOpen}
          >
            <div className="dial-shutter-blades">
              <span className="blade b1"></span>
              <span className="blade b2"></span>
            </div>
            <span className="dial-status-mono">{isNavOpen ? 'CLOSE' : 'MENU'}</span>
          </button>

        </div>
      </header>

      {/* OVERLAY EXHIBITION INDEX DRAWERS SCREEN */}
      <div className={`nav-exhibition-lightbox ${isNavOpen ? 'is-active' : ''}`} ref={overlayRef}>
        <div className="lightbox-watermark-substratum">VIEWFINDER</div>
        
        <nav className="lightbox-nav-matrix">
          <ul className="lightbox-links-list">
            <li style={{ '--item-index': '01' }}>
              <NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-slide' : ''}>
                <span className="slide-num">01</span> Home
              </NavLink>
            </li>
            <li style={{ '--item-index': '02' }}>
              <NavLink to="/work" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-slide' : ''}>
                <span className="slide-num">02</span> Work
              </NavLink>
            </li>
            <li style={{ '--item-index': '03' }}>
              <NavLink to="/overview" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-slide' : ''}>
                <span className="slide-num">03</span> Portfolio
              </NavLink>
            </li>
            <li style={{ '--item-index': '04' }}>
              <NavLink to="/about" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-slide' : ''}>
                <span className="slide-num">04</span> About
              </NavLink>
            </li>
            <li style={{ '--item-index': '05' }}>
              <NavLink to="/contact" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-slide' : ''}>
                <span className="slide-num">05</span> Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* CORD INDICATOR GRAPHICS */}
        <div className="lightbox-hud-footer">
          <span>INDEX // SYSTEM_ONLINE</span>
          <span>MANUAL_MODE_OK</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;