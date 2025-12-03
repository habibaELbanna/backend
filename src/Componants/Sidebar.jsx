import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

import dashboardIcon from '../Assets/sidebar/dashboard.svg';
import projectsIcon from '../Assets/sidebar/projects.svg';
import skillsIcon from '../Assets/sidebar/skills.svg';
import profileIcon from '../Assets/sidebar/profile.svg';
import settingsIcon from '../Assets/sidebar/settings.svg';
import messagesIcon from '../Assets/sidebar/messages.svg';
import logoutIcon from '../Assets/sidebar/logout.svg';
import profile from '../Assets/sidebar/profileimage.svg';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: dashboardIcon, path: '/dashboard' },
    { name: 'Projects', icon: projectsIcon, path: '/projectmanagment' },
    { name: 'Skills and Experience', icon: skillsIcon, path: '/skillsandexperiance' },
    // Uncomment these when pages are ready:
    // { name: 'Profile', icon: profileIcon, path: '/profile' },
    // { name: 'Settings', icon: settingsIcon, path: '/settings' },
    // { name: 'Messages', icon: messagesIcon, path: '/messages' },
  ];

  // Set active item based on current location
  useEffect(() => {
    const currentPath = location.pathname;
    const activeMenuItem = menuItems.find(item => item.path === currentPath);
    if (activeMenuItem) {
      setActiveItem(activeMenuItem.name);
    }
  }, [location.pathname]);

  const handleNavigation = (item) => {
    setActiveItem(item.name);
    navigate(item.path);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userToken');
    
    console.log('Logging out...');
    setIsMobileMenuOpen(false);
    
    // Navigate to login page
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Burger Button */}
      <button 
        className="burger-menu-button" 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span className={`burger-line ${isMobileMenuOpen ? 'burger-line-open' : ''}`}></span>
        <span className={`burger-line ${isMobileMenuOpen ? 'burger-line-open' : ''}`}></span>
        <span className={`burger-line ${isMobileMenuOpen ? 'burger-line-open' : ''}`}></span>
      </button>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`sidebar-container ${isMobileMenuOpen ? 'sidebar-mobile-open' : ''}`}>
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
            <span className="sidebar-label">Logout</span>
          </button>
        </div> 
      </div>
    </>
  );
};

export default Sidebar;