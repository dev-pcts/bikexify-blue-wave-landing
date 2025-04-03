
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const bikeTypes = [
  {
    id: 1,
    name: 'City Cruiser',
    description: 'Perfect for leisurely rides in the city with comfortable seating and easy handling.',
    price: '$15',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 2,
    name: 'Mountain Bike',
    description: 'Built for off-road adventures with rugged tires and durable construction.',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1692&q=80',
  },
  {
    id: 3,
    name: 'Electric Bike',
    description: 'Enjoy the ride with pedal assist technology for effortless travel around the city.',
    price: '$35',
    image: 'https://images.unsplash.com/photo-1557074347-e96e8a4d777c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
];

const BikeTypes = () => {
  return (
    <section id="bikes" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-oceanblue-500">Bike</span> Selection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse fleet of well-maintained bicycles for any adventure. 
            From city cruising to off-road exploration, we've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bikeTypes.map((bike) => (
            <Card key={bike.id} className="card-hover overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={bike.image} 
                  alt={bike.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{bike.name}</CardTitle>
                <CardDescription className="text-gray-500">Starting at {bike.price}/hour</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{bike.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-oceanblue-500 hover:bg-oceanblue-600">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BikeTypes;
