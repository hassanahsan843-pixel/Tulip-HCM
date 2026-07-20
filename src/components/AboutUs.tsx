import React from 'react';

export default function AboutUs() {
  return (
    // The master section viewport container maps to the exact 1440px page layout flow
    <section 
      className="relative w-[1440px] bg-transparent mx-auto overflow-hidden mt-[120px]"
      style={{ height: '1020px' }} // Locked to the true Figma layer group canvas height
    >
      
      {/* Custom Curved Dark Background SVG Asset */}
      <img 
        src="/images/about-bg-shape.svg" 
        alt="" 
        className="absolute top-0 left-0 w-full h-full object-fill z-0"
      />

      {/* White Translucent Soft Gradient Ellipse at the right edge behind images */}
      <img 
        src="/images/about-right-ellipse.svg" 
        alt="" 
        className="absolute pointer-events-none z-10 object-contain"
        style={{
          width: '922px',
          height: '922px',
          top: '330px',          
          left: '1152px',        
          opacity: 0.06
        }}
      />

      {/* Upper Heading Box Box */}
      <div 
        className="absolute flex flex-col items-center z-20"
        style={{
          width: '846px',
          height: '168px',
          top: '162px',         
          left: '297px',        
          gap: '40px'
        }}
      >
        {/* About Us Badge Pill */}
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

        {/* Main Header Headline Content */}
        <div className="relative w-full text-center">
          
          {/* Vector Accent Space: Directly at top-right of the word 'System' */}
          <img 
            src="/images/system-top-accent.svg" 
            alt="" 
            className="absolute pointer-events-none object-contain"
            style={{
              width: '28.41px',
              height: '24px',
              top: '-10px',     
              left: '486px'      
            }}
          />

          <h2 
            className="text-[40px] font-medium text-white tracking-normal"
            style={{ width: '846px', height: '96px', lineHeight: '120%', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
          >
            We <span className="font-semibold">Built</span> The System We Always <br />
            <span className="relative inline-block">
              Wished We Had.
              
              {/* Vector Accent Space: Directly beneath the word 'Wished' */}
              <img 
                src="/images/wished-bottom-accent.svg" 
                alt="" 
                className="absolute pointer-events-none object-contain"
                style={{
                  width: '82.37px',
                  height: '14.33px',
                  bottom: '-4px',
                  left: '0px'  
                }}
              />
            </span>
          </h2>
        </div>
      </div>

      {/* 4. Lower Content Container (Our Story Text Box + Right Image Box) */}
      <div 
        className="absolute z-20"
        style={{
          width: '1172px',
          height: '405px',
          // UPDATED: Shifted up from 502px to 420px to move the whole layout higher up
          top: '420px',         
          left: '188px'
        }}
      >
        
        {/* Left Side: Our Story Typography Frame */}
        <div 
          className="absolute flex flex-col text-white"
          style={{
            width: '522px',
            height: '189px',
            top: '40px', // Adjusted local top spacing inside the wrapper box
            left: '0px',
            gap: '16px'
          }}
        >
          <div className="relative inline-block w-full">
            <h3 
              className="text-[40px] font-medium relative inline-block text-white"
              style={{ height: '40px', lineHeight: '100%', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
            >
              Our Story
              
              {/* Vector Accent Space: Quote mark icon graphic at top-right of 'Story' */}
              <img 
                src="/images/story-top-accent.svg" 
                alt="" 
                className="absolute pointer-events-none object-contain"
                style={{
                  width: '43.98px',
                  height: '32px',
                  top: '-16px',
                  right: '-50px'
                }}
              />
            </h3>
          </div>

          {/* Core Sub-Description Paragraph -> UPDATED: Extraneous line breaks removed */}
          <p 
            className="text-[16px] font-normal leading-[140%] text-[#E0E0E0]"
            style={{ width: '522px', fontFamily: 'Nunito, sans-serif' }}
          >
            After leading HR and product teams in high-growth companies, we saw the same problems over and over: messy processes, siloed communication, and tools that created more noise than clarity. Tulip was born out of the belief that hiring is both a science and an art, and that technology should support human judgment, not replace it. We're building the platform we always wanted: one that's simple, powerful, and designed to make great hiring easier.
          </p>
        </div>

        {/* Right Side: Showcase Photo Grid Image Frame Layer */}
        <div 
          className="absolute"
          style={{
            width: '630px',
            height: '405px',
            top: '0px',
            left: '542px'       
          }}
        >
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