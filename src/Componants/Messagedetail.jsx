import React from 'react';
import './MessageDetail.css';

const MessageDetail = ({ message, onBack, onToggleStar, onArchive, onDelete }) => {
  return (
    <div className="message-detail-container">
      {/* Header */}
      <div className="message-detail-header">
        <div className="header-left">
          <button className="back-btn" onClick={onBack}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <h2>{message.subject}</h2>
          {message.isNew && <span className="new-badge">New</span>}
        </div>
      </div>

      {/* Message Content Card */}
      <div className="message-detail-card">
        {/* Sender Info */}
        <div className="sender-info">
          <div className="sender-avatar">
            <div className="avatar-circle-large">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          <div className="sender-details">
            <h3>{message.name}</h3>
            <p>{message.email}</p>
          </div>
          <div className="message-date-time">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>{message.date}</span>
          </div>
        </div>

        {/* Message Body */}
        <div className="message-body">
          {message.message.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="message-actions-bottom">
          <button className="action-btn-primary" onClick={onBack}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Reply
          </button>
          <button className="action-btn-secondary" onClick={() => onArchive(message.id)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="21 8 21 21 3 21 3 8"/>
              <rect x="1" y="3" width="22" height="5"/>
              <line x1="10" y1="12" x2="14" y2="12"/>
            </svg>
            Archive
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageDetail;