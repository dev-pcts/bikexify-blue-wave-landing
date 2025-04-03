
import React from 'react';
import { Bike, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <Bike className="h-8 w-8 text-oceanblue-400" />
              <span>Bikexify</span>
            </div>
            <p className="text-gray-400 mb-6">
              Making cycling accessible for everyone. Experience the joy of biking without the commitment of ownership.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-oceanblue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-oceanblue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-oceanblue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-oceanblue-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#bikes" className="text-gray-400 hover:text-white transition-colors">Bikes</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#locations" className="text-gray-400 hover:text-white transition-colors">Locations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bike Maintenance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cycling Routes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Get the latest updates and offers directly to your inbox.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-oceanblue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-oceanblue-500 hover:bg-oceanblue-600 text-white rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Bikexify. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
