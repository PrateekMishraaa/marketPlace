// src/pages/home/Homepage.jsx
import React from 'react';
import Hero from '../../components/home/Hero.jsx';
import Services from '../../components/home/Services.jsx';
import HowItWorks from '../../components/home/HowItWorks.jsx';
import Testimonials from '../../components/home/Testimonials.jsx';
import CTASection from '../../components/home/CTASection.jsx';
import Stats from '../../components/home/Stats.jsx';
import Features from '../../components/home/Features.jsx';
import Pricing from '../../components/home/Pricing.jsx';
import Partners from '../../components/home/Partners.jsx';
import BlogPreview from '../../components/home/BlogPreview.jsx';

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