import React from 'react';
import './TopPerforming.css';

// Import your icons
import eyeIcon from '../Assets/dashboard/eyes.png';
import heartIcon from '../Assets/dashboard/heartr.png';
import fireIcon from '../Assets/dashboard/fire.png';
import sparkleIcon from '../Assets/dashboard/star.png';

const TopPerforming = () => {
  const performers = [
    {
      id: 1,
      icon: eyeIcon,
      category: 'Most Viewed',
      title: 'E-commerce Platform',
      metric: '45.2K views',
      change: '+18%',
      changeType: 'positive'
    },
    {
      id: 2,
      icon: heartIcon,
      category: 'Most Liked',
      title: 'Dashboard Analytics',
      metric: '3.8K likes',
      change: '+24%',
      changeType: 'positive'
    },
    {
      id: 3,
      icon: fireIcon,
      category: 'Trending',
      title: 'Portfolio Redesign',
      metric: '892 interactions',
      change: '+156%',
      changeType: 'positive'
    },
    {
      id: 4,
      icon: sparkleIcon,
      category: 'Recently Published',
      title: 'Mobile App UI',
      metric: '2 days ago',
      badge: 'New',
      badgeColor: 'green'
    }
  ];

  return (
    <div className="top-performing">
      <h3 className="performing-title">Top Performing</h3>
      
      <div className="performing-list">
        {performers.map((item) => (
          <div key={item.id} className="performing-item">
            <div className="performing-icon">
              <img src={item.icon} alt="" />
            </div>
            <div className="performing-content">
              <span className="performing-category">{item.category}</span>
              <h4 className="performing-name">{item.title}</h4>
              <span className="performing-metric">{item.metric}</span>
            </div>
            <div className="performing-change">
              {item.badge ? (
                <span className={`change-badge badge-${item.badgeColor}`}>
                  {item.badge}
                </span>
              ) : (
                <span className={`change-value change-${item.changeType}`}>
                  {item.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerforming;