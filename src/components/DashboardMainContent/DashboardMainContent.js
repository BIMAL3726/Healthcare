import React from 'react';
import './DashboardMainContent.css';
import AnatomySection from './DashboardOverview/AnatomySection/AnatomySection';
import HealthStatusCards from './DashboardOverview/HealthStatusCards/HealthStatusCards';
import CalendarView from './CalendarView/CalendarView';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';

function DashboardMainContent() {
  return (
    <main className="dashboard-main">
      <AnatomySection/>
      <HealthStatusCards/>
      <CalendarView/>
      <UpcomingSchedule/>
    </main>
  );
}

export default DashboardMainContent;