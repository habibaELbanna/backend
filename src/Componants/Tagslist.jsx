import React from 'react';
import './TagsList.css';

const TagsList = ({ tags, onDelete }) => {
  return (
    <div className="tags-list">
      <h2 className="list-title">Tags ({tags.length})</h2>
      <div className="tags-grid">
        {tags.map((tag) => (
          <div key={tag.id} className="tag-card">
            <div className="tag-header">
              <div className="tag-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
              </div>
              <div className="tag-info">
                <h3 className="tag-name">{tag.name}</h3>
                <p className="tag-items">{tag.itemCount} items</p>
              </div>
            </div>
            <p className="tag-description">{tag.description}</p>
            <div className="tag-footer">
              <div className="tag-date">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>{tag.date}</span>
              </div>
              <button 
                className="delete-btn"
                onClick={() => onDelete(tag.id)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6"/>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsList;