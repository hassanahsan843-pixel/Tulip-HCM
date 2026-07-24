import React from 'react';

export default function Hero() {
  return (
    <div className="max-w-[1800px] mx-auto w-full">
      <section className="mt-[45px] flex flex-col xl:flex-row justify-evenly items-center w-full min-h-[660px]">
        
        <div className="flex flex-col items-start w-full md:max-w-[630px] px-5 lg:px-0 xl:ms-[170px] xl:me-0 gap-4 2xl:ms-[120px]">
          <div className="relative w-full">
          <h1 
            className="text-[40px] lg:text-[56px] text-[#29282A] w-full"
            style={{ lineHeight: '120%', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
          >
            <span className="font-normal">Hiring should be</span>{" "}
            <span className="font-bold relative inline-block">
              Fast,
              <img 
                src="/images/fast-top-accent.svg" 
                alt="" 
                className="absolute pointer-events-none z-20 object-contain hidden lg:block" 
                style={{
                  width: '50px',
                  height: '40px',
                  top: '-10px',
                  right: '-28px',
                  transform: 'rotate(-360deg)'
                }}
              />
            </span> <br className="hidden lg:block" />
            <span className="font-bold relative inline-block">
              Clear
              <img 
                src="/images/clear-highlight.svg" 
                alt="" 
                className="absolute pointer-events-none z-10 object-contain max-w-none" 
                style={{
                  top: '50%',
                  left: '44%',
                  transform: 'translate(-50%, -50%)',
      width: '125%',
      height: '160%'
    }}
  />
</span>{" "}
            <span className="font-bold">
              &{" "}
              <span className="relative inline-block">
                Customizable.
                <img 
                  src="/images/customizable-bottom-accent.svg" 
                  alt="" 
                  className="absolute pointer-events-none z-20 object-contain bottom-[-16px] lg:bottom-[-8px] w-[160px] lg:w-[220px] h-[14px] lg:h-[20px]"
                  style={{
                    right: '0',
                    transform: 'rotate(-360deg)'
                  }}
                />
              </span>
            </span>
          </h1>
        </div>

        <p 
          className="text-[16px] font-normal text-[#555358] w-full" 
          style={{ lineHeight: '120%', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif', letterSpacing: '0%' }}
        >
          Tulip is a next-generation applicant tracking system that combines the power of AI<br className="hidden lg:block" />
          with the judgment of experienced teams. Built for speed and designed with empathy,<br className="hidden lg:block" />
          Tulip helps you hire better, without over engineering the process.
        </p>

        <div 
          className="flex flex-col text-sm font-semibold text-[#3A393C] h-auto lg:h-[81px]"
          style={{ gap: '12px' }}
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

        <div className="flex items-center gap-[12px]">
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

        <div className="w-full h-full max-w-[600px] max-h-[500px] px-5 md:px-0 mt-8 xl:mt-0">
          <img 
            src="/images/hero-illustration-group.svg" 
            alt="Tulip ATS Overview Illustration" 
            className="w-full h-full object-contain md:mt-[-57px]"
          />
        </div>

      </section>
    </div>
  );
}
