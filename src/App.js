import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import AnatomySection from './components/DashboardMainContent/DashboardOverview/AnatomySection/AnatomySection';
import CalendarView from './components/DashboardMainContent/CalendarView/CalendarView';
//import DashboardOverview from './components/DashboardMainContent/DashboardOverview/DashboardOverview';
import UpcomingSchedule from './components/DashboardMainContent/UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from './components/DashboardMainContent/ActivityFeed/ActivityFeed';

function App() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-main">
        <Header />
        <h2 className="page-title">Dashboard</h2>

        <div className="dashboard-grid">
          <div className="left-column">
            <AnatomySection />
            <ActivityFeed/>
          </div>
          <div className="right-column">
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
