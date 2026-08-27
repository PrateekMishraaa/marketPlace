import React from 'react';
import Hero from '../Home/Hero.jsx';
import Services from '../Home/Services.jsx';
import HowItWorks from '../Home/HowItWorks.jsx';
import Testimonials from '../Home/Testimonials.jsx';
import CTASection from '../Home/CTASection.jsx';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Homepage;