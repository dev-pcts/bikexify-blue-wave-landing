
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const locations = [
  {
    id: 1,
    name: 'Downtown Hub',
    address: '123 Main Street, Downtown',
    hours: '7:00 AM - 10:00 PM',
    phone: '(555) 123-4567',
    coordinates: [40.7128, -74.0060],
  },
  {
    id: 2,
    name: 'Waterfront Station',
    address: '456 Harbor View, Waterfront',
    hours: '8:00 AM - 9:00 PM',
    phone: '(555) 987-6543',
    coordinates: [40.7023, -73.9871],
  },
  {
    id: 3,
    name: 'University Depot',
    address: '789 Campus Drive, University District',
    hours: '7:00 AM - 11:00 PM',
    phone: '(555) 456-7890',
    coordinates: [40.7303, -73.9950],
  },
];

const Locations = () => {
  return (
    <section id="locations" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Us <span className="text-oceanblue-500">Nearby</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With multiple locations across the city, there's always a Bikexify station near you. Check out our convenient pickup and drop-off points.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {locations.map((location) => (
              <div key={location.id} className="border border-gray-200 rounded-lg p-6 hover:border-oceanblue-300 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <MapPin className="w-5 h-5 text-oceanblue-500 mr-2" />
                  {location.name}
                </h3>
                <p className="text-gray-600 mb-2">{location.address}</p>
                <p className="text-gray-600 mb-2"><span className="font-medium">Hours:</span> {location.hours}</p>
                <p className="text-gray-600 flex items-center">
                  <Phone className="w-4 h-4 text-oceanblue-500 mr-2" />
                  {location.phone}
                </p>
              </div>
            ))}
            
            <div className="mt-6">
              <Button className="w-full btn-primary">View All Locations</Button>
            </div>
          </div>
          
          <div className="lg:col-span-3 h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1631&q=80" 
              alt="Map of Bikexify locations" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="mt-16 bg-oceanblue-50 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-6">
                Have questions or need assistance? Our customer support team is here to help you with anything you need.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-oceanblue-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">(555) 123-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-oceanblue-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">hello@bikexify.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-oceanblue-500 focus:border-oceanblue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-oceanblue-500 focus:border-oceanblue-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-oceanblue-500 focus:border-oceanblue-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <Button className="w-full btn-primary">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
