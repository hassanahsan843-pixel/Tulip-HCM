import React from 'react';

export default function Capabilities() {
  return (
    // mt-[120px] forces the large gap between the first page and this page
    <section className="relative w-[1440px] h-[720px] bg-transparent mx-auto mt-[250px]" style={{ overflow: 'visible' }}>
      
      {/* 1. Large Coral Ellipse Vector (Brought back locally so it moves with the section) */}
      <img 
        src="/images/capabilities-right-ellipse.svg" 
        alt="" 
        className="absolute pointer-events-none object-contain"
        style={{
          width: '922px',
          height: '922px',
          top: '-460px',        // Bleeds well upward into the Hero section
          left: '850px',       // Shifted left so ellipse is more visible within the viewport
          opacity: 1.06,
          zIndex: 0
        }}
      />

      {/* 2. Top Integrated Heading Container */}
      <div 
        className="absolute flex flex-col items-center z-10"
        style={{
          width: '846px',
          height: '198px',
          top: '0px', 
          left: '297px',
          gap: '16px'
        }}
      >
        {/* Key Capabilities Pills Badge */}
        <div 
          className="flex items-center justify-center font-semibold text-xs text-[#F87315]"
          style={{
            width: '148px',
            height: '32px',
            borderRadius: '80px',
            border: '1px solid #F87315',
            backgroundColor: 'rgba(248, 115, 21, 0.12)' 
          }}
        >
          Key Capabilities
        </div>

        {/* Main Section Header Wrapper */}
        <div className="relative w-full text-center">
          {/* Accent SVG Space: Directly above 'People' */}
          <img 
            src="/images/people-top-accent.svg" 
            alt="" 
            className="absolute pointer-events-none object-contain"
            style={{
              width: '32px',
              height: '24px',
              top: '-10px',       // Sits just above 'People' on the second line of the heading
              left: '638px'      // Horizontally aligned above the word 'People'
            }}
          />

          <h2 
            className="text-[40px] font-normal text-[#29282A]"
            style={{ 
              width: '846px', 
              height: '96px', 
              lineHeight: '120%', 
              fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' 
            }}
          >
            An ATS That <span className="font-bold">Supports</span> How <span className="font-bold">People</span> Actually <br />
            Make <span className="relative inline-block font-bold">
              Decisions.
              
              {/* Accent SVG: Directly beneath 'Decisions' */}
              <img 
                src="/images/decisions-bottom-accent.svg" 
                alt="" 
                className="absolute pointer-events-none object-contain"
                style={{
                  width: '130px',
                  height: '14px',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              />
            </span>
          </h2>
        </div>

        {/* Section Sub-Description Paragraph Text */}
        <p 
          className="text-[16px] font-normal text-[#555358] text-center w-full"
          style={{ lineHeight: '140%', fontFamily: 'Nunito, sans-serif' }}
        >
          Tulip blends AI and human intelligence to streamline the hiring process, without sacrificing clarity or control. From job creation to final offer, we help teams move faster, make better decisions, and stay aligned along the way.
        </p>
      </div>

      {/* 3. Whole Lower Grid Box containing all 6 Subboxes */}
      <div 
        className="absolute grid grid-cols-3 z-10"
        style={{
          width: '1064px',
          height: '416px',
          top: '240px', 
          left: '188px',
          gap: '16px' 
        }}
      >
        {/* Card 1 */}
        <div className="flex flex-col rounded-[16px] p-[20px] justify-between" style={{ width: '344px', height: '200px', backgroundColor: '#F5F5F5', gap: '24px' }}>
          <img src="/images/icon-role-creation.svg" alt="" className="w-6 h-6 object-contain" />
          <div className="flex flex-col justify-between" style={{ width: '304px', height: '112px' }}>
            <h3 className="text-base font-bold text-[#29282A]">Role Creation with Context</h3>
            <p className="text-xs font-medium text-[#555358] leading-[140%]">Use guided, AI-enhanced templates to define roles clearly and align teams from the start.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col rounded-[16px] p-[20px] justify-between" style={{ width: '344px', height: '200px', backgroundColor: '#8CD7793D', gap: '24px' }}>
          <img src="/images/icon-smart-collab.svg" alt="" className="w-6 h-6 object-contain" />
          <div className="flex flex-col justify-between" style={{ width: '304px', height: '112px' }}>
            <h3 className="text-base font-bold text-[#29282A]">Smart Collaboration</h3>
            <p className="text-xs font-medium text-[#555358] leading-[140%]">Tulip's technology keeps your hiring team in sync with intelligent reminders, context-rich candidate views, and automated nudges.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col rounded-[16px] p-[20px] justify-between" style={{ width: '344px', height: '200px', backgroundColor: '#F5F5F5', gap: '24px' }}>
          <img src="/images/icon-scheduling.svg" alt="" className="w-6 h-6 object-contain" />
          <div className="flex flex-col justify-between" style={{ width: '304px', height: '112px' }}>
            <h3 className="text-base font-bold text-[#29282A]">Frictionless Scheduling</h3>
            <p className="text-xs font-medium text-[#555358] leading-[140%]">Our system learns from your workflow to reduce bottlenecks and eliminate repetitive coordination.</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col rounded-[16px] p-[20px] justify-between" style={{ width: '341.33px', height: '200px', backgroundColor: '#F5F5F5', gap: '24px' }}>
          <img src="/images/icon-bias-aware.svg" alt="" className="w-6 h-6 object-contain" />
          <div className="flex flex-col justify-between" style={{ width: '304px', height: '112px' }}>
            <h3 className="text-base font-bold text-[#29282A]">Structured, Bias-Aware Feedback</h3>
            <p className="text-xs font-medium text-[#555358] leading-[140%]">Collect real-time input with smart scorecards that surface insights and reduce groupthink.</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col rounded-[16px] p-[20px] justify-between" style={{ width: '341.33px', height: '200px', backgroundColor: '#F5F5F5', gap: '24px' }}>
          <img src="/images/icon-analytics.svg" alt="" className="w-6 h-6 object-contain" />
          <div className="flex flex-col justify-between" style={{ width: '304px', height: '112px' }}>
            <h3 className="text-base font-bold text-[#29282A]">Actionable Analytics</h3>
            <p className="text-xs font-medium text-[#555358] leading-[140%]">Tulip surfaces key signals, not noise, so you can see what's working, spot bottlenecks, and improve continuously.</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col rounded-[16px] p-[20px] justify-between" style={{ width: '341.33px', height: '200px', backgroundColor: '#F5F5F5', gap: '24px' }}>
          <img src="/images/icon-interviewing.svg" alt="" className="w-6 h-6 object-contain" />
          <div className="flex flex-col justify-between" style={{ width: '304px', height: '112px' }}>
            <h3 className="text-base font-bold text-[#29282A]">Smart Interviewing & Feedback</h3>
            <p className="text-xs font-medium text-[#555358] leading-[140%]">Guide structured interviews with AI-built plans and capture consistent feedback through intelligent scorecards that surface key insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
}