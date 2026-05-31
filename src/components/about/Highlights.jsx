import React from 'react';
import { FaCode, FaRegFolder, FaTrophy, FaAward } from 'react-icons/fa';

function Highlights() {
  const stats = [
    { 
      id: 1, 
      icon: <FaCode size={26} />, 
      count: '1-2', 
      label: 'Years\nExperience' 
    },
    { 
      id: 2, 
      icon: <FaRegFolder size={26} />, 
      count: '10+', 
      label: 'Projects & Research\nContributions' 
    },
    { 
      id: 3, 
      icon: <FaTrophy size={26} />, 
      count: '5+', 
      label: 'AI & ML Related\nCompetitions' 
    },
    { 
      id: 4, 
      icon: <FaAward size={26} />, 
      count: '6+', 
      label: 'Certifications\nEarned' 
    },
  ];

  return (
    <div className="flex flex-col h-full bg-[#01030b]/90 rounded-[2rem] border border-[#1e3a8a]/40 backdrop-blur-2xl p-8 hover:border-blue-500/30 shadow-[0_0_15px_rgba(30,58,138,0.2)_inset,0_0_20px_rgba(30,58,138,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500">
      
      <div className="flex items-center gap-3 mb-8">
        <span className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_12px_#3b82f6]"></span>
        <h2 className="text-2xl font-sora font-bold text-white tracking-wide">Highlights</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-y-10 gap-x-2 mt-auto mb-auto">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center text-center group">
            
            <div className="w-16 h-16 rounded-[1.2rem] bg-[#01030b] border border-blue-800/40 flex items-center justify-center text-blue-500 mb-5 group-hover:scale-110 group-hover:bg-blue-900/30 group-hover:text-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
              {stat.icon}
            </div>
            
            <h3 className="text-3xl font-sora font-bold text-white mb-2">{stat.count}</h3>
            
            <p className="text-gray-400 text-[14px] font-inter whitespace-pre-line leading-relaxed max-w-[130px]">
              {stat.label}
            </p>
            
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Highlights;