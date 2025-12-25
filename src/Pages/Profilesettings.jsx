import React, { useState, useEffect } from 'react';
import Sidebar from '../Componants/Sidebar';
import DashboardHeader from '../Componants/DashboardHeader';
import ProfileImageUpload from '../Componants/Profileimageupload';
import BasicInfoForm from '../Componants/Basicinfoform';
import ContactInfoForm from '../Componants/Contactinfoform';
import SocialLinksForm from '../Componants/Sociallinksform';
import './ProfileSettings.css';
import { supabase } from './Supabase';

const ProfileSettings = () => {
  const [profileData, setProfileData] = useState({
    image: '',
    fullName: '',
    jobTitle: '',
    bio: '',
    email: '',
    website: '',
    linkedin: '',
    github: '',
    behance: ''
  });

  const [hasChanges, setHasChanges] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      console.log('🔍 Fetching profile data...');
      
      const { data, error } = await supabase
        .from('About')
        .select('*')
        .eq('id', 1)
        .single();

      if (error) throw error;

      console.log('✅ Profile data fetched:', data);
      
      // Map Supabase data to component state
      setProfileData({
        image: data.myimage || '',
        fullName: 'Habiba Elbanna', // Add this field to About table if needed
        jobTitle: 'UX/UI Designer', // Add this field to About table if needed
        bio: data.discribtion2 || '',
        email: 'habiba@example.com', // Add this field to About table if needed
        website: '',
        linkedin: '',
        github: '',
        behance: ''
      });
    } catch (error) {
      console.error('❌ Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

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

  const handleSave = async () => {
    try {
      console.log('💾 Saving profile data:', profileData);

      const { data, error } = await supabase
        .from('About')
        .update({
          myimage: profileData.image,
          discribtion2: profileData.bio
        })
        .eq('id', 1)
        .select();

      if (error) throw error;

      console.log('✅ Profile updated:', data);
      setHasChanges(false);
      alert('Profile settings saved successfully!');
    } catch (error) {
      console.error('❌ Error saving profile:', error);
      alert('Failed to save profile settings');
    }
  };

  const handleCancel = () => {
    fetchProfileData();
    setHasChanges(false);
  };

  if (loading) {
    return (
      <>
        <Sidebar />
        <DashboardHeader />
        <div className="profile-settings-page">
          <div className="page-header">
            <div className="page-header-content">
              <h1>Profile Settings</h1>
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Sidebar />
      <DashboardHeader />
      <div className="profile-settings-page">
        <div className="page-header">
          <div className="page-header-content">
            <h1>Profile Settings</h1>
            <p>Manage your personal information and contact details.</p>
          </div>
        </div>

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

        <div className="profile-actions">
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button 
            className={`save-btn ${hasChanges ? 'save-btn-active' : ''}`}
            onClick={handleSave}
            disabled={!hasChanges}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;