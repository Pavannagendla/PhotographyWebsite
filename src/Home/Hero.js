import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="exhibition-hero-canvas">
      {/* DECORATIVE LIGHT-TABLE MATRIX SUBSTRATUM */}
      <div className="hero-matrix-underlay"></div>

      <div className="hero-asymmetric-wrapper">
        
        {/* LEFT PANEL: MASSIVE DISPLAY TYPOGRAPHY */}
        <div className="hero-text-manifesto">
          <span className="hero-mono-badge">// OVERVIEW: FOCUS_PRIMARY</span>
          
          <h1 className="hero-main-serif-title">
            Hacker_<br />
            <span>Camerawork</span>
          </h1>

          <div className="hero-social-announcement">
            <h4 className="announcement-sub">LIVE UPDATES & EXPOSURE DIALS</h4>
            <p className="hashtag-link-wrapper">
              <a 
                href="https://www.instagram.com/explore/tags/hacker_camerawork/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                #hacker_camerawork
              </a>
            </p>
          </div>

          <div className="hero-action-anchor-row">
            <a 
              href="https://www.instagram.com/hacker_camerawork" 
              target="_blank" 
              rel="noopener noreferrer"
              className="luxury-action-trigger"
            >
              <span className="action-txt">Explore Archive</span>
              <span className="action-arrow">➔</span>
            </a>
          </div>
        </div>

        {/* RIGHT PANEL: ASYMMETRIC PORTRAIT SCISSOR FRAME */}
        <div className="hero-visual-anchor">
          <div className="hero-image-scaffold-frame">
            {/* GHOST FRAME LINE TRANSITION */}
            <div className="hero-frame-ghost-outline"></div>
            
            <div className="hero-img-bounding-box">
              <img src="/creator1.jpg" alt="Pavan Kumar Nagendla" />
              <div className="hero-chromatic-lens-tint" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;