import React, { useState, useEffect } from 'react';
import Sidebar from '../Componants/Sidebar';
import DashboardHeader from '../Componants/DashboardHeader';
import WelcomeBanner from '../Componants/WelcomeBanner';
import ProjectCard from '../Componants/Projectcard';
import NewProjectForm from '../Componants/Newprojectmodal';
import EditProjectModal from '../Componants/Editprojectmodal';
import DeleteProjectModal from '../Componants/Deleteprojectmodal';
import './ProjectManagement.css';
import { supabase } from './Supabase';

const ProjectManagement = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects on component mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      console.log('🔍 Fetching projects...');
      
      const { data, error } = await supabase
        .from('Projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      console.log('✅ Projects fetched:', data);
      setProjects(data);
    } catch (error) {
      console.error('❌ Error fetching projects:', error);
      alert('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  const handleEditProject = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setSelectedProject(project);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async (updatedProject) => {
    try {
      console.log('💾 Updating project:', updatedProject);

      const { data, error } = await supabase
        .from('Projects')
        .update({
          Title: updatedProject.title,
          project_description: updatedProject.description,
          Hero_image: updatedProject.image,
          section_type: updatedProject.category?.toLowerCase(),
          slug: updatedProject.slug || updatedProject.title.toLowerCase().replace(/\s+/g, '-')
        })
        .eq('id', updatedProject.id)
        .select();

      if (error) throw error;

      console.log('✅ Project updated:', data);
      
      // Refresh projects list
      await fetchProjects();
      
      setIsEditModalOpen(false);
      setSelectedProject(null);
      alert('Project updated successfully!');
    } catch (error) {
      console.error('❌ Error updating project:', error);
      alert('Failed to update project');
    }
  };

  const handleDeleteProject = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setSelectedProject(project);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedProject) {
      try {
        console.log('🗑️ Deleting project:', selectedProject.id);

        const { error } = await supabase
          .from('Projects')
          .delete()
          .eq('id', selectedProject.id);

        if (error) throw error;

        console.log('✅ Project deleted');
        
        // Remove from local state
        setProjects(projects.filter(project => project.id !== selectedProject.id));
        
        setIsDeleteModalOpen(false);
        setSelectedProject(null);
        alert('Project deleted successfully!');
      } catch (error) {
        console.error('❌ Error deleting project:', error);
        alert('Failed to delete project');
      }
    }
  };

  const handleNewProject = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleSaveProject = async (newProject) => {
    try {
      console.log('➕ Creating new project:', newProject);

      const { data, error } = await supabase
        .from('Projects')
        .insert([
          {
            Title: newProject.title,
            project_description: newProject.description,
            Hero_image: newProject.image,
            section_type: newProject.category?.toLowerCase(),
            slug: newProject.slug || newProject.title.toLowerCase().replace(/\s+/g, '-'),
            About_Project: newProject.description
          }
        ])
        .select();

      if (error) throw error;

      console.log('✅ Project created:', data);
      
      // Add to local state
      setProjects([data[0], ...projects]);
      
      setIsFormOpen(false);
      alert('Project created successfully!');
    } catch (error) {
      console.error('❌ Error creating project:', error);
      alert('Failed to create project');
    }
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  if (loading) {
    return (
      <>
        <Sidebar />
        <DashboardHeader />
        <div className="project-management-page">
          <div className="project-management-header">
            <div className="project-header-content">
              <h1>Manage Projects</h1>
              <p>Loading projects...</p>
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
      <div className="project-management-page">
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

        <NewProjectForm
          isOpen={isFormOpen}
          onClose={handleCloseForm}
          onSave={handleSaveProject}
        />

        <div className="project-count">
          <span>{projects.length} projects</span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.Hero_image}
              title={project.Title}
              description={project.project_description}
              category={project.section_type}
              tags={[]} // Add tags logic if you have them
              codeLink={null}
              demoLink={null}
              onEdit={() => handleEditProject(project.id)}
              onDelete={() => handleDeleteProject(project.id)}
            />
          ))}
        </div>
      </div>

      <EditProjectModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveEdit}
        project={selectedProject}
      />

      <DeleteProjectModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        projectTitle={selectedProject?.Title}
      />
    </>
  );
};

export default ProjectManagement;