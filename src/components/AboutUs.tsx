import React from 'react';

export default function AboutUs() {
  return (
    <section 
      className="relative w-full max-w-[1440px] bg-transparent flex flex-col mx-auto overflow-hidden mt-20 lg:mt-[120px] px-6 lg:px-0"
      style={{ minHeight: '1020px' }}
    >
      <img 
        src="/images/about-bg-shape.svg" 
        alt="" 
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
      />

      <img 
        src="/images/about-right-ellipse.svg" 
        alt="" 
        className="absolute pointer-events-none z-10 object-contain hidden lg:block"
        style={{
          width: '922px',
          height: '922px',
          top: '330px',          
          right: '-434px',
          opacity: 0.06
        }}
      />

      <div 
        className="relative flex flex-col items-center z-20 self-center flex-shrink-0 w-full lg:w-[846px] mt-12 lg:mt-[162px]"
        style={{ gap: '40px' }}
      >
        <div 
          className="flex items-center justify-center font-medium text-xs text-[#E0E0E0]"
          style={{
            width: '132px',
            height: '32px',
            borderRadius: '80px',
            border: '1px solid #E0E0E0',
            backgroundColor: 'rgba(224, 224, 224, 0.12)' 
          }}
        >
          About Us
        </div>

        <div className="relative w-full text-center">
          <img 
            src="/images/system-top-accent.svg" 
            alt="" 
            className="absolute pointer-events-none object-contain hidden lg:block"
            style={{
              width: '28.41px',
              height: '24px',
              top: '-10px',     
              left: '486px'      
            }}
          />

          <h2 
            className="text-[32px] lg:text-[40px] font-medium text-white tracking-normal w-full lg:w-[846px] h-auto lg:h-[96px] mx-auto"
            style={{ lineHeight: '120%', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
          >
            We <span className="font-semibold">Built</span> The System We Always <br className="hidden lg:block" />
            <span className="relative inline-block">
              Wished We Had.
              <img 
                src="/images/wished-bottom-accent.svg" 
                alt="" 
                className="absolute pointer-events-none object-contain"
                style={{
                  width: '100px',
                  height: '16px',
                  bottom: '-6px',
                  left: '-3px'  
                }}
              />
            </span>
          </h2>
        </div>
      </div>
      <div 
        className="relative flex flex-col lg:flex-row items-center justify-between z-20 flex-shrink-0 w-full lg:w-[1172px] mt-16 lg:mt-[90px] ml-0 lg:ml-[188px] gap-12 lg:gap-0 mx-auto lg:mx-0"
      >
        <div 
          className="flex flex-col text-white w-full lg:w-[522px] text-center lg:text-left items-center lg:items-start"
          style={{ gap: '16px' }}
        >
          <div className="relative inline-block">
            <h3 
              className="text-[32px] lg:text-[40px] font-medium relative inline-block text-white h-auto lg:h-[40px]"
              style={{ lineHeight: '100%', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
            >
              Our Story
              <img 
                src="/images/story-top-accent.svg" 
                alt="" 
                className="absolute pointer-events-none object-contain hidden lg:block"
                style={{
                  width: '43.98px',
                  height: '32px',
                  top: '-16px',
                  right: '-50px'
                }}
              />
            </h3>
          </div>

          <p 
            className="text-[16px] font-normal leading-[140%] text-[#E0E0E0] w-full lg:w-[522px]"
            style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
          >
            After leading HR and product teams in high-growth companies, we<br className="hidden lg:block" />
            saw the same problems over and over: messy processes, siloed<br className="hidden lg:block" />
            communication, and tools that created more noise than clarity.<br className="hidden lg:block" />
            Tulip was born out of the belief that hiring is both a science and an art,<br className="hidden lg:block" />
            and that technology should support human judgment, not replace it.<br className="hidden lg:block" />
            We're building the platform we always wanted: one that's simple,<br className="hidden lg:block" />
            powerful, and designed to make great hiring easier.
          </p>
        </div>

        <div className="w-full max-w-[630px] lg:w-[630px] h-auto lg:h-[405px]">
          <img 
            src="/images/about-showcase-grid.svg" 
            alt="Tulip Team Story Showcase" 
            className="w-full h-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}
