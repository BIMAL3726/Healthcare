import React from 'react';
import './CalendarView.css';
import { calendarData, appointmentCards } from '../../../data/calendarData';

function CalendarView() {
  return (
    <section className="calendar-view">
      <div className="calendar-header">
        <h3>October 2021</h3>
        <div className="calendar-nav">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>

      <div className="calendar-grid">
        {calendarData.map((day, index) => (
          <div key={index} className={`calendar-column ${day.active ? 'active' : ''} ${day.faded ? 'faded' : ''}`}>
            <div className="day-name">{day.day}</div>
            <div className="day-date">{day.date}</div>
            {day.slots.map((time, i) => (
              <div key={i} className={`time-slot ${day.active && i === 1 ? 'highlight' : ''}`}>
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="calendar-appointments">
        {appointmentCards.map((card, idx) => (
          <div key={idx} className={`appointment-card ${card.variant}`}>
            <b>{card.title}</b>
            <div>{card.time}<br></br>
            {card.doctor}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CalendarView;
