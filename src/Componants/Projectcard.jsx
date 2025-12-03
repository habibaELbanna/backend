import React from 'react';
import './ProjectCard.css';


import editIcon from '../Assets/projects/edit.svg';
import deleteIcon from '../Assets/projects/delete.svg';
import codeIcon from '../Assets/projects/code.svg';
import demoIcon from '../Assets/projects/demo.svg';

const ProjectCard = ({ 
  image, 
  title, 
  description, 
  category, 
  tags, 
  onEdit, 
  onDelete,
  codeLink,
  demoLink 
}) => {
  return (
    <div className="project-card">
      {/* Project Image with Overlay */}
      <div className="project-card-image">
        <img src={image} alt={title} />
        <div className="project-card-overlay">
          <span className="project-category-badge">{category}</span>
          <div className="project-actions">
            <button className="project-action-btn" onClick={onEdit} aria-label="Edit project">
              <img src={editIcon} alt="Edit" />
            </button>
            <button className="project-action-btn" onClick={onDelete} aria-label="Delete project">
              <img src={deleteIcon} alt="Delete" />
            </button>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>

        {/* Tags */}
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div className="project-links">
          {codeLink && (
            <a href={codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
              <img src={codeIcon} alt="Code" />
              <span>Code</span>
            </a>
          )}
          {demoLink && (
            <a href={demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
              <img src={demoIcon} alt="Demo" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;