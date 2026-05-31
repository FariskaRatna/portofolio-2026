import React from 'react';
import eduImg from '../../assets/education.png';

function Education() {
  const educations = [
    {
      period: '2021 - 2025',
      degree: 'Bachelor of Informatics Engineering',
      school: 'Universitas Negeri Semarang',
    },
    {
      period: 'Aug 2023 - Dec 2023',
      degree: 'Machine Learning Cohort',
      school: 'Bangkit Academy',
    },
    {
      period: '2018 - 2021',
      degree: 'Senior High School',
      school: 'SMA Negeri 2 Wonogiri',
    },
  ];

  return (
    <div className="flex flex-col h-full bg-[#01030b]/90 rounded-[2rem] border border-[#1e3a8a]/40 backdrop-blur-2xl hover:border-blue-500/30 p-8 shadow-[0_0_15px_rgba(30,58,138,0.2)_inset,0_0_20px_rgba(30,58,138,0.3)] p-10 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all overflow-hidden relative">

      {/* Animasi Melayang */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
      `}</style>
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-10 relative z-10">
        <span className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_12px_#3b82f6]"></span>
        <h2 className="text-2xl font-sora font-bold text-white tracking-wide">Education Journey</h2>
      </div>

      {/* Pembungkus Konten Utama */}
      <div className="flex flex-col md:flex-row flex-grow relative z-10">
        
        {/* KOLOM KIRI: Timeline (Mengambil 60% Lebar) */}
        <div className="w-full md:w-[60%] relative border-l-2 border-blue-800/40 ml-2 mt-4 mb-4 flex flex-col gap-12">
          {educations.map((edu, index) => (
            <div key={index} className="relative pl-8">
              <div className="absolute -left-[13px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-[#020513] shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              <div className="text-xs text-blue-400 font-inter mb-2 tracking-widest uppercase">{edu.period}</div>
              <h3 className="text-lg font-sora font-semibold text-white mb-1.5 leading-snug">
                {edu.degree}
              </h3>
              <p className="text-base text-gray-400 font-inter">{edu.school}</p>
            </div>
          ))}
        </div>

        <div className="hidden md:flex w-full md:w-[80%] justify-center items-center relative">
          
          <div className="absolute w-48 h-48 bg-blue-600/15 blur-[60px] rounded-full group-hover:bg-blue-500/25 transition-all duration-700"></div>

          
          
          <div className="relative z-10 w-full flex flex-col justify-center items-center animate-float-slow group">
            <img 
              src={eduImg}
              alt="Education" 
              className="w-[100%] h-auto object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-transform duration-500 relative z-10"
            />
            
            <div className="absolute -bottom-6 w-1/2 h-2.5 bg-blue-500/20 blur-md rounded-[100%] group-hover:w-3/5 group-hover:bg-blue-400/30 transition-all duration-500"></div>
          </div>

        </div>
      </div>
      
      <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none z-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse at center right, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center right, black 20%, transparent 70%)'
          }} 
      />
      

    </div>
  );
}

export default Education;