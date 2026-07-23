import React from 'react';

export default function HowItWorks() {
  return (
    <section className="relative w-full max-w-[1440px] bg-transparent mx-auto mt-[120px] flex justify-center px-6 lg:px-0" style={{ minHeight: '784px' }}>
      <div 
        className="relative flex flex-col flex-shrink-0 w-full lg:w-[1104px]"
        style={{ gap: '64px' }}
      >
        <div 
          className="relative flex flex-col items-center w-full lg:w-[1104px] h-auto lg:h-[292px]"
          style={{ gap: '24px' }}
        >
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

          <div className="relative w-full text-center mt-2">
            <h2 
              className="text-[32px] lg:text-[40px] font-medium text-[#29282A] tracking-normal w-full lg:w-[1104px] h-auto lg:h-[40px] mx-auto"
              style={{ lineHeight: '100%', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
            >
              From Job Req To Offer,{" "}
              <span className="font-semibold relative inline-block">
                Without
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

          <div 
            className="flex flex-col lg:flex-row items-center lg:items-start w-full lg:w-[1104px] mt-8 lg:mt-8 h-auto lg:h-[140px] gap-12 lg:gap-6"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left w-full lg:w-[352px] h-auto lg:h-[140px]" style={{ gap: '20px' }}>
              <img 
                src="/images/step-number-1.svg" 
                alt="1" 
                className="object-contain flex-shrink-0" 
                style={{ width: '58px', height: '104px' }} 
              />
              <div className="flex flex-col justify-center w-full lg:w-[271px]">
                <h3 className="text-[20px] font-semibold text-[#29282A] mb-2 leading-[120%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  Create Roles with Clarity<br className="hidden lg:block" />and Context
                </h3>
                <p className="text-[14px] font-normal text-[#555358] leading-[140%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  Our AI-enhanced customizable<br className="hidden lg:block" />templates help define roles with real<br className="hidden lg:block" />substance cutting down on revisions<br className="hidden lg:block" />and rework later.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left w-full lg:w-[352px] h-auto lg:h-[140px]" style={{ gap: '20px' }}>
              <img 
                src="/images/step-number-2.svg" 
                alt="2" 
                className="object-contain flex-shrink-0" 
                style={{ width: '76px', height: '128px' }} 
              />
              <div className="flex flex-col justify-center w-full lg:w-[245px]">
                <h3 className="text-[20px] font-semibold text-[#29282A] mb-2 leading-[120%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  Run Interviews That Flow<br className="hidden lg:block" />Naturally
                </h3>
                <p className="text-[14px] font-normal text-[#555358] leading-[140%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  Tulip builds structured interview<br className="hidden lg:block" />plans and intelligently nudges<br className="hidden lg:block" />your team to keep the process<br className="hidden lg:block" />moving.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left w-full lg:w-[352px] h-auto lg:h-[140px]" style={{ gap: '20px' }}>
              <img 
                src="/images/step-number-3.svg" 
                alt="3" 
                className="object-contain flex-shrink-0" 
                style={{ width: '76px', height: '128px' }} 
              />
              <div className="flex flex-col justify-center w-full lg:w-[245px]">
                <h3 className="text-[20px] font-semibold text-[#29282A] mb-2 leading-[120%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  Make Decisions with<br className="hidden lg:block" />Confidence
                </h3>
                <p className="text-[14px] font-normal text-[#555358] leading-[140%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  Candidate feedback is organized,<br className="hidden lg:block" />structured, and summarized so<br className="hidden lg:block" />you can trust your signals, not<br className="hidden lg:block" />your gut alone.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-[1064px] h-auto lg:h-[428px] mt-8 lg:mt-[32px] gap-12 lg:gap-0 mx-auto"
        >
          <div 
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-[522px] h-auto lg:h-[94px]"
            style={{ gap: '16px' }}
          >
            <div className="relative inline-block">
              <h2 
                className="text-[32px] lg:text-[40px] font-medium text-[#29282A] relative inline-block h-auto lg:h-[40px]"
                style={{ lineHeight: '100%', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
              >
                Why It Works
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
              className="text-[16px] font-normal text-[#555358] leading-[140%] w-full lg:w-[522px]"
              style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
            >
              Technology helps you move fast. Human judgment ensures you get it right. Tulip brings both together in one clean, powerful platform.
            </p>
          </div>

          <div className="w-full max-w-[428px] lg:w-[428px] h-auto lg:h-[428px]">
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
