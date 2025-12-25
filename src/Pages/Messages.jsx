import React, { useState, useEffect } from 'react';
import Sidebar from '../Componants/Sidebar';
import DashboardHeader from '../Componants/DashboardHeader';
import WelcomeBanner from '../Componants/WelcomeBanner';
import StatCard from '../Componants/StatCard';
import MessageList from '../Componants/Messagelist';
import MessageDetail from '../Componants/Messagedetail';
import './Messages.css';
import { supabase } from './Supabase';

import TotalIcon from '../Assets/dashboard/message.svg';
import NewIcon from '../Assets/dashboard/openmessage.svg';
import ReadIcon from '../Assets/dashboard/read.svg';
import StarIcon from '../Assets/dashboard/starred.svg';

const Messages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch messages from Supabase
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      console.log('🔍 Fetching messages...');
      
      const { data, error } = await supabase
        .from('contactus')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      console.log('✅ Messages fetched:', data);

      // Transform data to match component format
      const transformedMessages = data.map(msg => ({
        id: msg.id,
        name: msg.Name,
        email: msg.Email,
        subject: msg.Subject,
        message: msg.Message,
        preview: msg.Message ? msg.Message.substring(0, 150) + '...' : '',
        date: new Date(msg.created_at).toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        dateShort: new Date(msg.created_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        isNew: true,
        isStarred: false,
        isRead: false
      }));

      setMessages(transformedMessages);
    } catch (error) {
      console.error('❌ Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

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
    // Implement archive logic if needed
  };

  const handleDelete = async (messageId) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        const { error } = await supabase
          .from('contactus')
          .delete()
          .eq('id', messageId);

        if (error) throw error;

        console.log('✅ Message deleted');
        setMessages(messages.filter(m => m.id !== messageId));
        
        if (selectedMessage?.id === messageId) {
          setSelectedMessage(null);
        }
      } catch (error) {
        console.error('❌ Error deleting message:', error);
        alert('Failed to delete message');
      }
    }
  };

  // Filter messages based on selected filter
  const filteredMessages = messages.filter(message => {
    if (filter === 'new') return !message.isRead;
    if (filter === 'read') return message.isRead;
    return true;
  });

  if (loading) {
    return (
      <>
        <Sidebar />
        <DashboardHeader />
        <div className="messages-page">
          <WelcomeBanner 
            title="Messages" 
            subtitle="Loading messages..."
          />
        </div>
      </>
    );
  }

  return (
    <>
      <Sidebar />
      <DashboardHeader />
      <div className="messages-page">
        <WelcomeBanner 
          title="Messages" 
          subtitle="Manage all messages from your contact form"
        />

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