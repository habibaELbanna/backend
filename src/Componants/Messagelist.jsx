import React from 'react';
import './MessageList.css';

const MessageList = ({ 
  messages, 
  onSelectMessage, 
  onToggleStar, 
  onMarkAsRead,
  onMarkAsUnread,
  onDelete,
  filter,
  onFilterChange 
}) => {
  return (
    <div className="message-list-container">
      {/* Filter Tabs */}
      <div className="message-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All Messages
        </button>
        <button 
          className={`filter-btn ${filter === 'new' ? 'active' : ''}`}
          onClick={() => onFilterChange('new')}
        >
          New
        </button>
        <button 
          className={`filter-btn ${filter === 'read' ? 'active' : ''}`}
          onClick={() => onFilterChange('read')}
        >
          Read
        </button>

        {/* Search Bar */}
        <div className="message-search">
          <input 
            type="text" 
            placeholder="Search messages..." 
            className="search-input"
          />
        </div>
      </div>

      {/* Messages List */}
      <div className="messages-list">
        {messages.length === 0 ? (
          <div className="no-messages">
            <p>No messages found</p>
          </div>
        ) : (
          messages.map((message) => (
            <div 
              key={message.id} 
              className={`message-item ${!message.isRead ? 'unread' : ''}`}
              onClick={() => onSelectMessage(message)}
            >
              {/* Avatar */}
              <div className="message-avatar">
                <div className="avatar-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              {/* Message Content */}
              <div className="message-content">
                <div className="message-header">
                  <div className="message-sender">
                    <span className="sender-name">{message.name}</span>
                    {!message.isRead && <span className="unread-dot"></span>}
                    {message.isStarred && <span className="star-icon">⭐</span>}
                  </div>
                  <span className="message-date">{message.dateShort}</span>
                </div>

                <div className="message-email">{message.email}</div>
                <div className="message-subject">{message.subject}</div>
                <div className="message-preview">{message.preview}</div>
              </div>

              {/* Action Buttons */}
              <div className="message-actions" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleStar(message.id);
                  }}
                  title={message.isStarred ? "Unstar" : "Star"}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={message.isStarred ? "#fbbf24" : "none"} stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                </button>
                <button 
                  className="action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    message.isRead ? onMarkAsUnread(message.id) : onMarkAsRead(message.id);
                  }}
                  title={message.isRead ? "Mark as unread" : "Mark as read"}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </button>
                <button 
                  className="action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(message.id);
                  }}
                  title="Delete"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MessageList;