import React, { useState } from 'react';
import './TurningPoint.css';

const events = [
  {
    id: '2024-june',
    year: '2024',
    label: 'June 2024',
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
    label: 'March 2025',
    title: 'Second Exhibition & Magazine — ASX, Chitrakala Parishath, Bangalore',
    description: `
      In March 2025, I took another step forward when my second photography exhibition and second magazine
      release took place at Chitrakala Parishath, Bangalore, through ASX – The Picture Perfect. It was a
      moment of recognition, achievement, and affirmation.
    `,
  },
  {
    id: '2025-april',
    year: '2025',
    label: 'April 2025',
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
    label: 'July 2025',
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
    <section className="turning-section">
      <h2 className="turning-heading">About the Turning Point</h2>

      {/* Intro Text (common for all) */}
      <p className="turning-intro">
        As time passed, the rented camera became an inseparable part of my routine. Eventually, I took
        a leap of faith and purchased my first-ever camera — the Nikon D5600. With it, my world expanded.
        I began exploring every genre I could: street, portrait, landscape, wildlife, architecture, and more.
        Each category revealed a new perspective, a new challenge, and a new story waiting to be told
        through my lens.
      </p>

      <p className="turning-intro-sub">
        My passion soon grew into something larger than I had ever imagined. These milestones shaped the
        photographer I am today:
      </p>

      <div className="turning-layout">
        {/* LEFT: Years & Months Timeline */}
        <aside className="timeline-sidebar">
          {/* Grouped by year */}
          <div className="timeline-year-block">
            <h4 className="timeline-year">2024</h4>
            {events
              .filter((e) => e.year === '2024')
              .map((event) => (
                <button
                  key={event.id}
                  className={`timeline-month ${
                    activeId === event.id ? 'active' : ''
                  }`}
                  onClick={() => setActiveId(event.id)}
                >
                  {event.label}
                </button>
              ))}
          </div>

          <div className="timeline-year-block">
            <h4 className="timeline-year">2025</h4>
            {events
              .filter((e) => e.year === '2025')
              .map((event) => (
                <button
                  key={event.id}
                  className={`timeline-month ${
                    activeId === event.id ? 'active' : ''
                  }`}
                  onClick={() => setActiveId(event.id)}
                >
                  {event.label}
                </button>
              ))}
          </div>
        </aside>

        {/* RIGHT: Details of selected month */}
        <div className="timeline-detail">
          <div className="timeline-detail-card">
            <p className="timeline-detail-label">{activeEvent.label}</p>
            <h3 className="timeline-detail-title">{activeEvent.title}</h3>
            <p className="timeline-detail-text">{activeEvent.description}</p>
          </div>

          <div className="journey">
            <p>
              What began as a simple curiosity during a dark time had grown into a passion, a profession, and a
              purpose. My camera, once a mystery, has now become my voice — telling stories, capturing moments,
              and preserving emotions that words often cannot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurningPoint;
