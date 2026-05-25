import React from 'react';
import './About.css';

import AboutIntro from './AboutIntro';
import Story from './Story';
import TurningPoint from './TurningPoint';
// import Recognition from './Recognition';
import BehindTheLens from './BehindTheLens';

const About = () => {
  return (
    <div className="portfolio-about-page">
      <main className="about-main-content">
        <AboutIntro />
        <Story />
        <TurningPoint />
        {/* <Recognition /> */}
        <BehindTheLens />
      </main>
    </div>
  );
};

export default About;