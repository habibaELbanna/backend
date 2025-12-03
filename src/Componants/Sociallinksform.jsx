import React, { useState } from 'react';
import './SocialLinksForm.css';


import linkedinIcon from '../Assets/profile/linkedin.svg';
import githubIcon from '../Assets/profile/github.svg';
import behanceIcon from '../Assets/profile/behance.svg';

const SocialLinksForm = ({ initialData, onDataChange }) => {
  const [socialData, setSocialData] = useState({
    linkedin: initialData?.linkedin || '',
    github: initialData?.github || '',
    behance: initialData?.behance || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialData(prev => ({ ...prev, [name]: value }));

    if (onDataChange) {
      onDataChange({ ...socialData, [name]: value });
    }
  };

  return (
    <div className="social-links-section">
      <h3 className="section-title">Social Links</h3>

      <div className="form-group">
        <label className="form-label">LinkedIn</label>
        <div className="input-with-icon">
          <img src={linkedinIcon} alt="" className="input-icon" />
          <input
            type="url"
            name="linkedin"
            value={socialData.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/habibaelbanna"
            className="form-input"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">GitHub</label>
        <div className="input-with-icon">
          <img src={githubIcon} alt="" className="input-icon" />
          <input
            type="url"
            name="github"
            value={socialData.github}
            onChange={handleChange}
            placeholder="https://github.com/habibaelbanna"
            className="form-input"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Behance</label>
        <div className="input-with-icon">
          <img src={behanceIcon} alt="" className="input-icon" />
          <input
            type="url"
            name="behance"
            value={socialData.behance}
            onChange={handleChange}
            placeholder="https://behance.net/habibaelbanna"
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLinksForm;