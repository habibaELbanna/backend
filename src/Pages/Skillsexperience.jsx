import React, { useState, useEffect } from 'react';
import Sidebar from '../Componants/Sidebar';
import DashboardHeader from '../Componants/DashboardHeader';
import SkillsStats from '../Componants/Skillsstats';
import SkillCategory from '../Componants/Skillcategory';
import ExperienceCard from '../Componants/Experiencecard';
import './SkillsExperience.css';
import { supabase } from './Supabase';

const SkillsExperience = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: 'UX/UI Designer Intern',
      company: 'Cyshield',
      date: 'Aug 2024',
      description: 'Working on designing user interfaces and experiences for cybersecurity products.'
    },
    {
      id: 2,
      title: 'Design Intern',
      company: 'Delta Electronic Systems',
      date: 'Jul 2024',
      description: 'Contributed to UI/UX design projects for electronic systems.'
    },
    {
      id: 3,
      title: 'Summer Internship',
      company: 'Delta Electronic Systems',
      date: 'Jul 2023',
      description: 'Gained hands-on experience in design and development.'
    }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      console.log('🔍 Fetching skills...');
      
      const { data, error } = await supabase
        .from('Skills')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;

      console.log('✅ Skills fetched:', data);
      setSkills(data);
    } catch (error) {
      console.error('❌ Error fetching skills:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddSkill = async (skillData) => {
    try {
      console.log('➕ Adding skill:', skillData);

      const { data, error } = await supabase
        .from('Skills')
        .insert([
          {
            skillimg: skillData.image,
            skill_disc: skillData.name,
            alt: skillData.name
          }
        ])
        .select();

      if (error) throw error;

      console.log('✅ Skill added:', data);
      setSkills([...skills, data[0]]);
      alert('Skill added successfully!');
    } catch (error) {
      console.error('❌ Error adding skill:', error);
      alert('Failed to add skill');
    }
  };

  const handleDeleteSkill = async (skillId) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      try {
        console.log('🗑️ Deleting skill:', skillId);

        const { error } = await supabase
          .from('Skills')
          .delete()
          .eq('id', skillId);

        if (error) throw error;

        console.log('✅ Skill deleted');
        setSkills(skills.filter(skill => skill.id !== skillId));
        alert('Skill deleted successfully!');
      } catch (error) {
        console.error('❌ Error deleting skill:', error);
        alert('Failed to delete skill');
      }
    }
  };

  const handleAddExperience = () => {
    console.log('Add new experience');
    // Implement add experience modal/form
  };

  // Group skills by category (you can add a category column to Skills table later)
  const allSkills = skills.map(skill => ({
    id: skill.id,
    name: skill.skill_disc,
    icon: skill.skillimg
  }));

  if (loading) {
    return (
      <>
        <Sidebar />
        <DashboardHeader />
        <div className="skills-experience-page">
          <div className="page-header">
            <div className="page-header-content">
              <h1>Skills & Experience</h1>
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
      <div className="skills-experience-page">
        <div className="page-header">
          <div className="page-header-content">
            <h1>Skills & Experience</h1>
            <p>Manage your skills and work experience</p>
          </div>
        </div>

        <SkillsStats 
          totalSkills={skills.length}
          categories={1}
          workExperience={experiences.length}
          yearsExperience="Fresh grad"
        />

        <div className="section-header">
          <div className="section-header-content">
            <h2>Skills</h2>
            <p>Manage your technical and professional skills</p>
          </div>
          <button 
            className="add-category-btn" 
            onClick={() => {
              const name = prompt('Enter skill name:');
              const image = prompt('Enter skill image URL:');
              if (name && image) {
                handleAddSkill({ name, image });
              }
            }}
          >
            <span>+</span>
            Add Skill
          </button>
        </div>

        <div className="skills-section">
          <SkillCategory
            title="All Skills"
            skills={allSkills}
            onAddSkill={() => {
              const name = prompt('Enter skill name:');
              const image = prompt('Enter skill image URL:');
              if (name && image) {
                handleAddSkill({ name, image });
              }
            }}
            onEditCategory={() => console.log('Edit category')}
            onDeleteCategory={() => console.log('Delete category')}
          />
        </div>

        <div className="section-header">
          <div className="section-header-content">
            <h2>Work Experience</h2>
            <p>Your career history and achievements</p>
          </div>
          <button className="add-experience-btn" onClick={handleAddExperience}>
            <span>+</span>
            Add Experience
          </button>
        </div>

        <div className="experience-section">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              title={exp.title}
              company={exp.company}
              date={exp.date}
              description={exp.description}
              onEdit={() => console.log('Edit experience:', exp.id)}
              onDelete={() => console.log('Delete experience:', exp.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsExperience;