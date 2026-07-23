import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkStyle = {
    fontFamily: "'ES Rebond Grotesque TRIAL', sans-serif",
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '0%',
  };

  return (
    <header className="w-full h-[72px] bg-transparent flex items-center justify-between px-6 lg:px-[80px] relative z-50">
      <div className="flex items-center justify-start flex-shrink-0" style={{ width: '144.31px', height: '39.66px' }}>
        <img 
          src="/images/Tulip-ats-logo.svg" 
          alt="Tulip ATS Logo" 
          className="w-full h-full object-contain"
        />
      </div>

      <nav 
        className="hidden lg:flex items-center gap-[48px] text-[#29282A] ml-[120px]"
      >
        <a href="#about" style={navLinkStyle} className="hover:text-orange-500 transition-colors">About</a>
        <a href="#product" style={navLinkStyle} className="hover:text-orange-500 transition-colors">Product</a>
        <a href="#how-it-works" style={navLinkStyle} className="hover:text-orange-500 transition-colors">How It Works</a>
      </nav>

      <div className="hidden lg:flex items-center gap-[12px]">
        <button className="w-[154px] h-[40px] rounded-[40px] border-2 border-[#F87315] text-[#404040] font-semibold text-sm flex items-center justify-center transition-all hover:bg-orange-50">
          Request a Demo
        </button>

        <button className="w-[125px] h-[40px] rounded-[40px] bg-[#3B82F6] text-white font-semibold text-sm flex items-center justify-center transition-all hover:bg-blue-600">
          Get In Touch
        </button>
      </div>

      <div className="lg:hidden flex items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-[#29282A] focus:outline-none p-2"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-white shadow-lg lg:hidden flex flex-col p-6 gap-6 z-50">
          <a href="#about" style={navLinkStyle} className="text-[#29282A] text-lg hover:text-orange-500 transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#product" style={navLinkStyle} className="text-[#29282A] text-lg hover:text-orange-500 transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>Product</a>
          <a href="#how-it-works" style={navLinkStyle} className="text-[#29282A] text-lg hover:text-orange-500 transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
          <div className="flex flex-col gap-3 mt-4">
            <button className="w-full h-[48px] rounded-[40px] border-2 border-[#F87315] text-[#404040] font-semibold text-base flex items-center justify-center transition-all hover:bg-orange-50" onClick={() => setIsMobileMenuOpen(false)}>
              Request a Demo
            </button>
            <button className="w-full h-[48px] rounded-[40px] bg-[#3B82F6] text-white font-semibold text-base flex items-center justify-center transition-all hover:bg-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
