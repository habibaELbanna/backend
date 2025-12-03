import React from 'react';
import './RecentActivity.css';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      icon: '✓',
      iconColor: 'blue',
      title: 'E-commerce Platform published successfully',
      time: '2 hours ago'
    },
    {
      id: 2,
      icon: '👁',
      iconColor: 'blue',
      title: 'Portfolio Redesign received 234 new views',
      time: '3 hours ago'
    },
    {
      id: 3,
      icon: '❤',
      iconColor: 'red',
      title: 'Dashboard Analytics got 42 new likes',
      time: '5 hours ago'
    },
    {
      id: 4,
      icon: '⚠',
      iconColor: 'yellow',
      title: 'Mobile Banking App requires update',
      time: '1 day ago'
    },
    {
      id: 5,
      icon: '✓',
      iconColor: 'blue',
      title: 'New media assets uploaded',
      time: '2 days ago'
    }
  ];

  return (
    <div className="recent-activity">
      <h3 className="activity-title">Recent Activity</h3>
      
      <div className="activity-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className={`activity-icon icon-${activity.iconColor}`}>
              <span>{activity.icon}</span>
            </div>
            <div className="activity-content">
              <p className="activity-text">{activity.title}</p>
              <span className="activity-time">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;