import React from 'react';

export default function Different() {
  return (
    // The wrapper container is completely transparent 
    <section 
      className="relative w-[1440px] bg-transparent mx-auto overflow-hidden mt-[120px]"
      style={{ height: '718px' }}
    >
      
      {/* Custom curved Figma background SVG */}
      <img 
        src="/images/different-bg-shape.svg" 
        alt="" 
        className="absolute top-0 left-0 w-full h-full object-fill z-0"
      />

      {/* White Soft Gradient Ellipse layer floating cleanly over the background layer */}
      <img 
        src="/images/different-left-ellipse.svg" 
        alt="" 
        className="absolute pointer-events-none z-10 object-contain"
        style={{
          width: '922px',
          height: '922px',
          top: '-4px',          
          left: '-253px',       
          opacity: 0.08
        }}
      />

      {/* Inner Grid Box Content Frame (Pushed to z-20 to stay on top and fully clickable) */}
      <div 
        className="absolute z-20"
        style={{
          width: '1172px',
          height: '464px',
          top: '127px',         
          left: '188px'
        }}
      >
        
        {/* Left Hand: Typography Text Box Frame */}
        <div 
          className="absolute flex flex-col text-white"
          style={{
            width: '522px',
            height: '140px',
            top: '162px',       
            left: '0px',
            gap: '16px'
          }}
        >
          {/* Main Headline with Highlight Vector Space under 'Different' */}
          <h2 
            className="text-[40px] font-medium leading-[120%]"
            style={{ width: '522px', height: '48px', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
          >
            What Makes Tulip{" "}
            <span className="font-semibold relative inline-block">
              Different
              
              {/* NEW: Vector accent graphic placed directly beneath the word 'Different' */}
              <img 
                src="/images/different-bottom-accent.svg" 
                alt="" 
                className="absolute pointer-events-none z-30 object-contain max-w-none"
                style={{
                  width: '50%',        // Spans the full length of the word
                  height: 'auto',
                  bottom: '-8px',       // Pulls it just beneath the letters
                  left: '48px'
                }}
              />
            </span>
          </h2>

          {/* Sub-Description Text Paragraph -> UPDATED: font-semibold changed to font-normal */}
          <p 
            className="text-[16px] font-normal leading-[120%]"
            style={{ width: '522px', height: '76px', fontFamily: 'Nunito, sans-serif' }}
          >
            Tulip blends AI and human intelligence to streamline the hiring process, without sacrificing clarity or control. From job creation to final offer, we help teams move faster, make better decisions, and stay aligned along the way.
          </p>
        </div>

        {/* Right Hand: Embedded Illustration Image Asset Box */}
        <div 
          className="absolute"
          style={{
            width: '590px',
            height: '464px',
            top: '0px',
            left: '582px'       
          }}
        >
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