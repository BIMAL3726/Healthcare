import React from 'react';
import './AnatomySection.css';
import { anatomyStatus } from '../../../../data/anatomyStatus';
import bodyImg from '../../../../assets/body.jpg';

function AnatomySection() {
  return (
    <section className="anatomy-layout">
      <div className="anatomy-left">
        <img src={bodyImg} alt="Human anatomy" className="anatomy-body-img" />
      </div>

      <div className="anatomy-right">
        {anatomyStatus.map((item, index) => (
          <div key={index} className="skillbar-card">
            <div className="skillbar-label">
              <span className="icon">{item.icon}</span>
              <span>{item.part}</span>
            </div>
            <div className="skillbar-track">
              <div
                className="skillbar-fill"
                style={{ width: `${item.level}%`, backgroundColor: item.color }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AnatomySection;
