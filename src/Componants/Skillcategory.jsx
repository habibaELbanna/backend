import React from 'react';
import './SkillCategory.css';

// Import icons
import editIcon from '../Assets/dashboard/edit.svg';
import deleteIcon from '../Assets/dashboard/delete.svg';

const SkillCategory = ({ title, skills, onAddSkill, onEditCategory, onDeleteCategory }) => {
  return (
    <div className="skill-category">
      <div className="skill-category-header">
        <h3 className="skill-category-title">{title}</h3>
        <div className="category-actions">
          <button className="add-skill-btn" onClick={onAddSkill}>
            + Add Skill
          </button>
          <button className="category-action-btn" onClick={onEditCategory}>
            <img src={editIcon} alt="Edit" />
          </button>
          <button className="category-action-btn" onClick={onDeleteCategory}>
            <img src={deleteIcon} alt="Delete" />
          </button>
        </div>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-content">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="skill-actions">
              <button className="skill-action-btn" onClick={() => skill.onEdit && skill.onEdit()}>
                <img src={editIcon} alt="Edit" />
              </button>
              <button className="skill-action-btn" onClick={() => skill.onDelete && skill.onDelete()}>
                <img src={deleteIcon} alt="Delete" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;