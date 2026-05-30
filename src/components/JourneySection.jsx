import React from 'react';
import Experience from './experience/Experience';
import Education from './experience/Education';

function JourneySection() {
  return (
    <section className="w-[95%] mx-auto mb-6" id="journey">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        <div className="lg:col-span-2 h-full">
          <Experience />
        </div>
        
        <div className="lg:col-span-3 h-full">
          <Education />
        </div>
        
      </div>
    </section>
  );
}

export default JourneySection;