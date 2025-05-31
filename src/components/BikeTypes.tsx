
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const bikeTypes = [
  {
    id: 1,
    name: 'City Cruiser',
    description: 'Perfect for leisurely rides in the city with comfortable seating and easy handling.',
    price: 'Ksh 2000',
    image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 2,
    name: 'Mountain Bike',
    description: 'Built for off-road adventures with rugged tires and durable construction.',
    price: 'ksh 3000',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=1692&q=80',
  },
  {
    id: 3,
    name: 'Hybrid Bike',
    description: 'Enjoy the ride with pedal assist technology for effortless travel around the city.',
    price: 'ksh 5000',
    image: 'https://images.unsplash.com/photo-1744789978417-d4ffb2920ed8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHlicmlkJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D',
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
