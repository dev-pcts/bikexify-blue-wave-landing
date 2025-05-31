
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Bike, Menu, X } from 'lucide-react';

const UserNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-oceanblue-500">
          <Bike className="h-8 w-8" />
          <span>Bikexify</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            <li><a href="#bikes" className="text-gray-700 hover:text-oceanblue-500 transition-colors">Bikes</a></li>
            <li><a href="#how-it-works" className="text-gray-700 hover:text-oceanblue-500 transition-colors">How It Works</a></li>
            <li><a href="#pricing" className="text-gray-700 hover:text-oceanblue-500 transition-colors">Pricing</a></li>
            <li><a href="#locations" className="text-gray-700 hover:text-oceanblue-500 transition-colors">Locations</a></li>
          </ul>
          <Button className="btn-primary">Book Now</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 text-oceanblue-500" /> : <Menu className="h-6 w-6 text-oceanblue-500" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
          <ul className="flex flex-col py-4">
            <li><a href="#dashboard" className="block py-2 px-4 text-gray-700 hover:bg-oceanblue-50 hover:text-oceanblue-500" onClick={() => setIsMenuOpen(false)}>Bikes</a></li>
            <li><a href="#profile" className="block py-2 px-4 text-gray-700 hover:bg-oceanblue-50 hover:text-oceanblue-500" onClick={() => setIsMenuOpen(false)}>How It Works</a></li>
            <li><a href="#support" className="block py-2 px-4 text-gray-700 hover:bg-oceanblue-50 hover:text-oceanblue-500" onClick={() => setIsMenuOpen(false)}>Pricing</a></li>
            <li><a href="#logout" className="block py-2 px-4 text-gray-700 hover:bg-oceanblue-50 hover:text-oceanblue-500" onClick={() => setIsMenuOpen(false)}>Locations</a></li>
            <li className="px-4 py-2"><Button className="btn-primary w-full">Book Now</Button></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default UserNavbar;
