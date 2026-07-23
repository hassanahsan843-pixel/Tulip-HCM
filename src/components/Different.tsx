import React from 'react';

export default function Different() {
  return (
    <section 
      className="relative w-full max-w-[1440px] bg-transparent flex flex-col mx-auto overflow-hidden mt-20 lg:mt-[120px]"
      style={{ minHeight: '718px' }}
    >
      <img 
        src="/images/different-bg-shape.svg" 
        alt="" 
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
      />

      <img 
        src="/images/different-left-ellipse.svg" 
        alt="" 
        className="absolute pointer-events-none z-10 object-contain hidden lg:block"
        style={{
          width: '922px',
          height: '922px',
          top: '-4px',          
          left: '-253px',       
          opacity: 0.08
        }}
      />

      <div 
        className="relative z-20 flex flex-col lg:flex-row justify-between items-center flex-shrink-0 w-full lg:w-[1172px] mt-16 lg:mt-[127px] ml-0 lg:ml-[188px] px-6 lg:px-0 gap-12 lg:gap-0 mx-auto lg:mx-0"
      >
        <div 
          className="relative flex flex-col text-white flex-shrink-0 w-full lg:w-[522px] text-center lg:text-left items-center lg:items-start"
          style={{ gap: '16px' }}
        >
          {/* Main Headline with Highlight Vector Space under 'Different' */}
          <h2 
            className="text-[32px] lg:text-[40px] font-medium leading-[120%] w-full lg:w-[522px]"
            style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
          >
            What Makes Tulip{" "}
            <span className="font-semibold relative inline-block">
              Different
              <img 
                src="/images/different-bottom-accent.svg" 
                alt="" 
                className="absolute pointer-events-none z-30 object-contain max-w-none"
                style={{
                  width: '50%',
                  height: 'auto',
                  bottom: '-8px',
                  left: '48px'
                }}
              />
            </span>
          </h2>

          <p 
            className="text-[16px] font-normal leading-[120%] w-full lg:w-[522px]"
            style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
          >
            Tulip blends AI and human intelligence to streamline the hiring process, without sacrificing clarity or control. From job creation to final offer, we help teams move faster, make better decisions, and stay aligned along the way.
          </p>
        </div>

        <div className="relative flex-shrink-0 w-full max-w-[590px] lg:w-[590px] h-auto lg:h-[464px] pb-12 lg:pb-0">
          <img 
            src="/images/different-showcase-group.svg" 
            alt="What Makes Tulip Different Illustration" 
            className="w-full h-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}
