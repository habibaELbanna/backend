import React from 'react';
import './TopPerforming.css';

const TopPerforming = () => {
  const performers = [
    {
      id: 1,
      icon: '👁',
      category: 'Most Viewed',
      title: 'E-commerce Platform',
      metric: '45.2K views',
      change: '+18%',
      changeType: 'positive'
    },
    {
      id: 2,
      icon: '❤',
      category: 'Most Liked',
      title: 'Dashboard Analytics',
      metric: '3.8K likes',
      change: '+24%',
      changeType: 'positive'
    },
    {
      id: 3,
      icon: '🔥',
      category: 'Trending',
      title: 'Portfolio Redesign',
      metric: '892 interactions',
      change: '+156%',
      changeType: 'positive'
    },
    {
      id: 4,
      icon: '✨',
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
              <span>{item.icon}</span>
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