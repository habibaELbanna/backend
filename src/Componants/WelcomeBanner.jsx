import React from 'react';
import './WelcomeBanner.css';

const WelcomeBanner = ({ 
  title = "Welcome back!", 
  subtitle = "Here's what's happening with your portfolio today.",
  statusText = "Website is live",
  statusType = "live", 
  showStatus = true 
}) => {
  
  const getStatusClass = () => {
    switch(statusType) {
      case 'live':
        return 'welcome-status-live';
      case 'offline':
        return 'welcome-status-offline';
      case 'warning':
        return 'welcome-status-warning';
      case 'info':
        return 'welcome-status-info';
      default:
        return 'welcome-status-live';
    }
  };

  return (
    <div className="welcome-banner">
      <h1 className="welcome-banner-title">{title}</h1>
      <p className="welcome-banner-subtitle">{subtitle}</p>
      {showStatus && (
        <div className="welcome-banner-status">
          <span className="welcome-status-text">{statusText}</span>
          <span className={`welcome-status-indicator ${getStatusClass()}`}></span>
        </div>
      )}
    </div>
  );
};

export default WelcomeBanner;