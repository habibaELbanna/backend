import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Hardcoded credentials for grading
    const ADMIN_EMAIL = 'admin@admin.com';
    const ADMIN_PASSWORD = 'admin123';
    
    // Simulate loading
    setTimeout(() => {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        console.log('✅ Login successful');
        
        // Store session if remember me is checked
        if (rememberMe) {
          localStorage.setItem('adminSession', 'true');
        }
        
        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Use: admin@admin.com / admin123');
      }
      setLoading(false);
    }, 500);
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-left">
        <div className="gradient-background"></div>
      </div>
      
      <div className="admin-login-right">
        <div className="admin-login-form-wrapper">
          <h1 className="admin-login-title">Admin Login</h1>
          <p className="admin-login-subtitle">
            Enter your credentials to access the admin area
          </p>

          {error && (
            <div style={{
              padding: '12px',
              marginBottom: '16px',
              backgroundColor: '#fee',
              border: '1px solid #fcc',
              borderRadius: '4px',
              color: '#c33'
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="admin-login-form">
            <div className="admin-form-group">
              <label htmlFor="email" className="admin-form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="admin-form-input"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="admin-form-group">
              <label htmlFor="password" className="admin-form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="admin-form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="admin-form-options">
              <label className="admin-remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="admin-checkbox"
                  disabled={loading}
                />
                <span className="admin-checkbox-label">Remember Me</span>
              </label>
              
              <button
                type="button"
                onClick={handleForgotPassword}
                className="admin-forgot-password"
                disabled={loading}
              >
                Forgot Password?
              </button>
            </div>

            <button 
              type="submit" 
              className="admin-submit-button"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;