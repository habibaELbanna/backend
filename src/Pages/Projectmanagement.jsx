import React, { useState } from 'react';
import Sidebar from '../Componants/Sidebar';
import DashboardHeader from '../Componants/DashboardHeader';
import WelcomeBanner from '../Componants/WelcomeBanner';
import ProjectCard from '../Componants/ProjectCard';
import './ProjectManagement.css';

// Import project images (you'll need to replace these with your actual images)
import portfolioImg from '../Assets/projects/portfolio.jpg';
import pinkTaxiImg from '../Assets/projects/pinktaxi.jpg';
import esportsImg from '../Assets/projects/esports.jpg';
import kemetImg from '../Assets/projects/kemet.jpg';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: portfolioImg,
      title: 'Portfolio Website Redesign',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode support, and dynamic content loading.',
      category: 'Website',
      tags: ['React', 'Tailwind CSS', 'TypeScript'],
      codeLink: 'https://github.com/username/portfolio',
      demoLink: 'https://portfolio-demo.com'
    },
    {
      id: 2,
      image: pinkTaxiImg,
      title: 'Transportation App',
      description: 'Cross-platform mobile transportation application with secure authentication, real-time tracking updates, and data UI/UX.',
      category: 'Mobile App',
      tags: ['React Native', 'Node.js', 'Firebase'],
      codeLink: 'https://github.com/username/transport-app',
      demoLink: 'https://transport-demo.com'
    },
    {
      id: 3,
      image: esportsImg,
      title: 'E-sports Platform',
      description: 'Full-stack e-sports solution with payment integration, inventory management, and admin dashboard for managing matches and stats.',
      category: 'Web App',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      codeLink: 'https://github.com/username/esports',
      demoLink: 'https://esports-demo.com'
    },
    {
      id: 4,
      image: kemetImg,
      title: 'history website',
      description: 'Real-time analytics dashboard with interactive charts, data visualization, and customizable reports for business intelligence.',
      category: 'Dashboard',
      tags: ['Vue.js', 'Chart.js', 'Express'],
      codeLink: 'https://github.com/username/history-website',
      demoLink: null
    }
  ]);

  const handleEditProject = (projectId) => {
    console.log('Edit project:', projectId);
    // Add your edit logic here
  };

  const handleDeleteProject = (projectId) => {
    console.log('Delete project:', projectId);
    // Add your delete logic here
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== projectId));
    }
  };

  const handleNewProject = () => {
    console.log('Create new project');
    // Add your new project logic here
  };

  return (
    <>
      <Sidebar />
      <DashboardHeader />
      <div className="project-management-page">
        {/* Custom Banner for Project Management */}
        <div className="project-management-header">
          <div className="project-header-content">
            <h1>Manage Projects</h1>
            <p>Add, edit, and organize your portfolio projects.</p>
          </div>
          <button className="new-project-btn" onClick={handleNewProject}>
            <span>+</span>
            New Project
          </button>
        </div>

        {/* Project Count */}
        <div className="project-count">
          <span>{projects.length} projects</span>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              category={project.category}
              tags={project.tags}
              codeLink={project.codeLink}
              demoLink={project.demoLink}
              onEdit={() => handleEditProject(project.id)}
              onDelete={() => handleDeleteProject(project.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectManagement;