import React, { useState } from 'react';
import './Sidebar.css';
import { navLinks } from '../../data/navLinks';
import { FaCalendarAlt, FaChartBar, FaHistory, FaUserMd, FaComments, FaCog, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';


const icons = [
  <MdOutlineDashboard />,
  <FaHistory />,
  <FaCalendarAlt />,
  <FaUserMd />,
  <FaChartBar />,
  <FaComments />,
  <FaPhoneAlt />,
  <FaCog />
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="menu-button" onClick={() => {
  document.querySelector('.sidebar').classList.toggle('open');
}}>
  <FaBars />
</button>


      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2 className="logo"><span className="logo-highlight">Health</span>care.</h2>

        <div className="sidebar-section">
          <h4 className="section-title">General</h4>
          <ul className="sidebar-nav">
            {navLinks.slice(0, 5).map((item, index) => (
              <li key={index} className="sidebar-item">
                <span className="icon">{icons[index]}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-section">
          <h4 className="section-title">Tools</h4>
          <ul className="sidebar-nav">
            {navLinks.slice(5, 7).map((item, index) => (
              <li key={index} className="sidebar-item">
                <span className="icon">{icons[index + 5]}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-bottom">
          <li className="sidebar-item">
            <span className="icon"><FaCog /></span>
            Setting
          </li>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
