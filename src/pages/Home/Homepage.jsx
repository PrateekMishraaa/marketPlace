// src/pages/home/Homepage.jsx
import React from 'react';
import Hero from '../../components/Home/Hero.jsx';
import Services from '../../components/Home/Services.jsx';
import HowItWorks from '../../components/Home/HowItWorks.jsx';
import Testimonials from '../../components/Home/Testimonials.jsx';
import CTASection from '../../components/Home/CTASection.jsx';
import Stats from '../../components/Home/Stats.jsx';
import Features from '../../components/Home/Features.jsx';
import Pricing from '../../components/Home/Pricing.jsx';
import Partners from '../../components/Home/Partners.jsx';
import BlogPreview from '../../components/Home/BlogPreview.jsx';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Partners />
      <Features />
      <Services />
      <Stats />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <BlogPreview />
      <CTASection />
    </div>
  );
};

export default Homepage;