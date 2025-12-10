import React from 'react';
import './DeleteProjectModal.css';

const DeleteProjectModal = ({ isOpen, onClose, onConfirm, projectTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="dpm-modal-overlay" onClick={onClose}>
      <div className="dpm-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="dpm-modal-content">
          <h2>Delete Project</h2>
          <p>
            Are you sure you want to delete this project? This action cannot be undone.
          </p>
          {projectTitle && (
            <div className="dpm-project-name">
              <strong>Project:</strong> {projectTitle}
            </div>
          )}
        </div>
        
        <div className="dpm-modal-footer">
          <button className="dpm-btn dpm-btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="dpm-btn dpm-btn-danger" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProjectModal;