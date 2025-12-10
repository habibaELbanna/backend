import React from 'react';
import './ContentTypeSelector.css';

const ContentTypeSelector = ({ selectedType, onSelectType, categoriesCount, tagsCount, pagesCount, onAddNew }) => {
  return (
    <div className="content-type-selector">
      <div className="type-selector-title">Select Type</div>
      
      <div className="type-cards">
        <div 
          className={`type-card ${selectedType === 'categories' ? 'active' : ''}`}
          onClick={() => onSelectType('categories')}
        >
          <div className="type-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <div className="type-name">Categories</div>
          <div className="type-count">{categoriesCount}</div>
        </div>

        <div 
          className={`type-card ${selectedType === 'tags' ? 'active' : ''}`}
          onClick={() => onSelectType('tags')}
        >
          <div className="type-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
              <line x1="7" y1="7" x2="7.01" y2="7"/>
            </svg>
          </div>
          <div className="type-name">Tags</div>
          <div className="type-count">{tagsCount}</div>
        </div>

        <div 
          className={`type-card ${selectedType === 'pages' ? 'active' : ''}`}
          onClick={() => onSelectType('pages')}
        >
          <div className="type-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
          </div>
          <div className="type-name">Pages</div>
          <div className="type-count">{pagesCount}</div>
        </div>
      </div>

      <button className="add-new-btn" onClick={onAddNew}>
        <span>+</span>
        Add New {selectedType === 'categories' ? 'Category' : selectedType === 'tags' ? 'Tag' : 'Page'}
      </button>
    </div>
  );
};

export default ContentTypeSelector;