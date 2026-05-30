import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

function Navbar() {
  const menuItems = ['Home', 'About', 'Projects', 'Experience', 'Education', 'Contact'];
  
  const [activeMenu, setActiveMenu] = useState('Home'); 

  return (
    <nav className="flex justify-between items-center px-8 py-3 mb-6 mx-auto w-[95%] mt-6 bg-[#020513]/80 backdrop-blur-lg border border-[#1e3a8a]/40 rounded-2xl shadow-[0_0_15px_rgba(30,58,138,0.2)_inset,0_0_20px_rgba(30,58,138,0.3)]">
      
      <div className="relative flex justify-center items-center w-10 h-10 text-blue-400 font-sora font-bold text-xl drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
        <svg 
          viewBox="0 0 100 100" 
          className="absolute inset-0 w-full h-full stroke-current stroke-[6px] fill-transparent" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polygon points="50,4 93,27 93,73 50,96 7,73 7,27" />
        </svg>
        <span className="z-10 mt-0.5">F</span>
      </div>

      <ul className="flex gap-12 list-none m-0 p-0">
        {menuItems.map((item) => (
          <li key={item} className="relative group">
            <a 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setActiveMenu(item)} 
              className={`text-[16px] font-inter transition-all duration-300 ${
                item === activeMenu 
                  ? 'text-[#3b82f6] font-semibold drop-shadow-[0_0_10px_rgba(59,130,246,0.9)]' 
                  : 'text-gray-400 hover:text-gray-200 font-medium'
              }`}
            >
              {item}
            </a>
            {item === activeMenu && (
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#3b82f6] rounded-full shadow-[0_0_10px_2px_rgba(59,130,246,0.9)]"></span>
            )}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <button className="flex justify-center items-center bg-transparent text-gray-300 border border-[#1e3a8a]/60 rounded-full w-10 h-10 transition-all duration-300 hover:text-white hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
          <FaGithub size={18} />
        </button>
        <button className="flex justify-center items-center bg-transparent text-gray-300 border border-[#1e3a8a]/60 rounded-full w-10 h-10 transition-all duration-300 hover:text-white hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
          <FaLinkedin size={18} />
        </button>
        
        <button className="relative overflow-hidden flex items-center gap-2 bg-[#020513] text-white border border-[#2563eb]/60 px-5 py-2.5 rounded-full text-sm font-sora font-semibold shadow-[0_0_15px_rgba(37,99,235,0.3),inset_0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.6),inset_0_0_20px_rgba(37,99,235,0.4)] group">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#1d4ed8] to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10">Let's Talk</span> 
          <FaArrowRight size={14} className="relative z-10" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;