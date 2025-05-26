import React from 'react';
import './ActivityFeed.css';

function ActivityFeed() {
  const week = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const staticBars = [
    [ 'short','tall', 'medium'],
    ['medium','tall','short'],
    ['short', 'tall', 'medium'],
    ['short', 'medium', 'tall'],
    ['tall', 'medium', 'short'],
    ['medium', 'short', 'tall'],
    ['medium', 'tall', 'short']
  ];

  return (
    <section className="activity-section">
      <div className="activity-header">
        <h4>Activity</h4>
        <span>3 appointments on this week</span>
      </div>

      <div className="activity-bars">
        {staticBars.map((group, index) => (
          <div className="day-group" key={index}>
            <div className="bars">
              {group.map((height, idx) => (
                <div key={idx} className={`bar ${height} ${['blue', 'cyan', 'gray'][idx]}`} />
              ))}
            </div>
            <div className="day-name">{week[index]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivityFeed;
