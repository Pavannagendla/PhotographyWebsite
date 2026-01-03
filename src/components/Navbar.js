import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
// import logo from '../assets/images/logo w.png';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef();

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  // Close nav when clicking outside (mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isNavOpen && navRef.current && !navRef.current.contains(event.target)) {
        setNavOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isNavOpen]);

  const handleLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <header
      className={`main-header ${isHidden ? 'hidden' : ''} ${isNavOpen ? 'nav-open' : ''}`}
      ref={navRef}
    >
      <div className="navbar-brand">
        <NavLink to="/" onClick={handleLinkClick}>
          {/* <img src={logo} alt="Hacker Camerawork Logo" className="logo" /> */}
          <h3>HACKER_CAMERAWORK</h3>
        </NavLink>
      </div>
      <button
        className="navbar-toggle"
        onClick={() => setNavOpen(!isNavOpen)}
        aria-label="Toggle navigation"
        aria-expanded={isNavOpen}
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') setNavOpen(!isNavOpen);
        }}
      >
        <span className="toggle-icon"></span>
      </button>
      <nav className={`navbar-menu ${isNavOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/work" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-link' : ''}>Work</NavLink>
          </li>
          <li>
            <NavLink to="/overview" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-link' : ''}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active-link' : ''}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;