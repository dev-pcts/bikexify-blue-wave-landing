
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, Calendar, Bike } from 'lucide-react';
import Navbar from '@/components/Navbar';

const availableRides = [
  {
    id: 1,
    location: 'Central Park Station',
    distance: '0.2 miles away',
    price: '$15/hour',
    bikes: 8,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    location: 'Riverside Terminal',
    distance: '0.5 miles away',
    price: '$15/hour',
    bikes: 12,
    image: 'https://images.unsplash.com/photo-1544191696-15693986e0d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 3,
    location: 'Downtown Hub',
    distance: '0.8 miles away',
    price: '$15/hour',
    bikes: 5,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  }
];

const rideHistory = [
  {
    id: 1,
    date: '2024-01-15',
    destination: 'Central Park to Brooklyn Bridge',
    duration: '2h 30m',
    points: 25
  },
  {
    id: 2,
    date: '2024-01-12',
    destination: 'Riverside to Times Square',
    duration: '1h 45m',
    points: 18
  },
  {
    id: 3,
    date: '2024-01-08',
    destination: 'Downtown Hub Loop',
    duration: '3h 15m',
    points: 32
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah!</h1>
            <p className="text-gray-600">Ready for your next adventure on two wheels?</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-oceanblue-100 rounded-full">
                    <Bike className="h-6 w-6 text-oceanblue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">24</p>
                    <p className="text-sm text-gray-600">Total Rides</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">48h</p>
                    <p className="text-sm text-gray-600">Total Time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">420</p>
                    <p className="text-sm text-gray-600">Points Earned</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Available Rides</CardTitle>
                <CardDescription>Find bikes near you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availableRides.map((ride) => (
                    <div key={ride.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <img 
                        src={ride.image} 
                        alt={ride.location}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{ride.location}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {ride.distance}
                          </span>
                          <span>{ride.bikes} bikes</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-oceanblue-600">{ride.price}</p>
                        <Button size="sm" className="mt-2 bg-oceanblue-500 hover:bg-oceanblue-600">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ride History</CardTitle>
                <CardDescription>Your recent adventures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rideHistory.map((ride) => (
                    <div key={ride.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-oceanblue-100 rounded-full">
                          <Calendar className="h-4 w-4 text-oceanblue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm">{ride.destination}</h3>
                          <div className="flex items-center gap-4 text-xs text-gray-600">
                            <span>{ride.date}</span>
                            <span>{ride.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-green-600">+{ride.points} pts</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
