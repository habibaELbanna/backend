import React from 'react';
import './QuickActions.css';


import uploadIcon from '../Assets/dashboard/upload.svg';
import reportIcon from '../Assets/dashboard/report.svg';
import settingsIcon from '../Assets/dashboard/settings.svg';

const QuickActions = () => {
  const handleNewProject = () => {
    console.log('New Project clicked');
    // Add your navigation or modal logic here
  };

  const handleUploadMedia = () => {
    console.log('Upload Media clicked');
    // Add your upload logic here
  };

  const handleViewReports = () => {
    console.log('View Reports clicked');
    // Add your navigation logic here
  };

  const handleSettings = () => {
    console.log('Settings clicked');
    // Add your settings navigation here
  };

  return (
    <div className="quick-actions">
      <h2>Quick Actions</h2>
      
      <div className="actions-list">
        <button className="action-btn primary" onClick={handleNewProject}>
          <span className="btn-icon">+</span>
          <span className="btn-text">New Project</span>
        </button>
        
        <button className="action-btn" onClick={handleUploadMedia}>
          <img src={uploadIcon} alt="Upload" className="btn-icon" />
          <span className="btn-text">Upload Media</span>
        </button>
        
        <button className="action-btn" onClick={handleViewReports}>
          <img src={reportIcon} alt="Reports" className="btn-icon" />
          <span className="btn-text">View Reports</span>
        </button>
        
        <button className="action-btn" onClick={handleSettings}>
          <img src={settingsIcon} alt="Settings" className="btn-icon" />
          <span className="btn-text">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;