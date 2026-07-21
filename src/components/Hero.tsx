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
              width: '50px',
              height: '40px',
              top: '-10px',
              left: '517px',
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
      top: '50%',
      left: '44%', // Shifted left from 50%
      transform: 'translate(-50%, -50%)',
      width: '125%',
      height: '160%'
    }}
  />
</span>{" "}
            <span className="font-bold relative inline-block">
              & Customizable.
              
              {/* Bottom Accent SVG Shape (Under '& Customizable') */}
              <img 
                src="/images/customizable-bottom-accent.svg" 
                alt="" 
                className="absolute pointer-events-none z-20 object-contain"
                style={{
                  width: '220px',
                  height: '20px',
                  bottom: '-4px',
                  left: '210px',
                  transform: 'rotate(-360deg)'
                }}
              />
            </span>
          </h1>
        </div>

        {/* Subtitle Paragraph */}
        <p 
          className="text-[16px] font-normal text-[#555358] w-full" 
          style={{ lineHeight: '120%', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif', letterSpacing: '0%' }}
        >
          Tulip is a next-generation applicant tracking system that combines the power of AI<br />
          with the judgment of experienced teams. Built for speed and designed with empathy,<br />
          Tulip helps you hire better, without over engineering the process.
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
          <button className="w-[159px] h-[32px] text-white rounded-[40px] text-xs font-semibold flex items-center justify-center transition-all" style={{ backgroundColor: '#47A3FF' }} onMouseOver={e => (e.currentTarget.style.backgroundColor='#2e8fe8')} onMouseOut={e => (e.currentTarget.style.backgroundColor='#47A3FF')}>
            Get Early Access
          </button>

          {/* Join Waitlist Button */}
          <button 
            className="w-[121px] h-[32px] rounded-[40px] text-xs font-semibold flex items-center justify-center transition-all"
            style={{ border: '2px solid #47A3FF', color: '#29282A', backgroundColor: 'white' }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#47A3FF';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderColor = '#47A3FF';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#29282A';
              e.currentTarget.style.borderColor = '#47A3FF';
            }}
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
