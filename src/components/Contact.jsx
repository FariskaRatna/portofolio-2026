import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaTelegramPlane, FaArrowRight } from 'react-icons/fa';

function Contact() {
  return (
    <section className="w-[95%] mx-auto mb-4" id="contact">
      
      {/* Tambahan animasi CSS */}
      <style>{`
        @keyframes breathe {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        .animate-breathe { animation: breathe 4s ease-in-out infinite; }
      `}</style>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-10 bg-gradient-to-br from-[#020513]/90 to-[#010208]/90 backdrop-blur-2xl rounded-[2.5rem] border border-blue-800/30 p-8 lg:p-10 shadow-[0_0_50px_rgba(0,0,0,0.6)] transition-all">
        
        {/* =========================================
            KOLOM KIRI: Let's Connect & Socials
        ========================================= */}
        <div className="flex flex-col lg:w-[28%] justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3.5 h-3.5 bg-blue-500 rounded-full shadow-[0_0_12px_#3b82f6] animate-pulse"></span>
            <h2 className="text-2xl font-sora font-bold text-white tracking-wide">Let's Connect</h2>
          </div>
          
          <p className="text-gray-400 font-inter text-[16px] leading-relaxed mb-8 pr-2">
            I'm open to exciting opportunities, collaborations, or just a friendly hello!
          </p>
          
          <div className="flex flex-wrap gap-4">
            {[
              { icon: <FaGithub size={18} />, hover: 'hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]' },
              { icon: <FaLinkedinIn size={18} />, hover: 'hover:text-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.4)]' },
              { icon: <FaEnvelope size={18} />, hover: 'hover:text-red-400 hover:border-red-400 hover:shadow-[0_0_15px_rgba(248,113,113,0.4)]' },
              { icon: <FaTelegramPlane size={18} />, hover: 'hover:text-[#229ED9] hover:border-[#229ED9] hover:shadow-[0_0_15px_rgba(34,158,217,0.4)]' },
            ].map((social, index) => (
              <a key={index} href="#" className={`w-12 h-12 rounded-full bg-blue-950/20 border border-blue-900/40 flex items-center justify-center text-gray-400 ${social.hover} hover:-translate-y-1.5 transition-all duration-300`}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* =========================================
            KOLOM TENGAH: Contact Form
        ========================================= */}
        <div className="flex flex-col gap-5 lg:w-[47%]">
          <div className="flex flex-col sm:flex-row gap-5">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-blue-950/10 backdrop-blur-sm border border-blue-800/30 rounded-2xl px-5 py-4 text-sm text-gray-200 focus:outline-none focus:border-blue-500 focus:bg-blue-950/30 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-600 hover:border-blue-700/50" 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-blue-950/10 backdrop-blur-sm border border-blue-800/30 rounded-2xl px-5 py-4 text-sm text-gray-200 focus:outline-none focus:border-blue-500 focus:bg-blue-950/30 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-600 hover:border-blue-700/50" 
            />
          </div>
          
          <div className="relative w-full flex-grow flex flex-col">
            <textarea 
              placeholder="Your Message" 
              className="w-full h-full min-h-[160px] bg-blue-950/10 backdrop-blur-sm border border-blue-800/30 rounded-2xl px-5 py-4 text-sm text-gray-200 focus:outline-none focus:border-blue-500 focus:bg-blue-950/30 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none pb-16 placeholder:text-gray-600 hover:border-blue-700/50" 
            />
            <button className="absolute bottom-3 right-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-2.5 rounded-xl font-sora font-medium text-sm transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] hover:-translate-y-0.5">
              Send Message <FaArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* =========================================
            KOLOM KANAN: Amazing Box (Dirombak Total!)
        ========================================= */}
        <div className="lg:w-[25%] relative rounded-3xl border border-blue-600/30 bg-[#030712]/60 backdrop-blur-xl overflow-hidden flex items-center justify-center p-8 text-center shadow-[0_0_30px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(59,130,246,0.15)] group transition-all duration-500 hover:border-blue-500/50 hover:bg-[#040a1d]/80">
          
          {/* Ambient Orbs (Bulat Cahaya Lembut, Bukan Kotak) */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/15 blur-[50px] rounded-full animate-breathe"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-500/15 blur-[50px] rounded-full animate-breathe" style={{ animationDelay: '2s' }}></div>
          
          {/* Sci-Fi HUD Corners (Garis siku elegan, menggantikan gradient kotak) */}
          <div className="absolute top-5 left-5 w-4 h-4 border-t-2 border-l-2 border-blue-500/50 rounded-tl-md transition-all duration-500 group-hover:w-8 group-hover:h-8 group-hover:border-blue-400"></div>
          <div className="absolute bottom-5 right-5 w-4 h-4 border-b-2 border-r-2 border-blue-500/50 rounded-br-md transition-all duration-500 group-hover:w-8 group-hover:h-8 group-hover:border-blue-400"></div>
          
          {/* Background Dotted Pattern (Lebih Transparan & Fokus di Tengah) */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{
                 backgroundImage: 'radial-gradient(rgba(59,130,246,0.6) 1px, transparent 1px)',
                 backgroundSize: '24px 24px',
                 maskImage: 'radial-gradient(circle at center, black 40%, transparent 75%)',
                 WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 75%)'
               }} 
          />

          {/* Text Content */}
          <h3 className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-400 font-sora font-semibold text-2xl leading-[1.6] drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-105 transition-transform duration-500">
            Let's build<br />something<br />amazing<br />together! 🚀
          </h3>
        </div>

      </div>
    </section>
  );
}

export default Contact;