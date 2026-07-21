import React from 'react';

export default function Navbar() {
  const navLinkStyle = {
    fontFamily: "'ES Rebond Grotesque TRIAL', sans-serif",
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '0%',
  };

  return (
    <header className="w-full h-[72px] bg-transparent flex items-center justify-between px-[80px] relative z-30">
      {/* Top Left Tulip ATS Logo */}
      <div className="flex items-center justify-start" style={{ width: '144.31px', height: '39.66px' }}>
        <img 
          src="/images/Tulip-ats-logo.svg" 
          alt="Tulip ATS Logo" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Top Center Navbar Links -> Shifted to a perfect middle-ground position */}
      <nav 
        className="flex items-center gap-[48px] text-[#29282A] ml-[225px]"
        // Change ml-[180px] to move it left or right. 
        // Increase the number to push it right, decrease it to bring it closer to the logo.
      >
        <a href="#about" style={navLinkStyle} className="hover:text-orange-500 transition-colors">About</a>
        <a href="#product" style={navLinkStyle} className="hover:text-orange-500 transition-colors">Product</a>
        <a href="#how-it-works" style={navLinkStyle} className="hover:text-orange-500 transition-colors">How It Works</a>
      </nav>

      {/* Top Right Action Buttons */}
      <div className="flex items-center gap-[12px]">
        <button className="w-[154px] h-[40px] rounded-[40px] border-2 border-[#F87315] text-[#404040] font-semibold text-sm flex items-center justify-center transition-all hover:bg-orange-50">
          Request a Demo
        </button>

        <button className="w-[125px] h-[40px] rounded-[40px] bg-[#3B82F6] text-white font-semibold text-sm flex items-center justify-center transition-all hover:bg-blue-600">
          Get In Touch
        </button>
      </div>
    </header>
  );
}
