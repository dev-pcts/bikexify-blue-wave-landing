
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-oceanblue-50 to-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80.')] bg-no-repeat bg-cover opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-oceanblue-700 to-oceanblue-500 bg-clip-text text-transparent">
            Explore The City On Two Wheels
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Affordable, convenient and eco-friendly bicycle rentals for everyone. 
            Experience the city from a new perspective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="btn-primary flex items-center gap-2 text-lg">
              Get Started <ArrowRight className="h-5 w-5" />
            </Link>
            <Button variant="outline" className="btn-secondary text-lg">
              View Locations
            </Button>
          </div>
        </div>

        <div className="mt-16 md:mt-24 relative">
          <div className="aspect-[16/9] max-w-5xl mx-auto overflow-hidden rounded-xl shadow-2xl animate-float">
            <img 
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80." 
              alt="Person riding a bike by the water" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
