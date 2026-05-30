import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import Projects from './components/Projects';
import AboutSection from './components/AboutSection';
import JourneySection from './components/JourneySection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#020513] overflow-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <AboutSection />
      <JourneySection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;