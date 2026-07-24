import React, { useState } from 'react';

export default function FooterSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  return (
    <section className="relative w-full max-w-[1700px] bg-transparent flex flex-col items-start lg:items-center mx-auto mt-20 lg:mt-[120px] px-6 lg:px-0" style={{ minHeight: '1050px', paddingBottom: '42px', overflow: 'visible' }}>
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
          className="hidden lg:flex items-center justify-center font-medium text-xs text-[#47A3FF]"
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
          className="text-[32px] lg:text-[40px] font-semibold text-[#29282A] text-left lg:text-center w-full lg:w-[1104px] h-auto lg:h-[40px]"
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

      <div className="max-w-[1800px] mx-auto w-full z-10 mt-16 lg:mt-[79px]">
        <section className="flex flex-row items-center justify-center w-full max-w-4xl mx-auto">
          <div className="bg-[#F07167] w-full md:rounded-3xl relative overflow-hidden">
            <img 
              src="/images/early-access-inner-ellipse.svg" 
              alt="" 
              className="absolute right-0 bottom-0 pointer-events-none z-0 object-contain opacity-[0.08]"
              style={{ width: '420px', height: '420px' }}
            />
            <div className="grid md:grid-cols-2 gap-8 p-6 items-start relative z-10">
              <div className="flex flex-col gap-4 basis-1/2 text-left">
                <h1 className="text-white text-[32px] font-medium leading-[120%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  We're building something different. Want in?
                </h1>
                <p className="text-white text-[14px] leading-[140%]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>
                  Tulip is currently in early access with a small group of forward-thinking teams. If you're ready to rethink hiring — with speed, clarity, and humanity — we'd love to hear from you.
                </p>
              </div>
              <div className="flex flex-col gap-2 basis-1/2">
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  <div className="relative w-full">
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-3 py-2 bg-white rounded-[80px] text-[#29282A] placeholder-transparent focus:outline-none text-xs font-medium" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }} />
                    {!name && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-medium pointer-events-none" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>Name<span className="text-[#29282A] ml-[1px]">*</span></span>}
                  </div>
                  <div className="relative w-full">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2 bg-white rounded-[80px] text-[#29282A] placeholder-transparent focus:outline-none text-xs font-medium" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }} />
                    {!email && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-medium pointer-events-none" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>Email<span className="text-[#29282A] ml-[1px]">*</span></span>}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div className="relative w-full">
                    <select required value={role} onChange={(e) => setRole(e.target.value)} className="w-full px-3 py-2 rounded-[80px] focus:outline-none bg-white appearance-none text-[#29282A] text-xs font-medium" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif', backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.75rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}>
                      <option value="" disabled hidden></option>
                      <option value="hr-manager">HR Manager</option>
                      <option value="recruiter">Recruiter</option>
                      <option value="founder">Founder</option>
                      <option value="ceo">CEO</option>
                      <option value="other">Other</option>
                    </select>
                    {!role && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-medium pointer-events-none" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>Role<span className="text-[#29282A] ml-[1px]">*</span></span>}
                  </div>
                  <div className="relative w-full">
                    <input type="text" placeholder="Company" className="w-full px-3 py-2 bg-white rounded-[80px] text-[#29282A] focus:outline-none text-xs font-medium placeholder-[#29282A]" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }} />
                  </div>
                </div>
                <div>
                  <textarea placeholder="Message" rows={3} className="w-full px-4 py-3 rounded-xl bg-white focus:outline-none placeholder-[#29282A] resize-none text-xs font-medium" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}></textarea>
                </div>
                <button type="submit" className="mt-2 w-full bg-[#29282A] hover:bg-[#1f1e20] text-white text-xs font-semibold py-3 rounded-[40px] transition-all" style={{ fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}>Submit</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative z-10 flex flex-col w-full lg:w-[1280px] mt-16 lg:mt-[72px] px-2 md:px-0" style={{ gap: '16px' }}>
        
        {/* Upper section */}
        <div className="flex flex-row items-center justify-between w-full h-auto lg:h-[78px] gap-2 lg:gap-0 mt-4 lg:mt-6">
          <img 
            src="/images/tuliplogo.svg" 
            alt="Tulip Logo" 
            className="w-[80px] sm:w-[101.68px] h-auto lg:h-[32px] object-contain"
          />
          
          <img 
            src="/images/logoframe.svg" 
            alt="Social Logos" 
            className="w-[50px] sm:w-[64px] h-auto lg:h-[24px] object-contain"
          />

          <a 
            href="mailto:hello@tulip.com"
            className="text-[12px] sm:text-[16px] font-semibold text-[#28292A] whitespace-nowrap"
            style={{ fontFamily: 'Nunito, sans-serif', lineHeight: '120%' }}
          >
            hello@tulip.com
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-full h-0 border-t-2 border-[#E5E5E5]"></div>

        {/* Bottom Section */}
        <div className="flex flex-row items-center justify-between w-full h-auto lg:h-[14px] gap-2 lg:gap-0">
          <p 
            className="text-[10px] sm:text-[12px] font-semibold text-[#808080] text-left"
            style={{ fontFamily: 'Nunito, sans-serif', lineHeight: '120%' }}
          >
            TulipATS Powered By HCM Strategy 2025
          </p>

          <p 
            className="text-[10px] sm:text-[12px] font-semibold text-[#808080] text-right"
            style={{ fontFamily: 'Nunito, sans-serif', lineHeight: '120%' }}
          >
            All Rights Reserved
          </p>
        </div>

      </div>

    </section>
  );
}
