import React, { useState } from 'react';
import "./calendar.css"

function Calendar() {
  const [date, setDate] = useState(new Date());

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const handlePrevMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = () => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay.getDay();
  };

  const lastDayOfMonth = () => {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDay.getDay();
  };

  const renderDays = () => {
    const days = [];
    const daysInCurrentMonth = daysInMonth(date.getFullYear(), date.getMonth());
    const firstDay = firstDayOfMonth();
    const lastDay = lastDayOfMonth();

    // Render previous month's days
    for (let i = firstDay - 1; i >= 0; i--) {
      const prevMonthDate = new Date(date.getFullYear(), date.getMonth() - 1, daysInMonth(date.getFullYear(), date.getMonth() - 1) - i);
      days.push(
        <div key={prevMonthDate} className="day prev-month">{prevMonthDate.getDate()}</div>
      );
    }

    // Render current month's days
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), i);
      days.push(
        <div key={currentDate} className="day">{i}</div>
      );
    }

    // Render next month's days
    for (let i = 1; i <= 6 - lastDay; i++) {
      const nextMonthDate = new Date(date.getFullYear(), date.getMonth() + 1, i);
      days.push(
        <div key={nextMonthDate} className="day next-month">{nextMonthDate.getDate()}</div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>{'<'}</button>
        <div className="month">{months[date.getMonth()]}</div>
        <button onClick={handleNextMonth}>{'>'}</button>
      </div>
      <div className="weekdays">
        {weekdays.map(day => (
          <div key={day} className="weekday">{day}</div>
        ))}
      </div>
      <div className="days">
        {renderDays()}
      </div>
    </div>
  );
}

export default Calendar;