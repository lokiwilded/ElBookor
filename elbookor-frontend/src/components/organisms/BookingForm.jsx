import React, { useState } from 'react';
import { DatePicker } from '../molecules/DatePicker';

export const BookingForm = ({ availableSlots, onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DatePicker onDateChange={setSelectedDate} />
      {/* Add more fields for user details if needed */}
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded mt-4">Book Now</button>
    </form>
  );
};