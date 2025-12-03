import React from 'react';
import './RecentProjects.css';

// Import your icons
import externalLinkIcon from '../Assets/dashboard/external-link.svg';
import moreIcon from '../Assets/dashboard/more.svg';

const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'giza zoo Redesign',
      type: 'Website',
      views: '8,234',
      time: '5 hours ago',
      badge: 'live',
      badgeColor: 'blue'
    },
    {
      id: 2,
      title: 'Mobile cooking App',
      type: 'Website',
      views: '8,234',
      time: '5 hours ago',
      badge: 'live',
      badgeColor: 'blue'
    },
    {
      id: 3,
      title: 'e-sports website',
      type: 'Website',
      views: '8,234',
      time: '5 hours ago',
      badge: 'draft',
      badgeColor: 'yellow'
    },
    {
      id: 4,
      title: 'transportation app',
      type: 'Website',
      views: '8,234',
      time: '5 hours ago',
      badge: 'live',
      badgeColor: 'blue'
    },
    {
      id: 5,
      title: 'history app',
      type: 'Website',
      views: '8,234',
      time: '5 hours ago',
      badge: 'archived',
      badgeColor: 'gray'
    }
  ];

  return (
    <div className="recent-projects">
      <div className="recent-projects-header">
        <h2>Recent Projects</h2>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-main">
              <div className="project-info">
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-badge badge-${project.badgeColor}`}>
                    {project.badge}
                  </span>
                </div>
                <div className="project-meta">
                  <span className="project-type">{project.type}</span>
                  <span className="meta-separator">•</span>
                  <span className="project-views">{project.views} views</span>
                  <span className="meta-separator">•</span>
                  <span className="project-time">{project.time}</span>
                </div>
              </div>
              
              <div className="project-actions">
                <button className="icon-btn" aria-label="Open project">
                  <img src={externalLinkIcon} alt="Open" />
                </button>
                <button className="icon-btn" aria-label="More options">
                  <img src={moreIcon} alt="More" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;