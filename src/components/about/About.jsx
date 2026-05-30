import React from 'react';
import laptopImg from '../../assets/edu.png';


function About() {
  return (
    <div className="flex flex-col h-full bg-[#020513]/80 rounded-[2rem] border border-blue-900/40 p-8 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all relative overflow-hidden group">
      
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
      `}</style>

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <span className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_12px_#3b82f6]"></span>
        <h2 className="text-2xl font-sora font-bold text-white tracking-wide">About Me</h2>
      </div>
      
      {/* Description */}
      <p className="text-gray-400 font-inter text-sm leading-[1.8] mb-8 relative z-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-100 font-bold text-[16px]">
          Hello! I'm Fariska Ratna Fauziah,
        </span>
        <br />
        a Backend and AI Engineer. I am passionate about problem-solving and building efficient, scalable systems that drive meaningful impact through innovative technology.
      </p>
      
      <div className="mt-auto flex-1 flex justify-center items-center relative min-h-[180px] w-full">
        
        <div className="absolute w-40 h-40 bg-blue-600/15 blur-[60px] rounded-full group-hover:bg-blue-500/25 transition-all duration-700"></div>
        
        {/* Holographic Grid (Dibuat lebih pudar dan menyatu) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{
               backgroundImage: 'linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)',
               backgroundSize: '24px 24px',
               maskImage: 'radial-gradient(circle at 50% 50%, black 15%, transparent 65%)',
               WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 15%, transparent 65%)'
             }} 
        />
        
        {/* Wrapper Gambar dengan Animasi Melayang */}
        <div className="relative z-10 w-full h-full flex justify-center items-center animate-float-slow">
          <img 
            // Pastikan URL di bawah ini diganti dengan path gambar laptop aslimu nanti
            src={laptopImg}
            alt="Illustration" 
            className="max-h-[190px] w-auto object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] group-hover:scale-105 transition-transform duration-500" 
          />
        </div>

        {/* Bayangan di Dasar (Ground Shadow) agar efek melayangnya lebih realistis */}
        <div className="absolute bottom-0 w-1/2 h-2.5 bg-blue-500/20 blur-md rounded-[100%] group-hover:w-3/5 group-hover:bg-blue-400/30 transition-all duration-500"></div>

      </div>
    </div>
  );
}

export default About;