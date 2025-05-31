import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, Calendar, Bike, X } from 'lucide-react';
import UserNavbar from '@/components/UserNavbar';

const availableRides = [
  {
    id: 1,
    location: 'University way',
    distance: 'Gate A',
    price: 'Ksh 10/ride',
    bikes: 8,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    location: 'University way',
    distance: 'Upande',
    price: 'ksh 10/ride',
    bikes: 12,
    image: 'https://plus.unsplash.com/premium_photo-1677564625758-14072148c504?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    location: 'Chep',
    distance: 'Soggy',
    price: 'Ksh 10/ride',
    bikes: 5,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  }
];

const rideHistory = [
  {
    id: 1,
    date: '2024-01-15',
    destination: 'Upande to UoE Gate A',
    duration: '15mins',
    points: 25
  },
  {
    id: 2,
    date: '2024-01-12',
    destination: 'Upande to Gate A',
    duration: '10mins',
    points: 18
  },
  {
    id: 3,
    date: '2024-01-08',
    destination: 'Soggy to Upande',
    duration: '20mins',
    points: 32
  }
];

const Dashboard = () => {
  const [showMpesaPopup, setShowMpesaPopup] = useState(false);
  const [pin, setPin] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);

  useEffect(() => {
    if (showMpesaPopup) {
      setTimeout(() => setIsVisible(true), 10);
    }
  }, [showMpesaPopup]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowMpesaPopup(false);
      setSelectedRide(null);
      setPin('');
    }, 200);
  };

  const handleRideNow = (ride) => {
    setSelectedRide(ride);
    setShowMpesaPopup(true);
  };

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      handleClose();
      alert(`Payment successful! Your ride from ${selectedRide.location} is booked.`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <UserNavbar />
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah!</h1>
            <p className="text-gray-600">Ready for your next adventure on two wheels?</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-oceanblue-100/80 rounded-full">
                    <Bike className="h-5 w-5 text-oceanblue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">24</p>
                    <p className="text-sm text-gray-600">Total Rides</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100/80 rounded-full">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">48h</p>
                    <p className="text-sm text-gray-600">Total Time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-100/80 rounded-full">
                    <Star className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">420</p>
                    <p className="text-sm text-gray-600">Points Earned</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Available Rides</CardTitle>
                <CardDescription className="text-sm">Find bikes near you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {availableRides.map((ride) => (
                    <div 
                      key={ride.id} 
                      className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50/50 transition-colors"
                    >
                      <img 
                        src={ride.image} 
                        alt={ride.location}
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{ride.location}</h3>
                        <div className="flex items-center gap-3 text-xs text-gray-600 mt-1">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {ride.distance}
                          </span>
                          <span>{ride.bikes} bikes</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-oceanblue-600 text-sm">{ride.price}</p>
                        <Button 
                          size="sm" 
                          className="mt-1.5 bg-oceanblue-500 hover:bg-oceanblue-600 text-xs h-8"
                          onClick={() => handleRideNow(ride)}
                        >
                          Ride Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Ride History</CardTitle>
                <CardDescription className="text-sm">Your recent adventures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {rideHistory.map((ride) => (
                    <div 
                      key={ride.id} 
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-oceanblue-100/50 rounded-full">
                          <Calendar className="h-3.5 w-3.5 text-oceanblue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-sm">{ride.destination}</h3>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{ride.date}</span>
                            <span>•</span>
                            <span>{ride.duration}</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        +{ride.points} pts
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Sleek MPESA Popup */}
      {showMpesaPopup && (
        <div className="fixed inset-0 z-50">
          <div 
            className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-200 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleClose}
          />
          
          <div 
            className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl transition-transform duration-200 ease-out ${
              isVisible ? 'translate-y-0' : 'translate-y-full'
            } max-w-md mx-auto`}
          >
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-12 h-1 bg-gray-200 rounded-full" />
            </div>
            
            <div className="px-5 pt-1 pb-3 flex justify-between items-center">
              <h3 className="font-semibold text-gray-900 text-sm">Confirm Payment</h3>
              <button 
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="px-5 pb-4 space-y-3">
              {selectedRide && (
                <div className="bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm">{selectedRide.location}</p>
                      <p className="text-xs text-gray-500">{selectedRide.distance}</p>
                    </div>
                    <p className="text-oceanblue-600 font-semibold text-sm">{selectedRide.price}</p>
                  </div>
                </div>
              )}
              
              <div className="text-center py-1">
                <p className="font-medium text-sm text-gray-800">Enter MPESA PIN to pay</p>
                <p className="text-xs text-gray-400 mt-0.5">Standard charges apply</p>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex justify-center">
                  <input
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="w-40 px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-oceanblue-500 text-center text-lg tracking-widest"
                    placeholder="••••"
                    maxLength={4}
                    inputMode="numeric"
                  />
                </div>
                <p className="text-xs text-center text-gray-400">4-digit MPESA PIN</p>
              </div>
            </div>
            
            <div className="px-5 pb-5">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 py-2.5 text-sm font-medium rounded-lg"
                onClick={handlePayment}
                disabled={pin.length !== 4 || isProcessing}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                    Processing...
                  </span>
                ) : (
                  'Pay with MPESA'
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;