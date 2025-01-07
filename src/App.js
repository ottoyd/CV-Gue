import React from 'react';
import Intro from './components/intro'
import Experience from './components/experience'
import Certificate from './components/certificate'
import Youtube from './components/youtube'
import Contact from './components/contact'
import Confetti from './components/confetti'

const App = () => {
  return (
    <div>
      <Intro />
      <Experience />
      <Certificate />
      <Youtube />
      <Contact />
      <Confetti />
    </div>
  );
};

export default App;
