import React from 'react';
import './SimpleAppointmentCard.css';
import { FaClock } from 'react-icons/fa';

function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="appointment-card">
      <FaClock className="pill-icon" />
      <div className="appointment-details">
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;