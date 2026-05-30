import React, { useRef, useState, useEffect } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import mriImg from '../assets/mri.jpg';
import dashboardImg from '../assets/dashboard.jpg';

// Data bisa kamu ganti sesuka hati, jumlahnya akan dideteksi otomatis
const projectData = [
  {
    id: 1,
    title: 'Brain Tumor Segmentation',
    tags: ['Python', 'Deep Learning'],
    img: mriImg, 
  },
  {
    id: 2,
    title: 'Pregnancy Chatbot',
    tags: ['Python', 'NLP'],
    img: 'https://via.placeholder.com/400x250/0f172a/3b82f6?text=Chatbot+UI',
  },
  {
    id: 3,
    title: 'Terrorism Analysis Dashboard',
    tags: ['Python', 'Data Analysis'],
    img: dashboardImg,
  },
  {
    id: 4,
    title: 'AI Attendance System',
    tags: ['Python', 'Computer Vision'],
    img: 'https://via.placeholder.com/400x250/0f172a/3b82f6?text=Face+Recog',
  },
  {
    id: 5,
    title: 'Sentiment Analysis App',
    tags: ['Python', 'NLP'],
    img: 'https://via.placeholder.com/400x250/0f172a/3b82f6?text=App+UI',
  },
];

function Projects() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const calculateMaxIndex = () => {
    if (sliderRef.current && sliderRef.current.children.length > 0) {
      const container = sliderRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const step = container.children[0].offsetWidth + 24; 
      
      if (maxScroll > 0) {
        setMaxIndex(Math.ceil(maxScroll / step));
      } else {
        setMaxIndex(0);
      }
    }
  };

  useEffect(() => {
    calculateMaxIndex();
    window.addEventListener('resize', calculateMaxIndex);
    return () => window.removeEventListener('resize', calculateMaxIndex);
  }, []);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollLeft = container.scrollLeft;
    const step = container.children[0].offsetWidth + 24;

    if (scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
      setActiveIndex(maxIndex);
    } else {
      setActiveIndex(Math.round(scrollLeft / step));
    }
  };

  const slideLeft = () => {
    if (!sliderRef.current) return;
    const step = sliderRef.current.children[0].offsetWidth + 24;
    sliderRef.current.scrollBy({ left: -step, behavior: 'smooth' });
  };

  const slideRight = () => {
    if (!sliderRef.current) return;
    const step = sliderRef.current.children[0].offsetWidth + 24;
    sliderRef.current.scrollBy({ left: step, behavior: 'smooth' });
  };

  const scrollToCard = (index) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const step = container.children[0].offsetWidth + 24;
    const maxScroll = container.scrollWidth - container.clientWidth;

    const targetScroll = index === maxIndex ? maxScroll : step * index;
    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <section className="w-[95%] mx-auto mb-6" id="projects">
      <div className="relative w-full rounded-[2.5rem] border border-blue-900/30 bg-[#01030b]/90 backdrop-blur-xl p-8 lg:p-10 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-3.5 h-3.5 bg-blue-500 rounded-full shadow-[0_0_12px_#3b82f6] animate-pulse" />
            <h2 className="text-2xl lg:text-[26px] font-sora font-bold text-white tracking-wide">
              Featured Projects
            </h2>
          </div>
          
          <button className="flex items-center gap-2 bg-transparent border border-blue-800/50 text-blue-300 hover:text-white px-5 py-2.5 rounded-full font-sora font-medium text-sm transition-all hover:bg-blue-900/30 hover:border-blue-500 cursor-pointer">
            View All Projects <FaArrowRight size={12} />
          </button>
        </div>

        <div className="relative flex items-center group">
          
          {activeIndex > 0 && maxIndex > 0 && (
            <button 
              onClick={slideLeft}
              className="absolute -left-4 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#020513] border border-blue-800/50 text-blue-400 shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:bg-blue-600 hover:text-white hover:border-blue-400 transition-all cursor-pointer opacity-0 group-hover:opacity-100"
            >
              <FaChevronLeft size={16} />
            </button>
          )}

          <div 
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
          >
            {projectData.map((project) => (
              <div 
                key={project.id} 
                className="min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] bg-[#020513] rounded-3xl border border-blue-900/40 p-5 snap-center flex flex-col gap-5 hover:border-blue-500/60 hover:-translate-y-1 transition-all duration-300 group/card cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
              >
                <div className="w-full h-44 rounded-2xl overflow-hidden bg-blue-950/20 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020513] to-transparent opacity-40 z-10" />
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col flex-grow justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-[11px] font-inter font-medium px-2.5 py-1 bg-blue-900/30 text-blue-300 rounded-md border border-blue-800/40">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-end justify-between gap-2 mt-auto">
                    <h3 className="text-white font-sora font-semibold text-lg leading-snug max-w-[80%]">
                      {project.title}
                    </h3>
                    <div className="w-9 h-9 rounded-full border border-blue-800/60 flex items-center justify-center text-blue-400 group-hover/card:bg-blue-600 group-hover/card:text-white group-hover/card:border-blue-500 transition-colors shrink-0">
                      <FaArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {activeIndex < maxIndex && maxIndex > 0 && (
            <button 
              onClick={slideRight}
              className="absolute -right-4 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#020513] border border-blue-800/50 text-blue-400 shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:bg-blue-600 hover:text-white hover:border-blue-400 transition-all cursor-pointer opacity-0 group-hover:opacity-100"
            >
              <FaChevronRight size={16} />
            </button>
          )}
          
        </div>

        {maxIndex > 0 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx 
                    ? 'w-8 bg-blue-500 shadow-[0_0_8px_#3b82f6]' 
                    : 'w-6 bg-blue-900/50 hover:bg-blue-700/50'
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;