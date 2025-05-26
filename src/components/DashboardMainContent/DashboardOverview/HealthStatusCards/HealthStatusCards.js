import React from 'react';
import './HealthStatusCards.css';

function HealthStatusCards() {
  const cards = [
    { title: 'Lungs', status: 'Needs Checkup', date: '22 May 2025', color: 'red' },
    { title: 'Teeth', status: 'Good', date: '18 May 2025', color: 'orange' },
    { title: 'Bone', status: 'Healthy', date: '20 May 2025', color: 'green' }
  ];

  return (
    <div className="health-cards">
      {cards.map((card, index) => (
        <div key={index} className="health-card" style={{ borderLeftColor: card.color }}>
          <h4>{card.title}</h4>
          <p>{card.status}</p>
          <span>{card.date}</span>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;