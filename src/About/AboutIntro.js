import React from 'react';
import './AboutIntro.css';

import me1 from '../images/About/me1.jpg';
import me2 from '../images/About/me2.jpg';
import me3 from '../images/About/me3.jpg';
import me4 from '../images/About/me4.jpg';

const aboutImages = [
  { src: me1, alt: 'Perspective structure 1', layout: 'card-tall' },
  { src: me2, alt: 'Perspective structure 2', layout: 'card-offset' },
  { src: me3, alt: 'Perspective structure 3', layout: 'card-normal' },
  { src: me4, alt: 'Perspective structure 4', layout: 'card-tall' },
];

const AboutIntro = () => {
  return (
    <section className="hero-editorial-section">
      {/* TECHNICAL LAYER MATRIX */}
      <div className="hero-matrix-grid"></div>

      <div className="hero-max-container">
        
        {/* INTRO CONTENT BLOCK */}
        <header className="hero-editorial-header">
          <span className="hero-eyebrow-mono">01 // THE DUALITY INDEX</span>
          <h1 className="hero-heading-serif">
            Nagendla Pavan Kumar<br />
            <span>Architecting Code. <em>Capturing Life.</em></span>
          </h1>
          <div className="hero-split-lead">
            <p className="lead-left">
              A Software Engineer by profession, navigating binary architectures and complex digital ecosystems.
            </p>
            <div className="lead-divider"></div>
            <p className="lead-right">
              An Amateur Photographer by choice, utilizing optical geometry to document raw human textures and native wildlife habitats.
            </p>
          </div>
        </header>

        {/* ASYMMETRIC FINE ART MATRIX GALLERY */}
        <div className="hero-asymmetric-gallery">
          {aboutImages.map((img, idx) => (
            <div key={idx} className={`hero-gallery-wrapper ${img.layout}`}>
              <div className="hero-image-scaffolding">
                <img src={img.src} alt={img.alt} loading="eager" />
                <div className="hero-lens-flare-overlay" />
              </div>
              <span className="hero-frame-counter">FRM_00{idx + 1}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutIntro;