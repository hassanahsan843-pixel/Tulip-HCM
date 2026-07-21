import React from 'react';

// Card data — bg, hover, glow ellipse, and exact-Figma-line-break JSX descriptions
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
    descJsx: <>Use guided, AI-enhanced templates to<br />define roles clearly and align teams from<br />the start.</>,
    icon: '/images/icon-role-creation.svg',
    bg: '#F5F5F5',
    hover: '#E8E8E8',
    ellipse: '/images/Roleellipse.svg',
  },
  {
    label: 'Smart Collaboration',
    descJsx: <>Tulip's technology keeps your hiring team<br />in sync with intelligent reminders,<br />context-rich candidate views, and<br />automated nudges.</>,
    icon: '/images/icon-smart-collab.svg',
    bg: '#8CD7793D',
    hover: '#8CD77966',
    ellipse: '/images/Smartellipse.svg',
  },
  {
    label: 'Frictionless Scheduling',
    descJsx: <>Our system learns from your workflow to<br />reduce bottlenecks and eliminate<br />repetitive coordination.</>,
    icon: '/images/icon-scheduling.svg',
    bg: '#F5F5F5',
    hover: '#E8E8E8',
    ellipse: '/images/Frictionlessvector.svg',
  },
  {
    label: 'Structured, Bias-Aware Feedback',
    descJsx: <>Collect real-time input with smart<br />scorecards that surface insights and<br />reduce groupthink.</>,
    icon: '/images/icon-bias-aware.svg',
    bg: '#F5F5F5',
    hover: '#E8E8E8',
    ellipse: '/images/Structuredellipse.svg',
  },
  {
    label: 'Actionable Analytics',
    descJsx: <>Tulip surfaces key signals, not noise, so<br />you can see what's working, spot<br />bottlenecks, and improve continuously.</>,
    icon: '/images/icon-analytics.svg',
    bg: '#F5F5F5',
    hover: '#E8E8E8',
    ellipse: '/images/Actionableellipse.svg',
  },
  {
    label: 'Smart Interviewing & Feedback',
    descJsx: <>Guide structured interviews with AI-built<br />plans and capture consistent feedback<br />through intelligent scorecards that<br />surface key insights.</>,
    icon: '/images/icon-interviewing.svg',
    bg: '#F5F5F5',
    hover: '#E8E8E8',
    ellipse: '/images/SmartInterviewVector.svg',
  },
];

export default function Capabilities() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  return (
    <section className="relative w-[1440px] h-[720px] bg-transparent mx-auto mt-[250px]" style={{ overflow: 'visible' }}>

      {/* 1. Right-edge Coral Arc — SVG pre-cropped to 288×922, opacity 6% baked in */}
      <img
        src="/images/capabilities-right-ellipse.svg"
        alt=""
        className="absolute pointer-events-none"
        style={{
          width: '288px',    // natural SVG width — arc fills this space
          height: '922px',   // natural SVG height — spans full circle height
          top: '-480px',     // bleeds upward into Hero page by ~460px
          right: '0px',      // flush to the right edge of the section
          zIndex: 0,
        }}
      />

      {/* 2. Top Heading Container */}
      <div
        className="absolute flex flex-col items-center z-10"
        style={{ width: '846px', height: '198px', top: '0px', left: '297px', gap: '16px' }}
      >
        {/* Key Capabilities Badge */}
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

        {/* Main Heading Wrapper */}
        <div className="relative w-full text-center">
          {/* Accent above 'People' */}
          <img
            src="/images/people-top-accent.svg"
            alt=""
            className="absolute pointer-events-none object-contain"
            style={{ width: '32px', height: '24px', top: '-10px', left: '638px' }}
          />

          <h2
            className="text-[40px] font-normal text-[#29282A]"
            style={{
              width: '846px',
              height: '96px',
              lineHeight: '120%',
              fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif',
            }}
          >
            An ATS That <span className="font-bold">Supports</span> How{' '}
            <span className="font-bold">People</span> Actually <br />
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

        {/* Sub-description */}
        <p
          className="text-[16px] font-normal text-[#555358] text-center w-full"
          style={{ lineHeight: '140%', fontFamily: 'ES Rebond Grotesque TRIAL, sans-serif' }}
        >
          Tulip blends AI and human intelligence to streamline the hiring process, without sacrificing clarity or control. From<br />
          job creation to final offer, we help teams move faster, make better decisions, and stay aligned along the way.
        </p>
      </div>

      {/* 3. Cards Grid */}
      <div
        className="absolute grid grid-cols-3 z-10"
        style={{ width: '1064px', height: '416px', top: '240px', left: '188px', gap: '16px' }}
      >
        {CARDS.map((card, i) => (
          <div
            key={i}
            className="flex flex-col rounded-[16px] p-[20px] justify-between cursor-pointer"
            style={{
              position: 'relative',          // needed so ellipse child positions inside card
              overflow: 'hidden',            // clips the overflowing glow ellipse
              width: i < 3 ? '344px' : '341.33px',
              height: '200px',
              backgroundColor: hoveredCard === i ? card.hover : card.bg,
              gap: '24px',
              transition: 'background-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease',
              boxShadow: hoveredCard === i ? '0 8px 24px rgba(0,0,0,0.10)' : '0 0px 0px rgba(0,0,0,0)',
              transform: hoveredCard === i ? 'translateY(-3px)' : 'translateY(0px)',
            }}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Glow Ellipse — SVG already contains the blur baked in at full card size.
                 Set to 100% width/height so it maps perfectly over the card. */}
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

            {/* Icon — sits above the glow */}
            <img src={card.icon} alt="" className="w-6 h-6 object-contain" style={{ position: 'relative', zIndex: 1 }} />

            {/* Text block — sits above the glow */}
            <div className="flex flex-col justify-between" style={{ width: '304px', height: '112px', position: 'relative', zIndex: 1 }}>
              <h3 className="text-base font-bold text-[#29282A]">{card.label}</h3>
              <p className="text-xs font-medium text-[#555358] leading-[140%]">{card.descJsx}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
