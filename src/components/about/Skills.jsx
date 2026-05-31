import React from 'react';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, 
  SiJavascript, SiPython, SiPostgresql, 
  SiTensorflow, SiGithub, SiDocker, SiPandas 
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { icon: <SiReact className="text-[#61DAFB]" size={24} />, name: 'React' },
        { icon: <div className="bg-white text-black rounded-full p-1"><SiNextdotjs size={16} /></div>, name: 'Next.js' },
        { icon: <SiTailwindcss className="text-[#06B6D4]" size={24} />, name: 'Tailwind CSS' },
      ]
    },
    {
      name: 'Backend',
      skills: [
        { icon: <SiJavascript className="text-[#F7DF1E] bg-black rounded-sm" size={24} />, name: 'JavaScript' },
        { icon: <SiPython className="text-[#3776AB]" size={24} />, name: 'Python' },
        { icon: <SiPostgresql className="text-[#4169E1]" size={24} />, name: 'PostgreSQL' },
      ]
    },
    {
      name: 'Data & AI',
      skills: [
        { icon: <SiPandas className="text-white" size={24} />, name: 'Pandas' },
        { icon: <SiTensorflow className="text-[#FF6F00]" size={24} />, name: 'TensorFlow' },
        { icon: <div className="w-6 h-6 rounded-full border-[3px] border-blue-500 border-t-purple-500 border-r-green-500 rotate-45" />, name: 'Data Processing' },
      ]
    },
    {
      name: 'Tools',
      skills: [
        { icon: <SiGithub className="text-white" size={24} />, name: 'GitHub' },
        { icon: <SiDocker className="text-[#2496ED]" size={24} />, name: 'Docker' },
        { icon: <TbBrandVscode className="text-[#007ACC]" size={24} />, name: 'VS Code' },
      ]
    }
  ];

  return (
    <div className="flex flex-col h-full bg-[#01030b]/90 rounded-[2rem] border border-[#1e3a8a]/40 backdrop-blur-2xl p-8 hover:border-blue-500/30 shadow-[0_0_15px_rgba(30,58,138,0.2)_inset,0_0_20px_rgba(30,58,138,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500">
      
      <div className="flex items-center gap-3 mb-8">
        <span className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_12px_#3b82f6]"></span>
        <h2 className="text-2xl font-sora font-bold text-white tracking-wide">Skills</h2>
      </div>
      
      <div className="flex flex-col gap-6 mt-auto mb-auto">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            
            <div className="flex items-center gap-3">
              <span className="text-sm font-inter text-gray-400 font-medium">{cat.name}</span>
              <div className="h-px bg-blue-900/40 flex-grow"></div>
            </div>
            
            <div className="flex items-center gap-4">
               {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} 
                       className="w-12 h-12 rounded-[0.85rem] bg-[#01030b] border border-blue-900/50 flex items-center justify-center hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] transition-all cursor-pointer" 
                       title={skill.name}>
                    {skill.icon}
                  </div>
               ))}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Skills;