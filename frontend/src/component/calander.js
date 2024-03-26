import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalendarView = ({ handleDateClick }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
    handleDateClick(date);
  };

  return (
    <div>
      <h2>Calendar View</h2>
      <Calendar onChange={handleDateChange} value={date} />
    </div>
  );
};


