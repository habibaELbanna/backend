import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';


import dashboardIcon from '../assets/icons/dashboard.svg';
import projectsIcon from '../assets/icons/projects.svg';
import skillsIcon from '../assets/icons/skills.svg';
import experienceIcon from '../assets/icons/experience.svg';
import profileIcon from '../assets/icons/profile.svg';
import settingsIcon from '../assets/icons/settings.svg';
import messagesIcon from '../assets/icons/messages.svg';
import logoutIcon from '../assets/icons/logout.svg';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: dashboardIcon, path: '/admin/dashboard' },
    { name: 'Projects', icon: projectsIcon, path: '/admin/projects' },
    { name: 'Skills', icon: skillsIcon, path: '/admin/skills' },
    { name: 'Experience', icon: experienceIcon, path: '/admin/experience' },
    { name: 'Profile', icon: profileIcon, path: '/admin/profile' },
    { name: 'Settings', icon: settingsIcon, path: '/admin/settings' },
    { name: 'Messages', icon: messagesIcon, path: '/admin/messages' },
  ];

  const handleNavigation = (item) => {
    setActiveItem(item.name);
    navigate(item.path);
  };

  const handleLogout = () => {
   
    console.log('Logging out...');
    navigate('/admin/login');
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div className="sidebar-profile-image">
          <img 
            src="/path-to-your-profile-image.jpg" 
            alt="Profile" 
            className="sidebar-avatar"
          />
        </div>
        <div className="sidebar-header-text">
          <h2 className="sidebar-title">Admin Panel</h2>
          <p className="sidebar-subtitle">Portfolio Manager</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {menuItems.map((item) => {
            const isActive = activeItem === item.name;
            
            return (
              <li key={item.name} className="sidebar-menu-item">
                <button
                  onClick={() => handleNavigation(item)}
                  className={`sidebar-nav-button ${isActive ? 'sidebar-nav-button-active' : ''}`}
                >
                  <img 
                    src={item.icon} 
                    alt={`${item.name} icon`} 
                    className="sidebar-icon"
                  />
                  <span className="sidebar-label">{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button onClick={handleLogout} className="sidebar-logout-button">
          <img 
            src={logoutIcon} 
            alt="Logout icon" 
            className="sidebar-icon"
          />
          <span className="sidebar-label">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;