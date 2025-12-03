import React, { useState } from 'react';
import Sidebar from '../Componants/Sidebar';
import DashboardHeader from '../Componants/DashboardHeader';
import ProfileImageUpload from '../Componants/ProfileImageUpload';
import BasicInfoForm from '../Componants/BasicInfoForm';
import ContactInfoForm from '../Componants/ContactInfoForm';
import SocialLinksForm from '../Componants/Sociallinksform';
import './ProfileSettings.css';

const ProfileSettings = () => {
  const [profileData, setProfileData] = useState({
    image: 'https://via.placeholder.com/120',
    fullName: 'habiba elbanna',
    jobTitle: 'Full Stack Developer & UI/UX Designer',
    bio: '',
    email: 'habibaelbanna@example.com',
    website: 'https://habibaelbanna.com',
    linkedin: 'https://linkedin.com/in/habibaelbanna',
    github: 'https://github.com/habibaelbanna',
    behance: 'https://behance.net/habibaelbanna'
  });

  const [hasChanges, setHasChanges] = useState(false);

  const handleImageChange = (newImage) => {
    setProfileData(prev => ({ ...prev, image: newImage }));
    setHasChanges(true);
  };

  const handleBasicInfoChange = (data) => {
    setProfileData(prev => ({ ...prev, ...data }));
    setHasChanges(true);
  };

  const handleContactChange = (data) => {
    setProfileData(prev => ({ ...prev, ...data }));
    setHasChanges(true);
  };

  const handleSocialChange = (data) => {
    setProfileData(prev => ({ ...prev, ...data }));
    setHasChanges(true);
  };

  const handleSave = () => {
    console.log('Saving profile data:', profileData);
    // Add your save logic here (API call, etc.)
    setHasChanges(false);
    alert('Profile settings saved successfully!');
  };

  const handleCancel = () => {
    // Reset to original data or navigate away
    console.log('Canceling changes');
    setHasChanges(false);
  };

  return (
    <>
      <Sidebar />
      <DashboardHeader />
      <div className="profile-settings-page">
        {/* Page Header */}
        <div className="page-header">
          <div className="page-header-content">
            <h1>Profile Settings</h1>
            <p>Manage your personal information and contact details.</p>
          </div>
        </div>

        {/* Profile Form */}
        <div className="profile-form-container">
          <ProfileImageUpload 
            currentImage={profileData.image}
            onImageChange={handleImageChange}
          />

          <BasicInfoForm 
            initialData={{
              fullName: profileData.fullName,
              jobTitle: profileData.jobTitle,
              bio: profileData.bio
            }}
            onDataChange={handleBasicInfoChange}
          />

          <ContactInfoForm 
            initialData={{
              email: profileData.email,
              website: profileData.website
            }}
            onDataChange={handleContactChange}
          />

          <SocialLinksForm 
            initialData={{
              linkedin: profileData.linkedin,
              github: profileData.github,
              behance: profileData.behance
            }}
            onDataChange={handleSocialChange}
          />
        </div>

        {/* Action Buttons */}
        <div className="profile-actions">
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button 
            className={`save-btn ${hasChanges ? 'save-btn-active' : ''}`}
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;