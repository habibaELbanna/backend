import React, { useState } from 'react';
import Sidebar from '../Componants/Sidebar';
import DashboardHeader from '../Componants/DashboardHeader';
import WelcomeBanner from '../Componants/WelcomeBanner';
import ProjectCard from '../Componants/Projectcard';
import NewProjectForm from '../Componants/NewProjectForm';
import EditProjectModal from '../Componants/EditProjectModal';
import DeleteProjectModal from '../Componants/DeleteProjectModal';
import './ProjectManagement.css';


import portfolioImg from '../Assets/projects/portfolio.svg';
import pinkTaxiImg from '../Assets/projects/pinktaxi.png';
import esportsImg from '../Assets/projects/esports.png';
import kemetImg from '../Assets/projects/kemet.png';

const ProjectManagement = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: portfolioImg,
      title: 'Portfolio Website Redesign',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode support, and dynamic content loading.',
      category: 'Website',
      tags: ['React.JS', ' CSS', 'Javascript'],
      codeLink: 'https://github.com/username/portfolio',
      demoLink: 'https://portfolio-demo.com'
    },
    {
      id: 2,
      image: pinkTaxiImg,
      title: 'Transportation App',
      description: 'Cross-platform mobile transportation application with secure authentication, real-time tracking updates, and data UI/UX.',
      category: 'Mobile App',
      tags: ['HTML', 'CSS', 'Javascript'],
      codeLink: 'https://github.com/username/transport-app',
      demoLink: 'https://transport-demo.com'
    },
    {
      id: 3,
      image: esportsImg,
      title: 'ESCAPE ROOM Platform',
      description: 'Full-stack e-sports solution with payment integration, inventory management, and admin dashboard for managing matches and stats.',
      category: 'Web App',
      tags: ['HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com/username/esports',
      demoLink: 'https://esports-demo.com'
    },
    {
      id: 4,
      image: kemetImg,
      title: 'history website',
      description: 'Real-time analytics dashboard with interactive charts, data visualization, and customizable reports for business intelligence.',
      category: 'Dashboard',
      tags: ['HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com/username/history-website',
      demoLink: null
    }
  ]);

  const handleEditProject = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setSelectedProject(project);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (updatedProject) => {
    setProjects(projects.map(project => 
      project.id === updatedProject.id ? updatedProject : project
    ));
    setIsEditModalOpen(false);
    setSelectedProject(null);
  };

  const handleDeleteProject = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setSelectedProject(project);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedProject) {
      setProjects(projects.filter(project => project.id !== selectedProject.id));
    }
    setIsDeleteModalOpen(false);
    setSelectedProject(null);
  };

  const handleNewProject = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleSaveProject = (newProject) => {
    setProjects([...projects, newProject]);
    console.log('New project saved:', newProject);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
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
            <span>{isFormOpen ? '−' : '+'}</span>
            {isFormOpen ? 'Close Form' : 'New Project'}
          </button>
        </div>

        {/* New Project Form (Accordion) */}
        <NewProjectForm
          isOpen={isFormOpen}
          onClose={handleCloseForm}
          onSave={handleSaveProject}
        />

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

      {/* Edit Project Modal */}
      <EditProjectModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveEdit}
        project={selectedProject}
      />

      {/* Delete Project Modal */}
      <DeleteProjectModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        projectTitle={selectedProject?.title}
      />
    </>
  );
};

export default ProjectManagement;