import React from 'react';
import './Story.css';

import photo from '../images/About/photo.jpg';

const Story = () => {
  return (
    <section className="story-editorial-section">
      {/* GRAPHIC BACKGROUND GRID PATTERN */}
      <div className="story-canvas-grid"></div>

      <div className="story-max-bound">
        <div className="story-asymmetric-layout">
          
          {/* LEFT: THE GRAPHIC PHOTO SPREAD */}
          <div className="story-visual-frame">
            <div className="story-image-offset-wrapper">
              {/* ASYMMETRIC BACKGROUND OUTLINE ACCENT */}
              <div className="story-frame-ghost-border"></div>
              
              <div className="story-main-img-holder">
                <img src={photo} alt="Portrait of the photographer" loading="eager" />
                <div className="story-img-chroma-overlay" />
              </div>
            </div>

            {/* TIMELINE ARCHIVE WATERMARK */}
            <div className="story-stamp-mono">
              <span className="stamp-title">EST. CHRONO // 2020</span>
              <span className="stamp-sub">DOCUMENTING NATIVE TEXTURES</span>
            </div>
          </div>

          {/* RIGHT: HIGH-CONTRAST TYPOGRAPHY ESSAY */}
          <div className="story-text-container">
            <header className="story-text-header">
              <span className="story-eyebrow-track">01 // ORIGIN NARRATIVE</span>
              <h2 className="story-heading-serif">The Genesis of <em>Sight</em></h2>
            </header>

            <article className="story-essay-body">
              <p className="story-paragraph drop-cap">
                In the midst of the pandemic&apos;s trying days, a flicker of inspiration ignited within me. 
                Those gloomy times, marked by the heavy shadow of global isolation, provided an unexpected 
                sanctuary—an open canvas to excavate a raw, hidden passion for the visual form.
              </p>

              <p className="story-paragraph">
                At the outset, I was blissfully unfamiliar with the deeper architectures of light and geometry, 
                save for the weight of a DSLR camera resting in my hands. What initially pulled me in was a 
                simple human desire: joining close friends on their active outdoor photoshoot adventures. The 
                definitive turning point arrived during my third collective exploration. 
              </p>

              <p className="story-paragraph highlighted-quote">
                “I mustered the courage to take absolute control of the parameters and captured a single frame. 
                That day, a distinct spark transformed curiosity into permanence.”
              </p>

              <p className="story-paragraph">
                The very next morning, I secured a camera body on rent, initiating a creative sequence that 
                would forever re-align my path. As frames stacked up, Google and YouTube transformed into 
                my digital darkroom masters, guiding technical growth as I painstakingly sharpened my 
                compositions and forged an authentic voice.
              </p>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Story;