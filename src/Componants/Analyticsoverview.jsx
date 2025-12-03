import React from 'react';
import { LineChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart } from 'recharts';
import './AnalyticsOverview.css';

const AnalyticsOverview = () => {
  const data = [
    { month: 'Jan', views: 3000, interactions: 2400 },
    { month: 'Feb', views: 4500, interactions: 3800 },
    { month: 'Mar', views: 8500, interactions: 6200 },
    { month: 'Apr', views: 5200, interactions: 4800 },
    { month: 'May', views: 4800, interactions: 4200 },
    { month: 'Jun', views: 5000, interactions: 4500 },
    { month: 'Jul', views: 5500, interactions: 4800 },
    { month: 'Aug', views: 5300, interactions: 4600 },
    { month: 'Sep', views: 5400, interactions: 4700 },
    { month: 'Oct', views: 5600, interactions: 4900 }
  ];

  return (
    <div className="analytics-overview">
      <div className="analytics-header">
        <h2>Analytics Overview</h2>
        <p>Portfolio performance over time</p>
      </div>
      
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#1e40af" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="interactionsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
          <XAxis 
            dataKey="month" 
            stroke="#9ca3af" 
            tick={{ fill: '#9ca3af', fontSize: 12 }}
          />
          <YAxis 
            stroke="#9ca3af" 
            tick={{ fill: '#9ca3af', fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1f2937', 
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Legend 
            wrapperStyle={{ color: '#9ca3af' }}
            iconType="circle"
          />
          <Area 
            type="monotone" 
            dataKey="views" 
            stroke="#3b82f6" 
            fill="url(#viewsGradient)" 
            strokeWidth={2}
            name="Views"
          />
          <Area 
            type="monotone" 
            dataKey="interactions" 
            stroke="#a855f7" 
            fill="url(#interactionsGradient)" 
            strokeWidth={2}
            name="Interactions"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsOverview;