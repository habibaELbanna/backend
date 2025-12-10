import React, { useState } from 'react';
import Sidebar from '../Componants/Sidebar';
import DashboardHeader from '../Componants/DashboardHeader';
import WelcomeBanner from '../Componants/WelcomeBanner';
import ContentTypeSelector from '../Componants/ContentTypeSelector';
import CategoriesList from '../Componants/CategoriesList';
import TagsList from '../Componants/TagsList';
import PagesList from '../Componants/PagesList';
import NewCategoryModal from '../Componants/NewCategoryModal';
import NewTagModal from '../Componants/NewTagModal';
import NewPageModal from '../Componants/NewPageModal';
import './Content.css';

const Content = () => {
  const [selectedType, setSelectedType] = useState('categories');
  const [isNewCategoryModalOpen, setIsNewCategoryModalOpen] = useState(false);
  const [isNewTagModalOpen, setIsNewTagModalOpen] = useState(false);
  const [isNewPageModalOpen, setIsNewPageModalOpen] = useState(false);

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Web Development',
      itemCount: 12,
      description: 'Projects related to web development, including front-end and back-end work.',
      date: '1/15/2024'
    },
    {
      id: 2,
      name: 'UI/UX Design',
      itemCount: 8,
      description: 'User interface and user experience design projects.',
      date: '1/20/2024'
    },
    {
      id: 3,
      name: 'Mobile Apps',
      itemCount: 6,
      description: 'Mobile application development for iOS and Android.',
      date: '2/1/2024'
    }
  ]);

  const [tags, setTags] = useState([
    {
      id: 1,
      name: 'React',
      itemCount: 15,
      description: 'Projects built with React framework.',
      date: '1/10/2024'
    },
    {
      id: 2,
      name: 'TypeScript',
      itemCount: 10,
      description: 'Projects utilizing TypeScript for type-safe development.',
      date: '1/12/2024'
    }
  ]);

  const [pages, setPages] = useState([
    {
      id: 1,
      title: 'About Me',
      subtitle: 'About Me',
      description: 'I am a passionate designer and developer with over 5 years',
      date: '1/5/2024'
    },
    {
      id: 2,
      title: 'Contact',
      subtitle: 'Get In Touch',
      description: 'Feel free to reach out for collaborations or just a friendly chat.',
      date: '1/6/2024'
    }
  ]);

  const handleAddNew = () => {
    if (selectedType === 'categories') {
      setIsNewCategoryModalOpen(true);
    } else if (selectedType === 'tags') {
      setIsNewTagModalOpen(true);
    } else if (selectedType === 'pages') {
      setIsNewPageModalOpen(true);
    }
  };

  const handleSaveCategory = (newCategory) => {
    setCategories([...categories, { ...newCategory, id: Date.now(), itemCount: 0, date: new Date().toLocaleDateString() }]);
  };

  const handleSaveTag = (newTag) => {
    setTags([...tags, { ...newTag, id: Date.now(), itemCount: 0, date: new Date().toLocaleDateString() }]);
  };

  const handleSavePage = (newPage) => {
    setPages([...pages, { ...newPage, id: Date.now(), date: new Date().toLocaleDateString() }]);
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  const handleDeleteTag = (id) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  const handleDeletePage = (id) => {
    setPages(pages.filter(page => page.id !== id));
  };

  return (
    <>
      <Sidebar />
      <DashboardHeader />
      <div className="content-page">
        <WelcomeBanner 
          title="Content" 
          subtitle="Organize your portfolio with categories, tags, and pages."
        />

        <ContentTypeSelector 
          selectedType={selectedType}
          onSelectType={setSelectedType}
          categoriesCount={categories.length}
          tagsCount={tags.length}
          pagesCount={pages.length}
          onAddNew={handleAddNew}
        />

        <div className="content-list-section">
          {selectedType === 'categories' && (
            <CategoriesList 
              categories={categories}
              onDelete={handleDeleteCategory}
            />
          )}
          {selectedType === 'tags' && (
            <TagsList 
              tags={tags}
              onDelete={handleDeleteTag}
            />
          )}
          {selectedType === 'pages' && (
            <PagesList 
              pages={pages}
              onDelete={handleDeletePage}
            />
          )}
        </div>
      </div>

      <NewCategoryModal 
        isOpen={isNewCategoryModalOpen}
        onClose={() => setIsNewCategoryModalOpen(false)}
        onSave={handleSaveCategory}
      />

      <NewTagModal 
        isOpen={isNewTagModalOpen}
        onClose={() => setIsNewTagModalOpen(false)}
        onSave={handleSaveTag}
      />

      <NewPageModal 
        isOpen={isNewPageModalOpen}
        onClose={() => setIsNewPageModalOpen(false)}
        onSave={handleSavePage}
      />
    </>
  );
};

export default Content;