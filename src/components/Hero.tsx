import React from 'react';

export default function Hero() {
  return (
    // The section behaves as a container clipped exactly to your 1440px canvas boundary
    <section className="relative w-[1440px] h-[660px] bg-transparent mx-auto">
      
      
      

      {/* 2. Whole Text Box (Hiring Container) */}
      <div 
        className="absolute z-10 flex flex-col"
        style={{ 
          width: '630px', 
          height: '368px', 
          top: '243px', 
          left: '188px',
          gap: '24px' // Matches Figma structural gap exactly
        }}
      >
        {/* Headline Wrapper */}
        <div className="relative w-full">
          {/* Top Right Accent SVG Shape (Above 't' in Fast) */}
          <img 
            src="/images/fast-top-accent.svg" 
            alt="" 
            className="absolute pointer-events-none z-20 object-contain"
            style={{
              width: '35.12px',
              height: '28.13px',
              top: '-15px',
              left: '530px',
              transform: 'rotate(-360deg)'
            }}
          />

          <h1 
            className="text-[56px] text-[#29282A] w-full"
            style={{ lineHeight: '120%', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
          >
            <span className="font-normal">Hiring should be</span> <span className="font-bold">Fast,</span> <br />
            <span className="font-bold relative inline-block">
  Clear
  <img 
    src="/images/clear-highlight.svg" 
    alt="" 
    className="absolute pointer-events-none z-10 object-contain max-w-none" 
    style={{
      bottom: '-6px',       // Increase (e.g., '-10px') to move it lower, decrease to pull it closer to the text
      
      left: '50%',          // Centers the vector relative to the word
      transform: 'translateX(-50%)', // Keeps it perfectly centered while scaling
      
      width: '110%',        // Make it slightly wider than the text so the edges don't clip the 'C' or 'r'
      height: 'auto'
    }}
  />
</span>{" "}
            <span className="font-bold relative inline-block">
              & Customizable.
              
              {/* Bottom Accent SVG Shape (Under 'm' through 'l/e' in Customizable) */}
              <img 
                src="/images/customizable-bottom-accent.svg" 
                alt="" 
                className="absolute pointer-events-none z-20 object-contain"
                style={{
                  width: '149px',
                  height: '16px',
                  bottom: '0px',
                  left: '230px',
                  transform: 'rotate(-360deg)'
                }}
              />
            </span>
          </h1>
        </div>

        {/* Subtitle Paragraph */}
        <p 
          className="text-[16px] font-semibold text-[#555358] w-full" 
          style={{ lineHeight: '120%', fontFamily: 'Nunito, sans-serif' }}
        >
          Tulip is a next-generation applicant tracking system that combines the power of AI with the judgment of experienced teams. Built for speed and designed with empathy, Tulip helps you hire better, without over engineering the process.
        </p>

        {/* Three Points Box (Height: 81px, built with tight flex gaps) */}
        <div 
          className="flex flex-col text-sm font-semibold text-[#3A393C]"
          style={{ height: '81px', gap: '12px' }}
        >
          <div className="flex items-center gap-[12px]">
            <img src="/images/red-arrow.svg" alt="" className="w-4 h-4 flex-shrink-0" />
            <span>Uses AI to support — not replace — human intelligence</span>
          </div>
          <div className="flex items-center gap-[12px]">
            <img src="/images/red-arrow.svg" alt="" className="w-4 h-4 flex-shrink-0" />
            <span>Built for fast-moving companies that need smarter hiring</span>
          </div>
          <div className="flex items-center gap-[12px]">
            <img src="/images/red-arrow.svg" alt="" className="w-4 h-4 flex-shrink-0" />
            <span>Designed to reduce friction and elevate decision-making</span>
          </div>
        </div>

        {/* Action Buttons Container */}
        <div className="flex items-center gap-[12px]">
          {/* Get Early Access Button */}
          <button className="w-[159px] h-[32px] bg-[#3B82F6] text-white rounded-[40px] text-xs font-semibold flex items-center justify-center transition-all hover:bg-blue-600">
            Get Early Access
          </button>

          {/* Join Waitlist Button */}
          <button 
            className="w-[121px] h-[32px] rounded-[40px] text-xs font-semibold flex items-center justify-center transition-all bg-white hover:bg-slate-50"
            style={{ border: '2px solid #47A3FF', color: '#29282A' }}
          >
            Join Waitlist
          </button>
        </div>
      </div>

      {/* 3. Whole Pictures Box on Right */}
      <div 
        className="absolute z-10"
        style={{ 
          width: '512px', 
          height: '521.21px', 
          top: '175.43px', 
          left: '838px' 
        }}
      >
        <img 
          src="/images/hero-illustration-group.svg" 
          alt="Tulip ATS Overview Illustration" 
          className="w-full h-full object-contain"
        />
      </div>

    </section>
  );
}