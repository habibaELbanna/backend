import React from 'react';
import './SkillsStats.css';

// Import icons
import codeIcon from '../Assets/dashboard/code.svg';
import categoryIcon from '../Assets/dashboard/category.svg';
import briefcaseIcon from '../Assets/dashboard/briefcase.svg';
import calendarIcon from '../Assets/dashboard/calendar.svg';

const SkillsStats = ({ totalSkills, categories, workExperience, yearsExperience }) => {
  const stats = [
    {
      id: 1,
      label: 'Total Skills',
      value: totalSkills,
      icon: codeIcon,
      iconBg: '#3b82f6'
    },
    {
      id: 2,
      label: 'Categories',
      value: categories,
      icon: categoryIcon,
      iconBg: '#3b82f6'
    },
    {
      id: 3,
      label: 'Work Experience',
      value: workExperience,
      icon: briefcaseIcon,
      iconBg: '#3b82f6'
    },
    {
      id: 4,
      label: 'Years Experience',
      value: yearsExperience,
      icon: calendarIcon,
      iconBg: '#3b82f6'
    }
  ];

  return (
    <div className="skills-stats-grid">
      {stats.map((stat) => (
        <div key={stat.id} className="skill-stat-card">
          <div className="stat-card-header">
            <span className="stat-label">{stat.label}</span>
            <div className="stat-icon" style={{ backgroundColor: `${stat.iconBg}20` }}>
              <img src={stat.icon} alt={stat.label} />
            </div>
          </div>
          <div className="stat-value">{stat.value}</div>
        </div>
      ))}
    </div>
  );
};

export default SkillsStats;