import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Bike, Menu, X } from 'lucide-react';

const UserNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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

  const handleBookNow = () => {
    navigate('/signup'); // Or whatever route you want for booking
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-oceanblue-500">
          <Bike className="h-8 w-8" />
          <span>Bikexify</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            <li><Link to="/dashboard" className="text-gray-700 hover:text-oceanblue-500 transition-colors">Dashboard</Link></li>
            <li><Link to="/profile" className="text-gray-700 hover:text-oceanblue-500 transition-colors">Profile</Link></li>
            <li><Link to="/support" className="text-gray-700 hover:text-oceanblue-500 transition-colors">Support</Link></li>
            <li><a href="#logout" className="text-gray-700 hover:text-oceanblue-500 transition-colors">Logout</a></li>
          </ul>
          <Button className="btn-primary" onClick={handleBookNow}>Book Now</Button>
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
            <li>
              <Link 
                to="/dashboard" 
                className="block py-2 px-4 text-gray-700 hover:bg-oceanblue-50 hover:text-oceanblue-500" 
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/profile" 
                className="block py-2 px-4 text-gray-700 hover:bg-oceanblue-50 hover:text-oceanblue-500" 
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link 
                to="/support" 
                className="block py-2 px-4 text-gray-700 hover:bg-oceanblue-50 hover:text-oceanblue-500" 
                onClick={() => setIsMenuOpen(false)}
              >
                Support and FAQ
              </Link>
            </li>
            <li>
              <a 
                href="#logout" 
                className="block py-2 px-4 text-gray-700 hover:bg-oceanblue-50 hover:text-oceanblue-500" 
                onClick={() => setIsMenuOpen(false)}
              >
                Logout
              </a>
            </li>
            <li className="px-4 py-2">
              <Button 
                className="btn-primary w-full" 
                onClick={() => {
                  handleBookNow();
                  setIsMenuOpen(false);
                }}
              >
                Book Now
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default UserNavbar;
