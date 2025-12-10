import React from 'react';
import './PagesList.css';

const PagesList = ({ pages, onDelete }) => {
  return (
    <div className="pages-list">
      <h2 className="list-title">Pages ({pages.length})</h2>
      <div className="pages-grid">
        {pages.map((page) => (
          <div key={page.id} className="page-card">
            <div className="page-header">
              <div className="page-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              </div>
              <div className="page-info">
                <h3 className="page-title">{page.title}</h3>
              </div>
            </div>
            <p className="page-subtitle">{page.subtitle}</p>
            <p className="page-description">{page.description}</p>
            <div className="page-footer">
              <div className="page-date">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>{page.date}</span>
              </div>
              <button 
                className="delete-btn"
                onClick={() => onDelete(page.id)}
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

export default PagesList;