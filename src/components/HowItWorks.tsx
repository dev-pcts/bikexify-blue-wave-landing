
import React from 'react';
import { MapPin, Calendar, Bike, ThumbsUp } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Find a Location',
    description: 'Locate the nearest Bikexify station on our map or using the app.',
    icon: MapPin,
    color: 'bg-oceanblue-100 text-oceanblue-600'
  },
  {
    id: 2,
    title: 'Book Your Bike',
    description: 'Reserve your preferred bike type and duration through our simple booking system.',
    icon: Calendar,
    color: 'bg-oceanblue-200 text-oceanblue-700'
  },
  {
    id: 3,
    title: 'Ride & Explore',
    description: 'Unlock your bike with the provided code and enjoy the ride wherever you want to go.',
    icon: Bike,
    color: 'bg-oceanblue-300 text-oceanblue-800'
  },
  {
    id: 4,
    title: 'Return & Rate',
    description: 'Return the bike to any Bikexify station and rate your experience.',
    icon: ThumbsUp,
    color: 'bg-oceanblue-400 text-oceanblue-900'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-oceanblue-500">Bikexify</span> Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Renting a bike with us is quick and hassle-free. Follow these simple steps to get riding in no time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center">
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                <step.icon className="w-8 h-8" />
              </div>
              <div className="absolute top-8 left-1/2 h-0.5 bg-oceanblue-200 w-full hidden lg:block" 
                   style={{ display: step.id === steps.length ? 'none' : '', transform: 'translateX(50%)' }}></div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
