import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Experience() {
  const experiences = [
    {
      period: 'Sep 2025 - Present',
      role: 'Junior Programmer',
      company: 'PT Infiniti Reka Solusi',
    },
    {
      period: 'Nov 2024 - Dec 2025',
      role: 'Data Science Intern',
      company: 'PT Botika Teknologi Indonesia',
    },
    {
      period: 'Feb 2024 - Jul 2024',
      role: 'AI Engineer Intern',
      company: 'PT Widya Inovasi Indonesia',
    },
  ];

  return (
    <div className="flex flex-col h-full bg-[#020513]/80 rounded-[2rem] border border-blue-900/40 p-10 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all">
      
      <div className="flex items-center gap-3 mb-10">
        <span className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_12px_#3b82f6]"></span>
        <h2 className="text-2xl font-sora font-bold text-white tracking-wide">Experience</h2>
      </div>

      <div className="relative border-l-2 border-blue-800/40 ml-2 mt-4 mb-14 flex-grow flex flex-col justify-start gap-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute -left-[13px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-[#020513] shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <div className="text-xs text-blue-400 font-inter mb-2 tracking-widest uppercase">{exp.period}</div>
            <h3 className="text-lg font-sora font-semibold text-white mb-1.5 leading-snug">
              {exp.role}
            </h3>
            <p className="text-base text-gray-400 font-inter">{exp.company}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Experience;