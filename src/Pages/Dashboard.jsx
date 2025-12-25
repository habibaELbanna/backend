import React, { useState, useEffect } from 'react';
import WelcomeBanner from '../Componants/WelcomeBanner';
import StatCard from '../Componants/StatCard';
import AnalyticsOverview from '../Componants/Analyticsoverview';
import QuickActions from '../Componants/QuickActions';
import RecentProjects from '../Componants/Recentprojects';
import RecentActivity from '../Componants/Recentactivity';
import TopPerforming from '../Componants/TopPerforming';
import './Dashboard.css';
import Sidebar from '../Componants/Sidebar';
import DashboardHeader from '../Componants/DashboardHeader';
import { supabase } from './Supabase';

// Import your icons
import folderIcon from '../Assets/dashboard/folder.svg';
import eyeIcon from '../Assets/dashboard/eye.svg';
import chartIcon from '../Assets/dashboard/chart.svg';
import heartIcon from '../Assets/dashboard/heart.svg';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalViews: '156.4K',
    engagement: '8.2%',
    totalLikes: '12.3K'
  });
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentMessages, setRecentMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      console.log('🔍 Fetching dashboard data...');

      // Fetch total projects count
      const { count: projectCount, error: projectCountError } = await supabase
        .from('Projects')
        .select('*', { count: 'exact', head: true });

      if (projectCountError) throw projectCountError;

      // Fetch recent projects (last 5)
      const { data: projects, error: projectsError } = await supabase
        .from('Projects')
        .select('id, Title, Hero_image, section_type, created_at')
        .order('created_at', { ascending: false })
        .limit(5);

      if (projectsError) throw projectsError;

      // Fetch recent messages (last 5)
      const { data: messages, error: messagesError } = await supabase
        .from('contactus')
        .select('id, Name, Email, Subject, Message, created_at')
        .order('created_at', { ascending: false })
        .limit(5);

      if (messagesError) throw messagesError;

      console.log('✅ Dashboard data fetched');

      setStats(prev => ({
        ...prev,
        totalProjects: projectCount || 0
      }));

      setRecentProjects(projects || []);
      setRecentMessages(messages || []);

    } catch (error) {
      console.error('❌ Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Sidebar />
        <DashboardHeader />
        <div className="dashboard-page">
          <WelcomeBanner />
          <div style={{ padding: '20px', textAlign: 'center' }}>
            Loading dashboard data...
          </div>
        </div>
      </>
    );
  }

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
            value={stats.totalProjects}
            change="+3 this month"
            icon={folderIcon}
          />

          <StatCard 
            title="Total Views"
            value={stats.totalViews}
            change="+12.5% from last month"
            icon={eyeIcon}
          />

          <StatCard 
            title="Engagement"
            value={stats.engagement}
            change="+2.3% from last month"
            icon={chartIcon}
          />

          <StatCard 
            title="Total Likes"
            value={stats.totalLikes}
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

        {/* Recent Projects - Full Width */}
        <div className="dashboard-card-full">
          <RecentProjects projects={recentProjects} />
        </div>

        {/* Bottom Grid - Activity & Performance */}
        <div className="dashboard-bottom-grid">
          <div className="dashboard-card-medium">
            <RecentActivity messages={recentMessages} />
          </div>
          <div className="dashboard-card-medium">
            <TopPerforming />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;