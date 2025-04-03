
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    id: 1,
    name: 'Single Ride',
    price: '$15',
    duration: 'per hour',
    features: [
      'Access to city cruisers',
      'Mobile app access',
      'Pay-as-you-go',
      '24/7 customer support',
    ],
    isPopular: false,
    buttonText: 'Book Now',
  },
  {
    id: 2,
    name: 'Day Pass',
    price: '$35',
    duration: 'per day',
    features: [
      'Access to all bike types',
      'Mobile app access',
      'Free helmet rental',
      'Route maps included',
      '24/7 customer support',
    ],
    isPopular: true,
    buttonText: 'Get Started',
  },
  {
    id: 3,
    name: 'Monthly',
    price: '$129',
    duration: 'per month',
    features: [
      'Unlimited 2-hour rides',
      'Access to all bike types',
      'Mobile app access',
      'Free helmet rental',
      'Route maps included',
      '24/7 customer support',
      'Priority booking',
    ],
    isPopular: false,
    buttonText: 'Subscribe',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple <span className="text-oceanblue-500">Pricing</span> Plans
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your biking needs. Whether it's a quick ride or a monthly subscription, we've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative rounded-xl border ${plan.isPopular ? 'border-oceanblue-500 shadow-lg shadow-oceanblue-100' : 'border-gray-200'} p-6 flex flex-col card-hover`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 bg-oceanblue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-1">{plan.duration}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-oceanblue-500 mr-2 shrink-0" />
                    <span className="text-gray-600 text-left">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`${plan.isPopular ? 'bg-oceanblue-500 hover:bg-oceanblue-600 text-white' : 'bg-white hover:bg-gray-50 text-oceanblue-500 border border-oceanblue-500'} w-full py-2 px-4 rounded-lg transition-colors duration-300`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
