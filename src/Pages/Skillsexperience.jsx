import React, { useState } from 'react';
import Sidebar from '../Componants/Sidebar';
import DashboardHeader from '../Componants/DashboardHeader';

import './SkillsExperience.css';


import figmaIcon from '../Assets/skills/figma.svg';
import photoshopIcon from '../Assets/skills/photoshop.svg';
import blenderIcon from '../Assets/skills/blender.svg';
import illustratorIcon from '../Assets/skills/illustrator.svg';
import afterEffectsIcon from '../Assets/skills/after-effects.svg';
import xrDesignIcon from '../Assets/skills/xr-design.svg';
import htmlIcon from '../Assets/skills/html.svg';
import cssIcon from '../Assets/skills/css.svg';
import jsIcon from '../Assets/skills/javascript.svg';
import reactIcon from '../Assets/skills/react.svg';
import uxResearchIcon from '../Assets/skills/ux-research.svg';
import criticalThinkingIcon from '../Assets/skills/critical-thinking.svg';
import empathyIcon from '../Assets/skills/empathy.svg';
import analyticalIcon from '../Assets/skills/analytical.svg';
import contextualIcon from '../Assets/skills/contextual.svg';
import problemSolvingIcon from '../Assets/skills/problem-solving.svg';

const SkillsExperience = () => {
  // Skills Data
  const [skillsData, setSkillsData] = useState({
    designTools: [
      { name: 'Figma', icon: figmaIcon },
      { name: 'Illustrator', icon: illustratorIcon },
      { name: 'Photoshop', icon: photoshopIcon },
      { name: 'After Effects', icon: afterEffectsIcon },
      { name: 'Blender', icon: blenderIcon },
      { name: 'XR Design', icon: xrDesignIcon }
    ],
    frontendDev: [
      { name: 'HTML', icon: htmlIcon },
      { name: 'CSS', icon: cssIcon },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'ReactJS', icon: reactIcon }
    ],
    softSkills: [
      { name: 'UX Research', icon: uxResearchIcon },
      { name: 'Critical Thinking', icon: criticalThinkingIcon },
      { name: 'Empathy', icon: empathyIcon },
      { name: 'Analytical Skills', icon: analyticalIcon },
      { name: 'Contextual Understanding', icon: contextualIcon },
      { name: 'Problem Solving', icon: problemSolvingIcon }
    ]
  });

  // Experience Data
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: 'UX/UI Designer Intern',
      company: 'Cyshield',
      date: 'Aug 2024',
      description: 'Working on designing user interfaces and experiences for cybersecurity products. Conducting user research, creating wireframes and prototypes, and collaborating with development teams to deliver intuitive solutions.'
    },
    {
      id: 2,
      title: 'Design Intern',
      company: 'Cyshield',
      date: 'Aug 2024 - Aug 2024',
      description: 'Assisted in creating design mockups and prototypes for various projects. Participated in design reviews and contributed to the development of design systems.'
    },
    {
      id: 3,
      title: 'Design Intern',
      company: 'Delta Electronic Systems',
      date: 'Jul 2024 - Jul 2024',
      description: 'Contributed to UI/UX design projects for electronic systems. Worked with cross-functional teams to implement design solutions.'
    },
    {
      id: 4,
      title: 'Summer Internship',
      company: 'Delta Electronic Systems',
      date: 'Jul 2023 - Jul 2023',
      description: 'Gained hands-on experience in design and development. Assisted senior designers with various projects and learned industry best practices.'
    }
  ]);

  const handleAddCategory = () => {
    console.log('Add new category');
  };

  const handleAddExperience = () => {
    console.log('Add new experience');
  };

  return (
    <>
      <Sidebar />
      <DashboardHeader />
      <div className="skills-experience-page">
        {/* Page Header */}
        <div className="page-header">
          <div className="page-header-content">
            <h1>Skills & Experience</h1>
            <p>Manage your skills and work experience</p>
          </div>
        </div>

        {/* Stats */}
        <SkillsStats 
          totalSkills={16}
          categories={3}
          workExperience={4}
          yearsExperience="Fresh grad"
        />

        {/* Skills Section */}
        <div className="section-header">
          <div className="section-header-content">
            <h2>Skills</h2>
            <p>Manage your technical and professional skills</p>
          </div>
          <button className="add-category-btn" onClick={handleAddCategory}>
            <span>+</span>
            Add Category
          </button>
        </div>

        <div className="skills-section">
          <SkillCategory
            title="Design Tools"
            skills={skillsData.designTools}
            onAddSkill={() => console.log('Add skill to Design Tools')}
            onEditCategory={() => console.log('Edit Design Tools')}
            onDeleteCategory={() => console.log('Delete Design Tools')}
          />

          <SkillCategory
            title="Frontend Development"
            skills={skillsData.frontendDev}
            onAddSkill={() => console.log('Add skill to Frontend')}
            onEditCategory={() => console.log('Edit Frontend')}
            onDeleteCategory={() => console.log('Delete Frontend')}
          />

          <SkillCategory
            title="UX & Soft Skills"
            skills={skillsData.softSkills}
            onAddSkill={() => console.log('Add skill to Soft Skills')}
            onEditCategory={() => console.log('Edit Soft Skills')}
            onDeleteCategory={() => console.log('Delete Soft Skills')}
          />
        </div>

        {/* Work Experience Section */}
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