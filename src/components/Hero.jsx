import React from 'react';
import { FaArrowRight, FaPaperPlane } from 'react-icons/fa';
import { SiReact, SiJavascript, SiPython, SiDocker, SiTensorflow, SiPytorch } from 'react-icons/si';
import rusliImg from '../assets/rusli3.png';

function Hero() {
  return (
    <section className="w-[95%] mx-auto mt-4 mb-6" id="hero">
      
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes radarSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 0.7; box-shadow: 0 0 30px #3b82f6, inset 0 0 30px #3b82f6; }
          50%       { opacity: 1;   box-shadow: 0 0 60px #3b82f6, inset 0 0 60px #3b82f6; }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .ring-pulse    { animation: ringPulse 3s ease-in-out infinite; }
        .radar-spin    { animation: radarSpin 8s linear infinite; }
      `}</style>

      <div className="relative w-full rounded-[2.5rem] border border-blue-900/30 bg-[#01030b]/90 backdrop-blur-2xl flex flex-col lg:flex-row items-center justify-between overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.9)]"
           style={{ minHeight: '560px' }}>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[900px] h-[900px] bg-blue-700/10 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/8 blur-[120px] rounded-full pointer-events-none" />

        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute bg-blue-400 rounded-full" style={{ width:'5px', height:'5px', top:'15%', left:'45%', opacity:0.9, animation:'blink 3s 0.5s infinite', boxShadow:'0 0 12px #60a5fa' }} />
          <div className="absolute bg-blue-300 rounded-full" style={{ width:'3px', height:'3px', top:'65%', left:'52%', opacity:0.7, animation:'blink 3s 1.2s infinite', boxShadow:'0 0 8px #93c5fd' }} />
          <div className="absolute bg-blue-500 rounded-full" style={{ width:'4px', height:'4px', top:'35%', left:'60%', opacity:0.8, animation:'blink 3s 1.8s infinite', boxShadow:'0 0 12px #3b82f6' }} />
          <div className="absolute bg-white    rounded-full" style={{ width:'3px', height:'3px', top:'80%', left:'30%', opacity:0.5, animation:'blink 3s 2.4s infinite' }} />
          <div className="absolute bg-blue-400 rounded-full" style={{ width:'4px', height:'4px', top:'25%', left:'15%', opacity:0.6, animation:'blink 3s 0.8s infinite', boxShadow:'0 0 10px #60a5fa' }} />
          <div className="absolute bg-blue-300 rounded-full" style={{ width:'3px', height:'3px', top:'50%', left:'38%', opacity:0.5, animation:'blink 3s 1.5s infinite' }} />
        </div>

        <div className="relative z-20 w-full lg:w-[48%] flex flex-col gap-5 p-8 lg:pl-14 lg:py-14">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-blue-400 text-xs font-sora font-semibold tracking-[0.18em] uppercase drop-shadow-[0_0_8px_rgba(59,130,246,0.9)]">
              Software Developer
            </span>
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_2px_rgba(96,165,250,1)] animate-pulse" />
          </div>

          <h1 className="text-5xl lg:text-[5.5rem] font-sora font-bold leading-[1.02] tracking-tight">
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">Data</span>
            <br />
            <span className="text-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,1)]">
              Enthusiast
            </span>
          </h1>

          <p className="text-gray-300 text-base lg:text-lg max-w-md font-inter leading-relaxed">
            I build impactful digital solutions—from interactive geospatial dashboards to
            automated data extraction pipelines—through code and data.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' })}
              className="flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-xl font-sora font-semibold text-sm shadow-[0_0_30px_rgba(37,99,235,0.8)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(37,99,235,1)] hover:bg-blue-500 hover:-translate-y-1 cursor-pointer"
            >
              <FaArrowRight size={13} /> View Projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })}
              className="flex items-center gap-2 bg-transparent border border-blue-600/50 text-gray-300 px-7 py-3.5 rounded-xl font-sora font-medium text-sm transition-all duration-300 hover:border-blue-400 hover:text-white hover:bg-blue-900/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] cursor-pointer"
            >
              Get In Touch <FaPaperPlane size={13} />
            </button>
          </div>

          <div className="relative mt-8 rounded-2xl border border-blue-800/40 bg-[#020513]/90 px-6 py-5 w-max shadow-[0_0_30px_rgba(30,58,138,0.35)] z-20">
            <div className="absolute -top-3 left-5 flex items-center gap-2 bg-[#01030b] px-3">
              <span className="text-[11px] font-sora text-gray-400 tracking-wider">Tech Stack</span>
            </div>
            <div className="flex items-center gap-5 text-[1.6rem] pt-1">
              <SiReact       className="text-[#61DAFB] hover:scale-125 transition-transform cursor-pointer drop-shadow-[0_0_10px_rgba(97,218,251,0.7)]"  title="React" />
              <SiJavascript  className="text-[#F7DF1E] bg-black rounded-sm hover:scale-125 transition-transform cursor-pointer drop-shadow-[0_0_10px_rgba(247,223,30,0.7)]" title="JavaScript" />
              <SiPython      className="text-[#3776AB] hover:scale-125 transition-transform cursor-pointer drop-shadow-[0_0_10px_rgba(55,118,171,0.7)]"  title="Python" />
              <SiDocker      className="text-[#2496ED] hover:scale-125 transition-transform cursor-pointer drop-shadow-[0_0_10px_rgba(36,150,237,0.7)]"  title="Docker" />
              <SiTensorflow  className="text-[#FF6F00] hover:scale-125 transition-transform cursor-pointer drop-shadow-[0_0_10px_rgba(255,111,0,0.7)]"   title="TensorFlow" />
              <SiPytorch     className="text-[#EE4C2C] hover:scale-125 transition-transform cursor-pointer drop-shadow-[0_0_10px_rgba(238,76,44,0.7)]"   title="PyTorch" />
            </div>
          </div>
        </div>


        <div className="relative z-10 w-full lg:w-[52%] flex justify-center items-center mt-12 lg:mt-0 self-stretch"
             style={{ minHeight: '520px' }}> 

          <div className="absolute bottom-0 left-0 w-full h-[250px] pointer-events-none z-0 rounded-br-[2.5rem]"
               style={{
                 maskImage: 'radial-gradient(100% 100% at 50% 100%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
                 WebkitMaskImage: 'radial-gradient(100% 100% at 50% 100%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
               }}>
            <div className="absolute bottom-0 left-1/2 w-[300%] h-[300%]"
                 style={{
                   backgroundImage:
                     'linear-gradient(rgba(59,130,246,0.45) 1px, transparent 1px),' + 
                     'linear-gradient(90deg, rgba(59,130,246,0.45) 1px, transparent 1px)',
                   backgroundSize: '45px 45px', 
                   backgroundPosition: 'center bottom',
                   transform: 'translateX(-50%) perspective(400px) rotateX(75deg)', 
                   transformOrigin: 'bottom center',
                 }}
            />
          </div>

          <div className="absolute inset-0 pointer-events-none opacity-60 z-0">
            <div className="absolute top-[28%] left-[22%] w-px h-28 bg-gradient-to-b from-transparent via-blue-500/60 to-transparent" />
            <div className="absolute top-[28%] left-[12%] w-16  h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
            <div className="absolute top-[28%] left-[22%] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_12px_#60a5fa] -translate-x-1 -translate-y-1" />
            <div className="absolute top-[55%] right-[18%] w-px h-20 bg-gradient-to-b from-transparent via-blue-400/40 to-transparent" />
            <div className="absolute top-[55%] right-[18%] w-12  h-px bg-gradient-to-l from-transparent via-blue-400/40 to-transparent" />
          </div>

          <div className="absolute pointer-events-none z-0"
               style={{ top:'46%', left:'50%', transform:'translate(-50%,-50%)' }}>
            <div className="rounded-full border border-blue-600/15" style={{ width:'800px', height:'800px' }} />
          </div>
          <div className="absolute pointer-events-none z-0"
               style={{ top:'46%', left:'50%', transform:'translate(-50%,-50%)' }}>
            <div className="rounded-full border border-blue-800/10" style={{ width:'1000px', height:'1000px' }} />
          </div>

          <div className="absolute pointer-events-none radar-spin z-0"
               style={{ top:'46%', left:'50%', width:'600px', height:'600px', marginLeft:'-300px', marginTop:'-300px' }}>
            <div style={{
              width:'100%', height:'100%', borderRadius:'50%',
              border:'1.5px solid transparent',
              borderTopColor:'rgba(59,130,246,0.6)',
              borderRightColor:'rgba(59,130,246,0.15)',
              filter:'drop-shadow(0 0 8px rgba(59,130,246,0.6))',
            }} />
          </div>

          <div className="absolute inset-0 flex justify-center items-end animate-float z-10 pb-8">
            <div className="absolute pointer-events-none ring-pulse"
                 style={{
                   top:'46%', left:'50%', transform:'translate(-50%,-50%)',
                   width:'420px', height:'420px', borderRadius:'50%',
                   border:'2.5px solid #3b82f6',
                 }}
            />
            <div className="absolute pointer-events-none"
                 style={{
                   top:'46%', left:'50%', transform:'translate(-50%,-50%)',
                   width:'600px', height:'600px', borderRadius:'50%',
                   border:'1.5px solid rgba(59,130,246,0.35)',
                   boxShadow:'0 0 20px rgba(59,130,246,0.2)',
                 }}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none"
                 style={{ width:'65%', height:'120px', background:'rgba(37,99,235,0.35)', borderRadius:'50%', filter:'blur(60px)' }}
            />

            <img
              src={rusliImg}
              alt="Profile"
              className="relative z-20 object-contain mb-[18%]" 
              style={{
                width: 'auto',       
                height: '80%',       
                maxHeight: '470px',
                filter: 'grayscale(8%) contrast(1.12) brightness(1.08) drop-shadow(0 0 20px rgba(59,130,246,0.65))',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;