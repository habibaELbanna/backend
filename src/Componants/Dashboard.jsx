import React from 'react';
import WelcomeBanner from '../Componants/WelcomeBanner';
import StatCard from '../Componants/StatCard';
import AnalyticsOverview from '../Componants/Analyticsoverview';
import QuickActions from '../Componants/QuickActions';
import './Dashboard.css';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';

// Import your icons
import folderIcon from '../Assets/dashboard/folder.svg';
import eyeIcon from '../Assets/dashboard/eye.svg';
import chartIcon from '../Assets/dashboard/chart.svg';
import heartIcon from '../Assets/dashboard/heart.svg';

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <DashboardHeader />
      <div className="dashboard-page">
  
        <WelcomeBanner />
        
        {/* Stats Grid */}
        <div className="dashboard-stats-grid">
          <StatCard 
            title="Total Projects"
            value="24"
            change="+3 this month"
            icon={folderIcon}
          />

          <StatCard 
            title="Total Views"
            value="156.4K"
            change="+12.5% from last month"
            icon={eyeIcon}
          />

          <StatCard 
            title="Engagement"
            value="8.2%"
            change="+2.3% from last month"
            icon={chartIcon}
          />

          <StatCard 
            title="Total Likes"
            value="12.3K"
            change="+425 this week"
            icon={heartIcon}
          />
        </div>

        {/* Main Content Grid */}
        <div className="dashboard-content-grid">
          {/* Left Column - Analytics Overview */}
          <div className="dashboard-card-large">
            <AnalyticsOverview />
          </div>

          {/* Right Column - Quick Actions */}
          <div className="dashboard-card-stack">
            <QuickActions />
          </div>
        </div>

        {/* Full Width Card */}
        <div className="dashboard-card dashboard-card-full">
          <div className="dashboard-card-header">
            <h2 className="dashboard-card-title">Recent Activity</h2>
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