import React from 'react';

function Footer() {
  return (
    <footer className="w-[95%] mx-auto pb-8 pt-1">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-inter text-gray-500">
        
        <p>
          &copy; {new Date().getFullYear()} Fariska R. All rights reserved.
        </p>
        
        <p className="flex items-center gap-1.5">
          Built with <span className="text-blue-500">💙</span> and lots of chocolate 🍫
        </p>

      </div>
    </footer>
  );
}

export default Footer;