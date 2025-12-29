import React from 'react';

import './About.css';
import AboutIntro from './AboutIntro';
import Story from './Story';
// import Recognition from './Recognition';
import BehindTheLens from './BehindTheLens';
import TurningPoint from './TurningPoint';


const About = () => {
  return (
    <div className="About">
      <main>
        <AboutIntro />
        <Story />
        <TurningPoint />
        {/* <Recognition /> */}
        <BehindTheLens />
      </main>
    </div>
  );
}

export default About;
