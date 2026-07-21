import React from 'react';

export default function HowItWorks() {
  return (
    // The master section bounding block tracking your 1104px outer grid setup
    <section className="relative w-[1440px] bg-transparent mx-auto mt-[120px]" style={{ height: '784px' }}>
      
      {/* Whole Outer Box Content Frame (Width: 1104px, Height: 784px) */}
      <div 
        className="absolute flex flex-col"
        style={{
          width: '1104px',
          height: '784px',
          top: '0px',
          left: '168px',
          gap: '64px'
        }}
      >
        
        {/* ================= UPPER CONTAINER BLOCK ================= */}
        <div 
          className="relative flex flex-col items-center"
          style={{ width: '1104px', height: '292px', gap: '24px' }}
        >
          {/* How It Works Badge Pill — exact Figma spec */}
          <div
            style={{
              width: '132px',
              height: '32px',
              borderRadius: '80px',
              border: '1px solid #9B7AF5',
              backgroundColor: '#9B7AF51F',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#9B7AF5',
                whiteSpace: 'nowrap',
              }}
            >
              How It Works
            </span>
          </div>

          {/* Headline Content Wrapper */}
          <div className="relative w-full text-center mt-2">
            <h2 
              className="text-[40px] font-medium text-[#29282A] tracking-normal"
              style={{ width: '1104px', height: '40px', lineHeight: '100%', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
            >
              From Job Req To Offer,{" "}
              <span className="font-semibold relative inline-block">
                Without
                
                {/* Accent SVG Space: Directly beneath 'Without' */}
                <img 
                  src="/images/without-chaos-accent.svg" 
                  alt="" 
                  className="absolute pointer-events-none object-contain max-w-none"
                  style={{
                    width: '149px',
                    height: '16px',
                    bottom: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                />
              </span>{" "}
              The Chaos.
            </h2>
          </div>

          {/* Horizontal 1, 2, 3 Sequential Step Points Container Block */}
          <div 
            className="flex items-center w-[1104px] mt-8"
            style={{ height: '140px', gap: '24px' }}
          >
            {/* Step 1 Box Component */}
            <div className="flex items-center" style={{ width: '352px', height: '140px', gap: '20px' }}>
              <img 
                src="/images/step-number-1.svg" 
                alt="1" 
                className="object-contain flex-shrink-0" 
                style={{ width: '58px', height: '104px' }} 
              />
              <div className="flex flex-col justify-center" style={{ width: '271px' }}>
                <h3 className="text-[20px] font-semibold text-[#29282A] mb-2 leading-[120%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  Create Roles with Clarity<br />and Context
                </h3>
                <p className="text-[14px] font-normal text-[#555358] leading-[140%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  Our AI-enhanced customizable<br />templates help define roles with real<br />substance cutting down on revisions<br />and rework later.
                </p>
              </div>
            </div>

            {/* Step 2 Box Component */}
            <div className="flex items-center" style={{ width: '352px', height: '140px', gap: '20px' }}>
              <img 
                src="/images/step-number-2.svg" 
                alt="2" 
                className="object-contain flex-shrink-0" 
                style={{ width: '76px', height: '128px' }} 
              />
              <div className="flex flex-col justify-center" style={{ width: '245px' }}>
                <h3 className="text-[20px] font-semibold text-[#29282A] mb-2 leading-[120%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  Run Interviews That Flow<br />Naturally
                </h3>
                <p className="text-[14px] font-normal text-[#555358] leading-[140%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  Tulip builds structured interview<br />plans and intelligently nudges<br />your team to keep the process<br />moving.
                </p>
              </div>
            </div>

            {/* Step 3 Box Component */}
            <div className="flex items-center" style={{ width: '352px', height: '140px', gap: '20px' }}>
              <img 
                src="/images/step-number-3.svg" 
                alt="3" 
                className="object-contain flex-shrink-0" 
                style={{ width: '76px', height: '128px' }} 
              />
              <div className="flex flex-col justify-center" style={{ width: '245px' }}>
                <h3 className="text-[20px] font-semibold text-[#29282A] mb-2 leading-[120%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  Make Decisions with<br />Confidence
                </h3>
                <p className="text-[14px] font-normal text-[#555358] leading-[140%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  Candidate feedback is organized,<br />structured, and summarized so<br />you can trust your signals, not<br />your gut alone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= LOWER CONTAINER BLOCK ================= */}
        <div 
          className="flex items-center justify-between"
          style={{ width: '1064px', height: '428px', marginTop: '32px' }}
        >
          {/* Why It Works Left Side Descriptive Box Wrapper */}
          <div 
            className="flex flex-col justify-center"
            style={{ width: '522px', height: '94px', gap: '16px' }}
          >
            <div className="relative inline-block w-full">
              <h2 
                className="text-[40px] font-medium text-[#29282A] relative inline-block"
                style={{ height: '40px', lineHeight: '100%', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
              >
                Why It Works
                
                {/* Accent SVG Space: Sparkle graphic vector at top-right of 'Works' */}
                <img 
                  src="/images/why-works-sparkle.svg" 
                  alt="" 
                  className="absolute pointer-events-none object-contain"
                  style={{
                    width: '36.18px',
                    height: '40px',
                    top: '-20px',
                    right: '-42px'
                  }}
                />
              </h2>
            </div>

            <p 
              className="text-[16px] font-normal text-[#555358] leading-[140%]"
              style={{ width: '522px', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
            >
              Technology helps you move fast. Human judgment ensures you get it right. Tulip brings both together in one clean, powerful platform.
            </p>
          </div>

          {/* Right Side Complex Radial Hub Image Illustration Asset */}
          <div style={{ width: '428px', height: '428px' }}>
            <img 
              src="/images/why-works-radial-hub.svg" 
              alt="Why Tulip Works Platform Interface Illustration" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
