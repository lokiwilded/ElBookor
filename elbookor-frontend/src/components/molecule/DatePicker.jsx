import React from 'react';
import Calendar from 'react-calendar';

export const DatePicker = ({ onDateChange }) => {
  return (
    <Calendar onChange={onDateChange} />
  );
};