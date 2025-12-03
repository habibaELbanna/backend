import React, { useState } from 'react';
import './Contactinfoform.css';


import emailIcon from '../Assets/profile/email.svg';
import websiteIcon from '../Assets/profile/website.svg';

const ContactInfoForm = ({ initialData, onDataChange }) => {
  const [contactData, setContactData] = useState({
    email: initialData?.email || '',
    website: initialData?.website || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData(prev => ({ ...prev, [name]: value }));

    if (onDataChange) {
      onDataChange({ ...contactData, [name]: value });
    }
  };

  return (
    <div className="contact-info-section">
      <h3 className="section-title">Contact Information</h3>

      <div className="form-group">
        <label className="form-label">Email Address</label>
        <div className="input-with-icon">
          <img src={emailIcon} alt="" className="input-icon" />
          <input
            type="email"
            name="email"
            value={contactData.email}
            onChange={handleChange}
            placeholder="habibaelbanna@example.com"
            className="form-input"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Website</label>
        <div className="input-with-icon">
          <img src={websiteIcon} alt="" className="input-icon" />
          <input
            type="url"
            name="website"
            value={contactData.website}
            onChange={handleChange}
            placeholder="https://habibaelbanna.com"
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;