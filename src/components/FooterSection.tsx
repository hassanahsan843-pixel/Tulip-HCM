import React, { useState } from 'react';

export default function FooterSection() {
  // State management to hide/show the custom placeholder text when user types
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  return (
    // Outer section wrapper handling the final layout area
    <section className="relative w-[1440px] bg-transparent mx-auto mt-[120px]" style={{ height: '1050px', overflow: 'visible' }}>
      
      {/* 1. Left Edge Coral Arc — SVG is pre-cropped to 277×735, arc already at left edge */}
      <img 
        src="/images/footer-left-ellipse.svg" 
        alt="" 
        className="absolute pointer-events-none z-0"
        style={{
          width: '277px',   // exact SVG natural width — arc fills this space
          height: '735px',  // exact SVG natural height
          top: '410px',     // vertically centers the 735px arc on the form card (558+150-735/2)
          left: '0px',      // flush left — circle center at cx=-184 inside SVG handles the bleed
        }}
      />

      {/* 2. Upper Header Box: Our Values & 5 Principles (Width: 1104px, Height: 88px) */}
      <div 
        className="absolute flex flex-col items-center z-10"
        style={{
          width: '1104px',
          height: '88px',
          top: '0px',
          left: '168px',
          gap: '16px'
        }}
      >
        {/* Our Values Badge Pill */}
        <div 
          className="flex items-center justify-center font-medium text-xs text-[#47A3FF]"
          style={{
            width: '112px',
            height: '32px',
            borderRadius: '80px',
            border: '1px solid #47A3FF',
            backgroundColor: 'rgba(71, 163, 255, 0.12)' 
          }}
        >
          Our Values
        </div>

        {/* Main Section Header Text */}
        <h2 
          className="text-[40px] font-medium text-[#29282A] text-center"
          style={{ width: '1104px', height: '40px', lineHeight: '100%', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
        >
          Our 5 <span className="relative inline-block">
            Principles
            {/* Accent SVG Space: Beneath 'Principles', from 'r' to 'p' */}
            <img 
              src="/images/Principlevector.svg" 
              alt="" 
              className="absolute pointer-events-none object-contain"
              style={{
                width: '90px',
                height: '16px',
                bottom: '-14px',
                left: '31px'
              }}
            />
          </span> of Core Value
        </h2>
      </div>

      {/* 3. Row 1 Principles Container (Human-first, Speed, Simplicity) */}
      <div 
        className="absolute flex items-start z-10"
        style={{
          width: '1064px',
          height: '153px',
          top: '152px',         
          left: '188px',
          gap: '40px'
        }}
      >
        {/* Human-first Box */}
        <div className="flex flex-col flex-1 h-[153px]" style={{ gap: '16px' }}>
          <img src="/images/value-icon-human.svg" alt="" className="w-[59px] h-[40px] object-contain self-start" />
          <h3 className="text-[20px] font-semibold text-[#29282A]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>Human-first</h3>
          <p className="text-[16px] font-normal text-[#555358] leading-[120%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
            We prioritize real people, not just data<br />
            points, in every product decision.
          </p>
        </div>

        {/* Speed with purpose Box */}
        <div className="flex flex-col flex-1 h-[153px]" style={{ gap: '16px' }}>
          <img src="/images/value-icon-speed.svg" alt="" className="w-[22px] h-[40px] object-contain self-start" />
          <h3 className="text-[20px] font-semibold text-[#29282A]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>Speed with purpose</h3>
          <p className="text-[16px] font-normal text-[#555358] leading-[120%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
            Tulip helps teams move quickly, while<br />
            staying aligned and intentional.
          </p>
        </div>

        {/* Simplicity that scales Box */}
        <div className="flex flex-col flex-1 h-[153px]" style={{ gap: '16px' }}>
          <img src="/images/value-icon-simplicity.svg" alt="" className="w-[25px] h-[40px] object-contain self-start" />
          <h3 className="text-[20px] font-semibold text-[#29282A]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>Simplicity that scales</h3>
          <p className="text-[16px] font-normal text-[#555358] leading-[120%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
            We build tools that feel light and intuitive,<br />
            even as your organization grows.
          </p>
        </div>
      </div>

      {/* 4. Row 2 Principles Container (Bias-aware, Built in partnership) */}
      <div 
        className="absolute flex items-start z-10"
        style={{
          width: '1064px',
          height: '134px',
          top: '345px',         
          left: '188px',
          gap: '40px'
        }}
      >
        {/* Bias-aware by design Box */}
        <div className="flex flex-col style-grid" style={{ width: '512px', height: '134px', gap: '16px' }}>
          <img src="/images/value-icon-bias.svg" alt="" className="w-[50px] h-[40px] object-contain self-start" />
          <h3 className="text-[20px] font-semibold text-[#29282A]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>Bias-aware by design</h3>
          <p className="text-[16px] font-normal text-[#555358] leading-[120%]" style={{ width: '512px', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
            Structured, inclusive processes aren't a feature, they're our<br />
            foundation.
          </p>
        </div>

        {/* Built in partnership Box */}
        <div className="flex flex-col style-grid" style={{ width: '512px', height: '134px', gap: '16px' }}>
          <img src="/images/value-icon-partnership.svg" alt="" className="w-[43px] h-[40px] object-contain self-start" />
          <h3 className="text-[20px] font-semibold text-[#29282A]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>Built in partnership</h3>
          <p className="text-[16px] font-normal text-[#555358] leading-[120%]" style={{ width: '512px', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
            We shape our roadmap through direct conversations with the teams<br />
            who use Tulip every day.
          </p>
        </div>
      </div>

      {/* 5. Early Access Form Card Container Block */}
      <div 
        className="absolute bg-[#F07167] rounded-[24px] flex items-center justify-between overflow-hidden z-10"
        style={{
          width: '846px',
          height: '300px',
          top: '558px',         
          left: '297px',
          padding: '24px 23px'
        }}
      >
        {/* Soft Decorative Vector Ellipse Layer inside the early access block */}
        <img 
          src="/images/early-access-inner-ellipse.svg" 
          alt="" 
          className="absolute right-0 bottom-0 pointer-events-none z-0 object-contain opacity-[0.08]"
          style={{ width: '420px', height: '420px' }}
        />

        {/* Form Card Left Side: Content Text */}
        <div className="flex flex-col justify-between z-10" style={{ width: '390px', height: '168px', gap: '16px' }}>
          <h3 className="text-[32px] font-medium text-white leading-[120%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
            We're building something different. Want in?
          </h3>
          <p className="text-[14px] font-normal text-white leading-[140%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
            Tulip is currently in early access with a small group<br />
            of forward-thinking teams. If you're ready to rethink<br />
            hiring — with speed, clarity, and humanity — we'd<br />
            love to hear from you.
          </p>
        </div>

        {/* Form Card Right Side: Input Fields Group Box */}
        <form className="flex flex-col justify-between z-10" style={{ width: '390px', height: '252px' }} onSubmit={(e) => e.preventDefault()}>
          
          {/* Two Fields Grid (Name + Email) */}
          <div className="flex justify-between w-full" style={{ gap: '8px' }}>
            
            {/* Name Input with Red Asterisk */}
            <div className="relative w-[191px] h-[40px]">
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full h-full rounded-[80px] px-[16px] py-[12px] text-xs bg-white text-[#29282A] border-none outline-none font-medium z-10 relative"
                style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
              />
              {!name && (
                <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-xs font-medium text-[#29282A] pointer-events-none z-20" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  Name<span className="text-[#F07167] ml-[1px]">*</span>
                </div>
              )}
            </div>

            {/* Email Input with Red Asterisk */}
            <div className="relative w-[191px] h-[40px]">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-full rounded-[80px] px-[16px] py-[12px] text-xs bg-white text-[#29282A] border-none outline-none font-medium z-10 relative"
                style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
              />
              {!email && (
                <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-xs font-medium text-[#29282A] pointer-events-none z-20" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  Email<span className="text-[#F07167] ml-[1px]">*</span>
                </div>
              )}
            </div>

          </div>

          {/* Two Fields Grid (Role Selector Dropdown + Company) */}
          <div className="flex justify-between w-full relative" style={{ gap: '8px' }}>
            
            {/* Role Custom Dropdown with Red Asterisk */}
            <div className="relative w-[191px] h-[40px]">
              <select 
                required 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full h-full rounded-[80px] pl-[16px] pr-[32px] text-xs bg-white text-[#29282A] appearance-none border-none outline-none font-medium z-10 relative"
                style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
              >
                <option value="" disabled hidden></option>
                <option value="recruiter">Recruiter / HR</option>
                <option value="manager">Hiring Manager</option>
                <option value="executive">Executive</option>
              </select>
              {!role && (
                <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-xs font-medium text-[#29282A] pointer-events-none z-20" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  Role<span className="text-[#F07167] ml-[1px]">*</span>
                </div>
              )}
              <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 flex items-center justify-center z-30">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="#29282A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <input 
              type="text" 
              placeholder="Company" 
              className="w-[191px] h-[40px] rounded-[80px] px-[16px] py-[12px] text-xs bg-white text-[#29282A] placeholder-[#29282A] border-none outline-none font-medium"
              style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
            />
          </div>

          {/* Message Textarea Row */}
          <textarea 
            placeholder="Message" 
            rows={2}
            className="w-[390px] h-[80px] rounded-[12px] px-[16px] py-[12px] text-xs bg-white text-[#29282A] placeholder-[#29282A] border-none outline-none resize-none font-medium"
            style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
          />

          {/* Action Submission Trigger Button */}
          <button 
            type="submit" 
            className="w-[390px] h-[40px] rounded-[40px] bg-[#29282A] text-white text-xs font-semibold flex items-center justify-center transition-all hover:bg-[#1f1e20]"
            style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* 6. Single Unified SVG Footer Asset Container */}
      <div 
        className="absolute z-10"
        style={{
          width: '1280px',
          height: '78px',
          top: '930px',        
          left: '80px'
        }}
      >
        <img 
          src="/images/custom-landing-footer.svg" 
          alt="Tulip ATS Footer Network Layout" 
          className="w-full h-full object-contain"
        />
      </div>

    </section>
  );
}
