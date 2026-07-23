import React, { useState } from 'react';

export default function FooterSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  return (
    <section className="relative w-full max-w-[1440px] bg-transparent flex flex-col items-center mx-auto mt-20 lg:mt-[120px] px-6 lg:px-0" style={{ minHeight: '1050px', paddingBottom: '42px', overflow: 'visible' }}>
      <img 
        src="/images/footer-left-ellipse.svg" 
        alt="" 
        className="absolute pointer-events-none z-0 hidden lg:block"
        style={{
          width: '277px',
          height: '735px',
          top: '410px',
          left: '0px',
        }}
      />

      <div 
        className="relative flex flex-col items-center z-10 flex-shrink-0 w-full lg:w-[1104px]"
        style={{ gap: '16px' }}
      >
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

        <h2 
          className="text-[32px] lg:text-[40px] font-semibold text-[#29282A] text-center w-full lg:w-[1104px] h-auto lg:h-[40px]"
          style={{ lineHeight: '100%', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
        >
          Our 5 <span className="relative inline-block">
            Principles
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

      <div 
        className="relative flex flex-col lg:flex-row items-start z-10 flex-shrink-0 w-full lg:w-[1064px] mt-12 lg:mt-[64px] gap-10 lg:gap-[40px]"
      >
        <div className="flex flex-col flex-1 h-auto lg:h-[153px]" style={{ gap: '16px' }}>
          <img src="/images/value-icon-human.svg" alt="" className="w-[59px] h-[40px] object-contain self-start" />
          <h3 className="text-[20px] font-semibold text-[#29282A]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>Human-first</h3>
          <p className="text-[16px] font-normal text-[#555358] leading-[120%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
            We prioritize real people, not just data<br className="hidden lg:block" />
            points, in every product decision.
          </p>
        </div>

        <div className="flex flex-col flex-1 h-auto lg:h-[153px]" style={{ gap: '16px' }}>
          <img src="/images/value-icon-speed.svg" alt="" className="w-[22px] h-[40px] object-contain self-start" />
          <h3 className="text-[20px] font-semibold text-[#29282A]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>Speed with purpose</h3>
          <p className="text-[16px] font-normal text-[#555358] leading-[120%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
            Tulip helps teams move quickly, while<br className="hidden lg:block" />
            staying aligned and intentional.
          </p>
        </div>

        <div className="flex flex-col flex-1 h-auto lg:h-[153px]" style={{ gap: '16px' }}>
          <img src="/images/value-icon-simplicity.svg" alt="" className="w-[25px] h-[40px] object-contain self-start" />
          <h3 className="text-[20px] font-semibold text-[#29282A]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>Simplicity that scales</h3>
          <p className="text-[16px] font-normal text-[#555358] leading-[120%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
            We build tools that feel light and intuitive,<br className="hidden lg:block" />
            even as your organization grows.
          </p>
        </div>
      </div>

      <div 
        className="relative flex flex-col lg:flex-row items-start z-10 flex-shrink-0 w-full lg:w-[1064px] mt-10 lg:mt-[40px] gap-10 lg:gap-[40px]"
      >
        <div className="flex flex-col style-grid w-full lg:w-[512px]" style={{ gap: '16px' }}>
          <img src="/images/value-icon-bias.svg" alt="" className="w-[50px] h-[40px] object-contain self-start" />
          <h3 className="text-[20px] font-semibold text-[#29282A]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>Bias-aware by design</h3>
          <p className="text-[16px] font-normal text-[#555358] leading-[120%] w-full lg:w-[512px]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
            Structured, inclusive processes aren't a feature, they're our<br className="hidden lg:block" />
            foundation.
          </p>
        </div>

        <div className="flex flex-col style-grid w-full lg:w-[512px]" style={{ gap: '16px' }}>
          <img src="/images/value-icon-partnership.svg" alt="" className="w-[43px] h-[40px] object-contain self-start" />
          <h3 className="text-[20px] font-semibold text-[#29282A]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>Built in partnership</h3>
          <p className="text-[16px] font-normal text-[#555358] leading-[120%] w-full lg:w-[512px]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
            We shape our roadmap through direct conversations with the teams<br className="hidden lg:block" />
            who use Tulip every day.
          </p>
        </div>
      </div>

      <div 
        className="relative bg-[#F07167] rounded-[24px] flex flex-col lg:flex-row items-center justify-between overflow-hidden z-10 flex-shrink-0 w-full lg:w-[846px] mt-16 lg:mt-[79px]"
        style={{ padding: '24px 23px' }}
      >
        <img 
          src="/images/early-access-inner-ellipse.svg" 
          alt="" 
          className="absolute right-0 bottom-0 pointer-events-none z-0 object-contain opacity-[0.08]"
          style={{ width: '420px', height: '420px' }}
        />

        <div className="flex flex-col justify-between z-10 w-full lg:w-[390px] mb-8 lg:mb-0 text-center lg:text-left items-center lg:items-start" style={{ gap: '16px' }}>
          <h3 className="text-[28px] lg:text-[32px] font-medium text-white leading-[120%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
            We're building something different. Want in?
          </h3>
          <p className="text-[14px] font-normal text-white leading-[140%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
            Tulip is currently in early access with a small group<br className="hidden lg:block" />
            of forward-thinking teams. If you're ready to rethink<br className="hidden lg:block" />
            hiring — with speed, clarity, and humanity — we'd<br className="hidden lg:block" />
            love to hear from you.
          </p>
        </div>

        <form className="flex flex-col justify-between z-10 w-full lg:w-[390px] h-auto lg:h-[252px] gap-4 lg:gap-0" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-2 lg:gap-[8px]">
            <div className="relative w-full sm:w-[191px] h-[40px]">
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

            <div className="relative w-full sm:w-[191px] h-[40px]">
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

          <div className="flex flex-col sm:flex-row justify-between w-full relative gap-4 sm:gap-2 lg:gap-[8px]">
            <div className="relative w-full sm:w-[191px] h-[40px]">
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
              className="w-full sm:w-[191px] h-[40px] rounded-[80px] px-[16px] py-[12px] text-xs bg-white text-[#29282A] placeholder-[#29282A] border-none outline-none font-medium"
              style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
            />
          </div>

          <textarea 
            placeholder="Message" 
            rows={2}
            className="w-full lg:w-[390px] h-[80px] rounded-[12px] px-[16px] py-[12px] text-xs bg-white text-[#29282A] placeholder-[#29282A] border-none outline-none resize-none font-medium"
            style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
          />

          <button 
            type="submit" 
            className="w-full lg:w-[390px] h-[40px] rounded-[40px] bg-[#29282A] text-white text-xs font-semibold flex items-center justify-center transition-all hover:bg-[#1f1e20]"
            style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
          >
            Submit
          </button>
        </form>
      </div>

      <div 
        className="relative z-10 flex-shrink-0 w-full lg:w-[1280px] mt-16 lg:mt-[72px]"
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
