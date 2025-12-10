import React, { useState, useEffect } from 'react';
import './Editprojectmodal.css';

const EditProjectModal = ({ isOpen, onClose, onSave, project }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    tags: '',
    imageUrl: '',
    githubUrl: '',
    demoUrl: ''
  });

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || '',
        description: project.description || '',
        category: project.category || '',
        tags: Array.isArray(project.tags) ? project.tags.join(', ') : '',
        imageUrl: project.image || '',
        githubUrl: project.codeLink || '',
        demoUrl: project.demoLink || ''
      });
    }
  }, [project]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.description) {
      alert('Please fill in required fields (Title and Description)');
      return;
    }

    const updatedProject = {
      ...project,
      title: formData.title,
      description: formData.description,
      category: formData.category,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      image: formData.imageUrl,
      codeLink: formData.githubUrl,
      demoLink: formData.demoUrl
    };

    onSave(updatedProject);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="epm-modal-overlay" onClick={onClose}>
      <div className="epm-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="epm-modal-header">
          <h2>Edit Project</h2>
          <button className="epm-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="epm-modal-body">
          {/* Project Title */}
          <div className="epm-form-group">
            <label>Project Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Mobile transportation App"
              className="epm-input"
            />
          </div>

          {/* Description */}
          <div className="epm-form-group">
            <label>Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your project"
              className="epm-textarea"
              rows="4"
            />
          </div>

          {/* Category */}
          <div className="epm-form-group">
            <label>Category *</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              placeholder="Mobile App"
              className="epm-input"
            />
          </div>

          {/* Tags */}
          <div className="epm-form-group">
            <label>Tags</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="React Native, Node.js, Firebase"
              className="epm-input"
            />
          </div>

          {/* Image URL */}
          <div className="epm-form-group">
            <label>Image URL *</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              placeholder="https://images.unsplash.com/photo-1609921212029-bb5a28e609607?crop=entropy&..."
              className="epm-input"
            />
          </div>

          {/* Image Preview */}
          {formData.imageUrl && (
            <div className="epm-image-preview">
              <img src={formData.imageUrl} alt="Project preview" />
            </div>
          )}

          {/* GitHub URL */}
          <div className="epm-form-group">
            <label>GitHub URL</label>
            <input
              type="text"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleInputChange}
              placeholder="https://github.com/example/banking-app"
              className="epm-input"
            />
          </div>

          {/* Live Demo URL */}
          <div className="epm-form-group">
            <label>Live Demo URL</label>
            <input
              type="text"
              name="demoUrl"
              value={formData.demoUrl}
              onChange={handleInputChange}
              placeholder="https://example-app.com"
              className="epm-input"
            />
          </div>
        </div>

        <div className="epm-modal-footer">
          <button className="epm-btn epm-btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="epm-btn epm-btn-primary" onClick={handleSubmit}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProjectModal;