import React from 'react';
import WelcomeBanner from '../Componants/WelcomeBanner';
import './Dashboard.css';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';

const Dashboard = () => {
  return (
    <>
    <Sidebar />
    <DashboardHeader />
    <div className="dashboard-page">
  
<WelcomeBanner />
      {/* Stats Cards Row */}
      <div className="dashboard-stats-grid">
        <div className="dashboard-stat-card">
          <div className="stat-card-content">
            {/* Add your stats here */}
          </div>
        </div>
        <div className="dashboard-stat-card">
          <div className="stat-card-content">
            {/* Add your stats here */}
          </div>
        </div>
        <div className="dashboard-stat-card">
          <div className="stat-card-content">
            {/* Add your stats here */}
          </div>
        </div>
        <div className="dashboard-stat-card">
          <div className="stat-card-content">
            {/* Add your stats here */}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-content-grid">
        {/* Left Column - Large Card */}
        <div className="dashboard-card dashboard-card-large">
          <div className="dashboard-card-header">
            <h2 className="dashboard-card-title">Card Title</h2>
          </div>
          <div className="dashboard-card-body">
            {/* Add your content here */}
          </div>
        </div>

        {/* Right Column - Stacked Cards */}
        <div className="dashboard-card-stack">
          <div className="dashboard-card dashboard-card-small">
            <div className="dashboard-card-header">
              <h3 className="dashboard-card-title">Small Card</h3>
            </div>
            <div className="dashboard-card-body">
              {/* Add your content here */}
            </div>
          </div>

          <div className="dashboard-card dashboard-card-small">
            <div className="dashboard-card-header">
              <h3 className="dashboard-card-title">Small Card</h3>
            </div>
            <div className="dashboard-card-body">
              {/* Add your content here */}
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Card */}
      <div className="dashboard-card dashboard-card-full">
        <div className="dashboard-card-header">
          <h2 className="dashboard-card-title">Full Width Card</h2>
        </div>
        <div className="dashboard-card-body">
          {/* Add your content here */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;