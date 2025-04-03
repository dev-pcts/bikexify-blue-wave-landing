
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BikeTypes from '@/components/BikeTypes';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Locations from '@/components/Locations';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <BikeTypes />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Locations />
      <Footer />
    </div>
  );
};

export default Index;
