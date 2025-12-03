import React from 'react';
import './Experiencecard.css';

// Import icons
import editIcon from '../Assets/skills/edit.svg';
import deleteIcon from '../Assets/skills/delete.svg';
import companyIcon from '../Assets/skills/company.svg';
import calendarIcon from '../Assets/skills/calendar.svg';

const ExperienceCard = ({ 
  title, 
  company, 
  date, 
  description,
  onEdit,
  onDelete 
}) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h3 className="experience-title">{title}</h3>
        <div className="experience-actions">
          <button className="exp-action-btn" onClick={onEdit}>
            <img src={editIcon} alt="Edit" />
          </button>
          <button className="exp-action-btn" onClick={onDelete}>
            <img src={deleteIcon} alt="Delete" />
          </button>
        </div>
      </div>

      <div className="experience-meta">
        <div className="experience-meta-item">
          <img src={companyIcon} alt="Company" />
          <span>{company}</span>
        </div>
        <div className="experience-meta-item">
          <img src={calendarIcon} alt="Date" />
          <span>{date}</span>
        </div>
      </div>

      <p className="experience-description">{description}</p>
    </div>
  );
};

export default ExperienceCard;