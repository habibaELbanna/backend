import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './Sidebar.css';


import dashboardIcon from '../Assets/sidebar/dashboard.svg';
import projectsIcon from '../Assets/sidebar/projects.svg';
import skillsIcon from '../Assets/sidebar/skills.svg';
import experienceIcon from '../Assets/sidebar/experience.svg';
import profileIcon from '../Assets/sidebar/profile.svg';
import settingsIcon from '../Assets/sidebar/settings.svg';
import messagesIcon from '../Assets/sidebar/messages.svg';
import logoutIcon from '../Assets/sidebar/logout.svg';
import profile from '../Assets/sidebar/profileimage.svg';

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
            src={profile}
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
          <Link className='logout' to = '/'>
          <span className="sidebar-label">Logout</span>
          </Link>
        </button>
      </div> 
    </div>
  );
};

export default Sidebar;