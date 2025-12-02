import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardHeader.css';


import searchIcon from '../Assets/dashboard/search.svg';
import notificationIcon from '../Assets/dashboard/notifications.svg';
import userIcon from '../Assets/dashboard/user.svg';

const DashboardHeader = ({ title = "Portfolio Dashboard" }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    
  };

  const handleNotificationClick = () => {
    console.log('Notifications clicked');
    
    navigate('/admin/notifications');
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
    
    navigate('/admin/profile');
  };

  return (
    <header className="dashboard-header">
      <div className="dashboard-header-left">
        <h1 className="dashboard-header-title">{title}</h1>
      </div>

      <div className="dashboard-header-center">
        <form onSubmit={handleSearch} className="dashboard-search-form">
          <div className="dashboard-search-wrapper">
            <img 
              src={searchIcon} 
              alt="Search" 
              className="dashboard-search-icon"
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="dashboard-search-input"
            />
          </div>
        </form>
      </div>

      <div className="dashboard-header-right">
        <button 
          onClick={handleNotificationClick}
          className="dashboard-icon-button"
          aria-label="Notifications"
        >
          <img 
            src={notificationIcon} 
            alt="Notifications" 
            className="dashboard-header-icon"
          />
          <span className="dashboard-notification-badge">3</span>
        </button>

        <button 
          onClick={handleProfileClick}
          className="dashboard-icon-button"
          aria-label="Profile"
        >
          <img 
            src={userIcon} 
            alt="Profile" 
            className="dashboard-header-icon"
          />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;