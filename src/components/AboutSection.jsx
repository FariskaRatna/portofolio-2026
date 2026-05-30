import React from 'react';
import About from './about/About';
import Highlights from './about/Highlights';
import Skills from './about/Skills';

function AboutSection() {
  return (
    <section className="w-[95%] mx-auto mb-6" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <About />
        <Highlights />
        <Skills />
      </div>
    </section>
  );
}

export default AboutSection;