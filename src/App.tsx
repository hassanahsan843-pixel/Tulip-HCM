import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Different from './components/Different';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/AboutUs';
import FooterSection from './components/FooterSection';

export default function App() {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <div className="mx-auto max-w-[1440px] min-h-screen bg-white relative antialiased">
        
        {/* Global Background Ellipse with explicit z-index layer */}
        <img 
          src="/images/hero-bg-ellipse.svg" 
          alt="" 
          className="absolute pointer-events-none z-10 object-contain"
          style={{
            width: '922px',
            height: '922px',
            top: '-80px', 
            left: '-115px', 
            opacity: 5.06
          }}
        />

        {/* The main page wrapper needs a higher z-index so buttons stay clickable */}
        <div className="relative z-20 w-full">
          <Navbar />
          <Hero />
          <Capabilities />
          <Different />
          <HowItWorks />
          <AboutUs />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
