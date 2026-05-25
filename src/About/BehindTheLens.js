import React, { useState } from 'react';
import './BehindTheLens.css';

import photo1 from '../images/About/photo1.jpg';
import photo2 from '../images/About/photo2.jpg';
import photo3 from '../images/About/photo3.jpg';
import photo4 from '../images/About/photo4.jpg';
import photo5 from '../images/About/photo5.jpg';
import photo6 from '../images/About/photo6.jpg';
import photo7 from '../images/About/photo7.jpg';
import photo8 from '../images/About/photo8.jpg';
import photo9 from '../images/About/photo9.jpg';
import photo10 from '../images/About/photo10.jpg';

const filmFrames = [
  { id: 'f1', src: photo1, meta: { shutter: '1/160s', aperture: 'f/2.0', iso: 'ISO 200' }, desc: 'Field workspace tracking setup.' },
  { id: 'f2', src: photo2, meta: { shutter: '1/250s', aperture: 'f/1.4', iso: 'ISO 400' }, desc: 'Candid angle mid-execution.' },
  
  // 3rd Photo: Close-up focus point shifted up (15%) to prevent cutting off features
  { id: 'f3', src: photo3, meta: { shutter: '1/80s', aperture: 'f/2.8', iso: 'ISO 800' }, desc: 'Calibrating manual focal planes.', focalPoint: 'center 15%' },
  
  // 4th Photo: Macro layout tracking center moved higher up
  { id: 'f4', src: photo4, meta: { shutter: '1/500s', aperture: 'f/4.0', iso: 'ISO 100' }, desc: 'Golden hour structural landscape terrain.', focalPoint: 'center 10%' },
  
  { id: 'f5', src: photo5, meta: { shutter: '1/200s', aperture: 'f/1.8', iso: 'ISO 250' }, desc: 'Framing alignment check.' },
  { id: 'f6', src: photo6, meta: { shutter: '1/125s', aperture: 'f/2.2', iso: 'ISO 320' }, desc: 'Behind environmental backdrop documentation.' },
  { id: 'f7', src: photo7, meta: { shutter: '1/60s', aperture: 'f/2.8', iso: 'ISO 1600' }, desc: 'Studio low-light flash balancing.' },
  
  // 8th Photo: Micro alignment shift to clear closer profile details
  { id: 'f8', src: photo8, meta: { shutter: '1/1000s', aperture: 'f/5.6', iso: 'ISO 400' }, desc: 'Action speed tracking setup.', focalPoint: 'center 20%' },
  
  { id: 'f9', src: photo9, meta: { shutter: '1/250s', aperture: 'f/2.0', iso: 'ISO 100' }, desc: 'Monochrome contrast evaluation.' },
  
  // 10th Photo: Portrait crop guard override
  { id: 'f10', src: photo10, meta: { shutter: '1/400s', aperture: 'f/1.4', iso: 'ISO 200' }, desc: 'Final capture verification.', focalPoint: 'center 15%' },
];

const BehindTheLens = () => {
  const [activeFrame, setActiveFrame] = useState(filmFrames[0]);

  return (
    <section className="darkroom-workspace">
      {/* TECHNICAL DESK MATRIX BACKGROUND */}
      <div className="darkroom-grid-lines"></div>

      <div className="darkroom-layout">
        
        {/* LEFT COLUMN: ARCHIVE & STRIPS */}
        <div className="darkroom-sidebar">
          <header className="darkroom-header">
            <span className="darkroom-tag">// LOG: CONTACT SHEET</span>
            <h2 className="darkroom-title">Behind The <em>Lens</em></h2>
            <p className="darkroom-explanation">
              Hover or tap a frame on the negative film strips to inspect exposure metadata and project the full capture into the lens loupe module.
            </p>
          </header>

          {/* FILM NEGATIVE STRIP CARRIER */}
          <div className="film-strip-carrier">
            <div className="film-sprocket-track top">
              {Array.from({ length: 12 }).map((_, i) => <div key={i} className="sprocket-hole"></div>)}
            </div>
            
            <div className="film-frames-scroll">
              {filmFrames.map((frame, index) => (
                <div
                  key={frame.id}
                  className={`film-frame-cell ${activeFrame.id === frame.id ? 'is-selected' : ''}`}
                  onMouseEnter={() => setActiveFrame(frame)}
                  onClick={() => setActiveFrame(frame)}
                >
                  <div className="frame-edge-id">KODAK 400TX // {index + 1}</div>
                  <div className="frame-image-bounding">
                    <img 
                      src={frame.src} 
                      alt={frame.desc} 
                      loading="lazy" 
                      style={{ objectPosition: frame.focalPoint || 'center center' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="film-sprocket-track bottom">
              {Array.from({ length: 12 }).map((_, i) => <div key={i} className="sprocket-hole"></div>)}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: THE ENLARGING VIEWFINDER LOUPE */}
        <div className="darkroom-projection-console">
          <div className="lens-loupe-device">
            
            {/* VIRTUAL GLASS REFLECTION */}
            <div className="loupe-glass-glare"></div>
            
            {/* VIEWFINDER GRAPHICS */}
            <div className="loupe-reticle crosshair">+</div>
            <div className="loupe-reticle corner tl"></div>
            <div className="loupe-reticle corner tr"></div>
            <div className="loupe-reticle corner bl"></div>
            <div className="loupe-reticle corner br"></div>

            {/* LIVE DATA WATERMARKS */}
            <div className="loupe-exif-overlay">
              <span className="exif-pill">{activeFrame.meta.shutter}</span>
              <span className="exif-pill">{activeFrame.meta.aperture}</span>
              <span className="exif-pill">{activeFrame.meta.iso}</span>
            </div>

            {/* IMAGE SCREEN CANVAS */}
            <div className="loupe-projection-chamber" key={activeFrame.id}>
              <div 
                className="loupe-projected-image animate-lens-focus"
                style={{ 
                  backgroundImage: `url(${activeFrame.src})`,
                  backgroundPosition: activeFrame.focalPoint || 'center center' 
                }}
              />
              <div className="loupe-chromatic-aberration" />
            </div>

            <div className="loupe-caption-drawer">
              <p>{activeFrame.desc}</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BehindTheLens;