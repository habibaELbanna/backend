import React, { useState } from 'react';
import Sidebar from '../Componants/Sidebar';
import DashboardHeader from '../Componants/DashboardHeader';
import WelcomeBanner from '../Componants/WelcomeBanner';
import StatCard from '../Componants/StatCard';
import MessageList from '../Componants/Messagelist';
import MessageDetail from '../Componants/Messagedetail';
import './Messages.css';


import TotalIcon from '../Assets/dashboard/message.svg';
import NewIcon from '../Assets/dashboard/openmessage.svg';
import ReadIcon from '../Assets/dashboard/read.svg';
import StarIcon from '../Assets/dashboard/starred.svg';

const Messages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'new', 'read'

  // Sample messages data - replace with your actual data
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'habiba',
      email: 'habiba@example.com',
      subject: 'Interested in collaborating on a project',
      preview: 'Hi there! I came across your portfolio and I\'m really impressed with your work, especially the E-commerce Platform project. I\'m currently working on a similar project and would love to discuss potential collaboration opportunities. Would you be available for a',
      message: `Hi there! I came across your portfolio and I'm really impressed with your work, especially the E-commerce Platform project. I'm currently working on a similar project and would love to discuss potential collaboration opportunities. Would you be available for a quick call this week?

Looking forward to hearing from you!

Best regards,
habiba`,
      date: 'Monday, November 25, 2024 at 10:30 AM',
      dateShort: 'Nov 25, 2024',
      isNew: true,
      isStarred: true,
      isRead: false
    },
    {
      id: 2,
      name: 'habiba',
      email: 'habiba@example.com',
      subject: 'Job Opportunity - Senior Frontend Developer',
      preview: 'Hello, We are a rapidly growing tech startup and we\'re looking for a talented Senior Frontend Developer to join our team. Your portfolio showcases exactly the kind of expertise we\'re looking for. The position offers: - Competitive salary ($120k-150k) - Fully',
      message: `Hello, We are a rapidly growing tech startup and we're looking for a talented Senior Frontend Developer to join our team. Your portfolio showcases exactly the kind of expertise we're looking for. The position offers: - Competitive salary ($120k-150k) - Fully remote - Exciting projects with cutting-edge tech`,
      date: 'Nov 24, 2024',
      dateShort: 'Nov 24, 2024',
      isNew: false,
      isStarred: false,
      isRead: false
    },
    {
      id: 3,
      name: 'habiba',
      email: 'habiba@designstudio.com',
      subject: 'Question about your Dashboard Analytics project',
      preview: 'Hi! I absolutely love your Dashboard Analytics project. The data visualization and UX are outstanding. I\'m currently working on a similar dashboard for a client and I was wondering if you could share some insights about your design process and the tools',
      message: `Hi! I absolutely love your Dashboard Analytics project. The data visualization and UX are outstanding. I'm currently working on a similar dashboard for a client and I was wondering if you could share some insights about your design process and the tools you used.`,
      date: 'Nov 23, 2024',
      dateShort: 'Nov 23, 2024',
      isNew: false,
      isStarred: false,
      isRead: true
    },
    {
      id: 4,
      name: 'habiba',
      email: 'habiba@agency.com',
      subject: 'Freelance Project Inquiry',
      preview: 'Good morning, Our agency is looking for a freelance developer to help us with a 3-month project. The project involves building a custom web application with React and integrating it with our existing backend. Budget: $15,000-$20,000 Timeline: 3 months',
      message: `Good morning, Our agency is looking for a freelance developer to help us with a 3-month project. The project involves building a custom web application with React and integrating it with our existing backend. Budget: $15,000-$20,000 Timeline: 3 months`,
      date: 'Nov 22, 2024',
      dateShort: 'Nov 22, 2024',
      isNew: true,
      isStarred: true,
      isRead: false
    },
    {
      id: 5,
      name: 'habiba',
      email: 'habiba@university.edu',
      subject: 'Guest Speaker Request',
      preview: 'Dear Portfolio Owner, I\'m a professor at State University and I teach a course on Modern Web Development. I would love to invite you as a guest speaker to share your experience and insights with my students. The session would be 1 hour long and can be',
      message: `Dear Portfolio Owner, I'm a professor at State University and I teach a course on Modern Web Development. I would love to invite you as a guest speaker to share your experience and insights with my students. The session would be 1 hour long and can be conducted remotely.`,
      date: 'Nov 21, 2024',
      dateShort: 'Nov 21, 2024',
      isNew: false,
      isStarred: false,
      isRead: true
    },
    {
      id: 6,
      name: 'habiba',
      email: 'habiba@gmail.com',
      subject: 'Portfolio feedback',
      preview: 'Hey! Just wanted to say your portfolio is amazing! The design is clean, modern, and the projects are really impressive. Keep up the great work! Cheers, Alex',
      message: `Hey! Just wanted to say your portfolio is amazing! The design is clean, modern, and the projects are really impressive. Keep up the great work! Cheers, Alex`,
      date: 'Nov 20, 2024',
      dateShort: 'Nov 20, 2024',
      isNew: false,
      isStarred: false,
      isRead: true
    },
    {
      id: 7,
      name: 'habiba',
      email: 'habiba@enterprise.com',
      subject: 'Contract Development Work',
      preview: 'Hello, We\'re an enterprise company looking for contract developers to help modernize our internal tools. Your experience with React and TypeScript makes you an ideal candidate. This would be a long-term contract (6-12 months) with possibility of extension.',
      message: `Hello, We're an enterprise company looking for contract developers to help modernize our internal tools. Your experience with React and TypeScript makes you an ideal candidate. This would be a long-term contract (6-12 months) with possibility of extension.`,
      date: 'Nov 19, 2024',
      dateShort: 'Nov 19, 2024',
      isNew: true,
      isStarred: false,
      isRead: false
    },
    {
      id: 8,
      name: 'habiba',
      email: 'habiba@nonprofit.org',
      subject: 'Pro Bono Project Request',
      preview: 'Dear Developer, Our nonprofit organization is looking for a developer who could help us build a website for our cause. We have a very limited budget but we\'re hoping to find someone willing to do pro bono or discounted work for a good cause. We help',
      message: `Dear Developer, Our nonprofit organization is looking for a developer who could help us build a website for our cause. We have a very limited budget but we're hoping to find someone willing to do pro bono or discounted work for a good cause. We help underprivileged children access education.`,
      date: 'Nov 18, 2024',
      dateShort: 'Nov 18, 2024',
      isNew: false,
      isStarred: false,
      isRead: true
    }
  ]);

  // Calculate stats
  const totalMessages = messages.length;
  const newMessages = messages.filter(m => !m.isRead).length;
  const readMessages = messages.filter(m => m.isRead).length;
  const starredMessages = messages.filter(m => m.isStarred).length;

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
    // Mark as read
    setMessages(messages.map(m => 
      m.id === message.id ? { ...m, isRead: true } : m
    ));
  };

  const handleBackToList = () => {
    setSelectedMessage(null);
  };

  const handleToggleStar = (messageId) => {
    setMessages(messages.map(m => 
      m.id === messageId ? { ...m, isStarred: !m.isStarred } : m
    ));
  };

  const handleMarkAsRead = (messageId) => {
    setMessages(messages.map(m => 
      m.id === messageId ? { ...m, isRead: true } : m
    ));
  };

  const handleMarkAsUnread = (messageId) => {
    setMessages(messages.map(m => 
      m.id === messageId ? { ...m, isRead: false } : m
    ));
  };

  const handleArchive = (messageId) => {
    console.log('Archive message:', messageId);
    // Implement archive logic
  };

  const handleDelete = (messageId) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      setMessages(messages.filter(m => m.id !== messageId));
      if (selectedMessage?.id === messageId) {
        setSelectedMessage(null);
      }
    }
  };

  // Filter messages based on selected filter
  const filteredMessages = messages.filter(message => {
    if (filter === 'new') return !message.isRead;
    if (filter === 'read') return message.isRead;
    return true; // 'all'
  });

  return (
    <>
      <Sidebar />
      <DashboardHeader />
      <div className="messages-page">
        {/* Banner Section */}
        <WelcomeBanner 
          title="Messages" 
          subtitle="Manage all messages from your contact form"
        />

        {/* Stats Cards */}
        <div className="messages-stats-grid">
          <StatCard 
            title="Total Messages"
            value={totalMessages}
            icon={TotalIcon}
            change=""
          />
          <StatCard 
            title="New Messages"
            value={newMessages}
            icon={NewIcon}
            change=""
          />
          <StatCard 
            title="Read Messages"
            value={readMessages}
            icon={ReadIcon}
            change=""
          />
          <StatCard 
            title="Starred"
            value={starredMessages}
            icon={StarIcon}
            change=""
          />
        </div>

        {/* Messages Content */}
        <div className="messages-content">
          {selectedMessage ? (
            <MessageDetail 
              message={selectedMessage}
              onBack={handleBackToList}
              onToggleStar={handleToggleStar}
              onArchive={handleArchive}
              onDelete={handleDelete}
            />
          ) : (
            <MessageList 
              messages={filteredMessages}
              onSelectMessage={handleSelectMessage}
              onToggleStar={handleToggleStar}
              onMarkAsRead={handleMarkAsRead}
              onMarkAsUnread={handleMarkAsUnread}
              onDelete={handleDelete}
              filter={filter}
              onFilterChange={setFilter}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Messages;