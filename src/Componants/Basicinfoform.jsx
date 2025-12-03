import React, { useState } from 'react';
import './BasicInfoForm.css';

// Import icons
import userIcon from '../Assets/profile/user.svg';

const BasicInfoForm = ({ initialData, onDataChange }) => {
  const [formData, setFormData] = useState({
    fullName: initialData?.fullName || '',
    jobTitle: initialData?.jobTitle || '',
    bio: initialData?.bio || ''
  });

  const [charCount, setCharCount] = useState(formData.bio.length);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'bio') {
      if (value.length <= 246) {
        setFormData(prev => ({ ...prev, [name]: value }));
        setCharCount(value.length);
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (onDataChange) {
      onDataChange({ ...formData, [name]: value });
    }
  };

  return (
    <div className="basic-info-section">
      <h3 className="section-title">Basic Information</h3>

      <div className="form-group">
        <label className="form-label">
          Full Name <span className="required">*</span>
        </label>
        <div className="input-with-icon">
          <img src={userIcon} alt="" className="input-icon" />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="habiba elbanna"
            className="form-input"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">
          Job Title <span className="required">*</span>
        </label>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="Full Stack Developer & UI/UX Designer"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Bio / About Me</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Tell visitors about yourself, your experience, and what you do..."
          className="form-textarea"
          rows="5"
        />
        <div className="char-count">
          {charCount}/246 characters
        </div>
      </div>
    </div>
  );
};

export default BasicInfoForm;