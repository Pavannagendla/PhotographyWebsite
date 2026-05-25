import React, { useState } from 'react';
import './TurningPoint.css';

const events = [
  {
    id: '2024-june',
    year: '2024',
    label: 'JUNE 2024',
    title: 'First Exhibition — Lensified, ICCR, Kolkata',
    description: `
      In June 2024, I showcased my work for the very first time at the Lensified Photography Exhibition
      at ICCR, Kolkata. It was more than just an exhibition — it was the moment I truly felt like a
      photographer. Walking through the streets of Kolkata with fellow photographers, documenting life in
      its rawest and most vibrant form, sharpened my craft and deepened my love for the art.
    `,
  },
  {
    id: '2025-march',
    year: '2025',
    label: 'MARCH 2025',
    title: 'Second Exhibition & Magazine — ASX, Chitrakala Parishath',
    description: `
      In March 2025, I took another step forward when my second photography exhibition and second magazine
      release took place at Chitrakala Parishath, Bangalore, through ASX – The Picture Perfect. It was a
      moment of recognition, achievement, and affirmation.
    `,
  },
  {
    id: '2025-april',
    year: '2025',
    label: 'APRIL 2025',
    title: 'First Magazine Feature — India in 100 Frames, Retro Kolkata',
    description: `
      April 2025 was a milestone that filled me with immense pride. I was selected for my first photography
      magazine, India in 100 Frames by Retro Kolkata, a premium publication celebrating talented
      photographers across the country. Seeing my work featured in print and appreciated by a wider audience
      felt surreal.
    `,
  },
  {
    id: '2025-july',
    year: '2025',
    label: 'JULY 2025',
    title: 'Third Exhibition — Lensified, ICCR, Kolkata',
    description: `
      In July 2025, I returned once again to Kolkata ICCR for my third photography exhibition with Lensified —
      a full-circle moment that reminded me how far I had come, from the uncertain days of the pandemic to
      becoming an artist forging his own path.
    `,
  },
];

const TurningPoint = () => {
  const [activeId, setActiveId] = useState('2024-june');
  const activeEvent = events.find((event) => event.id === activeId);

  return (
    <section className="tp-film-section">
      <div className="tp-section-header">
        <span className="tp-eyebrow-mono">02 // HISTORICAL EVOLUTION</span>
        <h2 className="tp-heading-serif">The Turning <em>Point</em></h2>
        
        <div className="tp-intro-block">
          <p className="tp-lead-text">
            As time passed, the rented camera became an inseparable part of my routine. Eventually, I took
            a leap of faith and purchased my first-ever camera — the Nikon D5600. With it, my world expanded.
            I began exploring every genre I could: street, portrait, landscape, wildlife, architecture, and more.
          </p>
        </div>
      </div>

      {/* HORIZONTAL FILMSTRIP CHRONOLOGY TRACK */}
      <div className="tp-filmstrip-container">
        <div className="tp-track-line"></div>
        <div className="tp-strip-scroll">
          {events.map((event) => (
            <button
              key={event.id}
              className={`tp-strip-node ${activeId === event.id ? 'is-active' : ''}`}
              onClick={() => setActiveId(event.id)}
            >
              <span className="node-year-label">{event.year}</span>
              <div className="node-indicator-dot">
                <div className="inner-dot"></div>
              </div>
              <span className="node-month-label">{event.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* CINEMATIC DISPLAY SCREEN */}
      <div className="tp-stage">
        <div className="tp-stage-inner keyframe-appear" key={activeEvent.id}>
          <div className="tp-stage-meta">
            <span className="tp-meta-index">{activeEvent.label}</span>
            <h3 className="tp-stage-title">{activeEvent.title}</h3>
          </div>
          
          <div className="tp-stage-body">
            <p className="tp-stage-desc">{activeEvent.description}</p>
          </div>
        </div>
      </div>

      {/* FOOTER MANIFESTO */}
      <footer className="tp-manifesto-footer">
        <div className="tp-manifesto-box">
          <p>
            What began as a simple curiosity during a dark time had grown into a passion, a profession, and a
            purpose. My camera, once a mystery, has now become my voice — telling stories, capturing moments,
            and preserving emotions that words often cannot.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default TurningPoint;