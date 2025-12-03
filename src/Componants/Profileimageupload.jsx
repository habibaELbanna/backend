import React, { useState } from 'react';
import './ProfileImageUpload.css';

const ProfileImageUpload = ({ currentImage, onImageChange }) => {
  const [imageUrl, setImageUrl] = useState(currentImage || '');

  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    setImageUrl(newUrl);
    if (onImageChange) {
      onImageChange(newUrl);
    }
  };

  return (
    <div className="profile-image-section">
      <h3 className="section-title">Profile Picture</h3>
      
      <div className="profile-image-content">
        <div className="profile-image-preview">
          <img 
            src={imageUrl || 'https://via.placeholder.com/120'} 
            alt="Profile" 
            className="profile-preview-img"
          />
        </div>

        <div className="profile-image-input-group">
          <label className="input-label">Profile Picture URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={handleUrlChange}
            placeholder="https://images..."
            className="profile-input"
          />
          <span className="input-hint">Recommended: Square image, at least 400x400px</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileImageUpload;