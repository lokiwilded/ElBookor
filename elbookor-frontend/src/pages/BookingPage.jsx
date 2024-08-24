import React, { useState, useEffect } from 'react';
import { BookingForm } from '../components/organisms/BookingForm';
import axios from 'axios';

export const BookingPage = () => {
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    axios.get('/api/availability').then((response) => setAvailableSlots(response.data));
  }, []);

  const handleBookingSubmit = (date) => {
    // Logic to handle booking submission
    console.log('Booking date:', date);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Make a Reservation</h1>
      <BookingForm availableSlots={availableSlots} onSubmit={handleBookingSubmit} />
    </div>
  );
};