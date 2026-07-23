import React from 'react';

const CARDS: {
  label: string;
  descJsx: React.ReactNode;
  icon: string;
  bg: string;
  hover: string;
  ellipse: string;
}[] = [
  {
    label: 'Role Creation with Context',
    descJsx: <>Use guided, AI-enhanced templates to<br className="hidden lg:block" />define roles clearly and align teams from<br className="hidden lg:block" />the start.</>,
    icon: '/images/icon-role-creation.svg',
    bg: '#F5F5F5',
    hover: '#E8E8E8',
    ellipse: '/images/Roleellipse.svg',
  },
  {
    label: 'Smart Collaboration',
    descJsx: <>Tulip's technology keeps your hiring team<br className="hidden lg:block" />in sync with intelligent reminders,<br className="hidden lg:block" />context-rich candidate views, and<br className="hidden lg:block" />automated nudges.</>,
    icon: '/images/icon-smart-collab.svg',
    bg: '#8CD7793D',
    hover: '#8CD77966',
    ellipse: '/images/Smartellipse.svg',
  },
  {
    label: 'Frictionless Scheduling',
    descJsx: <>Our system learns from your workflow to<br className="hidden lg:block" />reduce bottlenecks and eliminate<br className="hidden lg:block" />repetitive coordination.</>,
    icon: '/images/icon-scheduling.svg',
    bg: '#F5F5F5',
    hover: '#E8E8E8',
    ellipse: '/images/Frictionlessvector.svg',
  },
  {
    label: 'Structured, Bias-Aware Feedback',
    descJsx: <>Collect real-time input with smart<br className="hidden lg:block" />scorecards that surface insights and<br className="hidden lg:block" />reduce groupthink.</>,
    icon: '/images/icon-bias-aware.svg',
    bg: '#F5F5F5',
    hover: '#E8E8E8',
    ellipse: '/images/Structuredellipse.svg',
  },
  {
    label: 'Actionable Analytics',
    descJsx: <>Tulip surfaces key signals, not noise, so<br className="hidden lg:block" />you can see what's working, spot<br className="hidden lg:block" />bottlenecks, and improve continuously.</>,
    icon: '/images/icon-analytics.svg',
    bg: '#F5F5F5',
    hover: '#E8E8E8',
    ellipse: '/images/Actionableellipse.svg',
  },
  {
    label: 'Smart Interviewing & Feedback',
    descJsx: <>Guide structured interviews with AI-built<br className="hidden lg:block" />plans and capture consistent feedback<br className="hidden lg:block" />through intelligent scorecards that<br className="hidden lg:block" />surface key insights.</>,
    icon: '/images/icon-interviewing.svg',
    bg: '#F5F5F5',
    hover: '#E8E8E8',
    ellipse: '/images/SmartInterviewVector.svg',
  },
];

export default function Capabilities() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  return (
    <section className="relative w-full max-w-[1440px] bg-transparent flex flex-col items-center mx-auto mt-20 lg:mt-[250px] px-6 lg:px-0" style={{ minHeight: '720px', overflow: 'visible' }}>
      <img
        src="/images/capabilities-right-ellipse.svg"
        alt=""
        className="absolute pointer-events-none hidden lg:block"
        style={{
          width: '288px',    // natural SVG width — arc fills this space
          height: '922px',   // natural SVG height — spans full circle height
          top: '-480px',     // bleeds upward into Hero page by ~460px
          right: '0px',      // flush to the right edge of the section
          zIndex: 0,
        }}
      />

      <div
        className="relative flex flex-col items-center z-10 flex-shrink-0 w-full lg:w-[846px]"
        style={{ gap: '16px' }}
      >
        <div
          style={{
            width: '148px',
            height: '32px',
            borderRadius: '80px',
            border: '1px solid #F87315',
            backgroundColor: '#F873151F',
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
              color: '#F87315',
              whiteSpace: 'nowrap',
            }}
          >
            Key Capabilities
          </span>
        </div>

        <div className="relative w-full text-center">
          <img
            src="/images/people-top-accent.svg"
            alt=""
            className="absolute pointer-events-none object-contain hidden lg:block"
            style={{ width: '32px', height: '24px', top: '-10px', left: '638px' }}
          />

          <h2
            className="text-[32px] lg:text-[40px] font-normal text-[#29282A] w-full lg:w-[846px] h-auto lg:h-[96px]"
            style={{
              lineHeight: '120%',
              fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif',
            }}
          >
            An ATS That <span className="font-bold">Supports</span> How{' '}
            <span className="font-bold">People</span> Actually <br className="hidden lg:block" />
            Make{' '}
            <span className="relative inline-block font-bold">
              Decisions.
              <img
                src="/images/decisions-bottom-accent.svg"
                alt=""
                className="absolute pointer-events-none object-contain"
                style={{
                  width: '220px',
                  height: '28px',
                  bottom: '-14px',
                  left: '46%',
                  transform: 'translateX(-50%)',
                }}
              />
            </span>
          </h2>
        </div>

        <p
          className="text-[16px] font-normal text-[#555358] text-center w-full"
          style={{ lineHeight: '140%', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
        >
          Tulip blends AI and human intelligence to streamline the hiring process, without sacrificing clarity or control. From<br className="hidden lg:block" />
          job creation to final offer, we help teams move faster, make better decisions, and stay aligned along the way.
        </p>
      </div>

      <div
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-10 flex-shrink-0 w-full lg:w-[1064px]"
        style={{ marginTop: '42px', gap: '16px' }}
      >
        {CARDS.map((card, i) => (
          <div
            key={i}
            className="flex flex-col rounded-[16px] p-[20px] justify-between cursor-pointer w-full h-auto min-h-[200px] lg:h-[200px]"
            style={{
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: hoveredCard === i ? card.hover : card.bg,
              gap: '24px',
              transition: 'background-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease',
              boxShadow: hoveredCard === i ? '0 8px 24px rgba(0,0,0,0.10)' : '0 0px 0px rgba(0,0,0,0)',
              transform: hoveredCard === i ? 'translateY(-3px)' : 'translateY(0px)',
            }}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src={card.ellipse}
              alt=""
              className="absolute pointer-events-none"
              style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
              }}
            />

            <img src={card.icon} alt="" className="w-6 h-6 object-contain" style={{ position: 'relative', zIndex: 1 }} />

            <div className="flex flex-col justify-between w-full lg:w-[304px] h-auto lg:h-[112px] relative z-10">
              <h3 className="text-base font-bold text-[#29282A]">{card.label}</h3>
              <p className="text-xs font-medium text-[#555358] leading-[140%]">{card.descJsx}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
