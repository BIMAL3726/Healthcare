import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import AnatomySection from './components/DashboardMainContent/DashboardOverview/AnatomySection/AnatomySection';
import CalendarView from './components/DashboardMainContent/CalendarView/CalendarView';
import UpcomingSchedule from './components/DashboardMainContent/UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from './components/DashboardMainContent/ActivityFeed/ActivityFeed';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Listen for resize
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-main">
        <Header />
        <h2 className="page-title">Dashboard</h2>

        <div className="dashboard-grid">
          <div className="left-column">
            <AnatomySection />
            {!isMobile && <ActivityFeed />}
          </div>
          <div className="right-column">
            <CalendarView />
            <UpcomingSchedule />
            {isMobile && <ActivityFeed />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
