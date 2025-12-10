import React, { useState } from 'react';
import './NewCategoryModal.css';

const NewCategoryModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    seoTitle: '',
    metaDescription: '',
    slug: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.name && formData.content) {
      onSave(formData);
      setFormData({ name: '', content: '', seoTitle: '', metaDescription: '', slug: '' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="ncm-modal-overlay" onClick={onClose}>
      <div className="ncm-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="ncm-modal-header">
          <h2>New Category</h2>
          <button className="ncm-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="ncm-modal-body">
          <div className="ncm-form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter category name..."
              className="ncm-input"
            />
          </div>

          <div className="ncm-form-group">
            <label>Content</label>
            <div className="ncm-editor-toolbar">
              <button type="button">↶</button>
              <button type="button">↷</button>
              <button type="button">🖨</button>
              <button type="button">📋</button>
              <select className="ncm-toolbar-select"><option>100%</option></select>
              <select className="ncm-toolbar-select"><option>Paragraph text</option></select>
              <select className="ncm-toolbar-select"><option>Arial</option></select>
              <input type="number" className="ncm-toolbar-input" defaultValue="00" />
              <button type="button"><strong>B</strong></button>
              <button type="button"><em>I</em></button>
              <button type="button"><u>U</u></button>
              <button type="button"><s>S</s></button>
              <button type="button">🎨</button>
              <button type="button">A</button>
              <button type="button">🔗</button>
              <button type="button">🖼</button>
            </div>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="ncm-textarea"
              rows="10"
            />
          </div>

          <div className="ncm-form-group">
            <label>SEO Title</label>
            <input
              type="text"
              name="seoTitle"
              value={formData.seoTitle}
              onChange={handleChange}
              placeholder="Enter category SEO title..."
              className="ncm-input"
            />
          </div>

          <div className="ncm-form-group">
            <label>Meta Description</label>
            <input
              type="text"
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleChange}
              placeholder="Enter category meta description..."
              className="ncm-input"
            />
          </div>

          <div className="ncm-form-group">
            <label>Slug</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="Enter category slug..."
              className="ncm-input"
            />
          </div>
        </div>

        <div className="ncm-modal-footer">
          <button className="ncm-btn ncm-btn-primary" onClick={handleSubmit}>
            💾 Save
          </button>
          <button className="ncm-btn ncm-btn-secondary" onClick={onClose}>
            ✕ Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCategoryModal;