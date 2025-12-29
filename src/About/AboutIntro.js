import React from 'react';
import './AboutIntro.css';

import me1 from '../images/About/me1.jpg';
import me2 from '../images/About/me2.jpg';
import me3 from '../images/About/me3.jpg';
import me4 from '../images/About/me4.jpg';

const aboutImages = [
  { src: me1, alt: 'Me 1' },
  { src: me2, alt: 'Me 2' },
  { src: me3, alt: 'Me 3' },
  { src: me4, alt: 'Me 4' },
];

const AboutIntro = () => {
  return (
    <section className="about-section">
      <h2>About Me</h2>

      <p className="intro">
        I am a Software Engineer by profession and an Amateur Photographer by choice.
      </p>

      <div className="about-gallery">
        {aboutImages.map((img, idx) => (
          <div key={idx} className="about-gallery-item">
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutIntro;
