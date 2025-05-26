import React from 'react';
import './UpcomingSchedule.css';
import { upcomingAppointments } from '../../../data/upcomingAppointments';

function UpcomingSchedule() {
  return (
    <section className="upcoming-section">
      <h3 className="upcoming-title">The Upcoming Schedule</h3>

      {Object.entries(upcomingAppointments).map(([day, appointments], index) => (
        <div key={index} className="upcoming-day-block">
          <h4 className="day-label">On {day}</h4>
          <div className="appointment-list">
            {appointments.map((item, idx) => (
              <div key={idx} className="appointment-pill">
                <div className="pill-top">
                  <span className="title">{item.title}</span>
                  <span className="icon">{item.icon}</span>
                </div>
                <div className="time">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default UpcomingSchedule;
