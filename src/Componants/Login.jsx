import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add your authentication logic here
    console.log('Login attempt:', { email, password, rememberMe });
    
    // Example: Navigate to admin dashboard after successful login
    // navigate('/admin/dashboard');
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password page or show modal
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
              />
            </div>

            <div className="admin-form-options">
              <label className="admin-remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="admin-checkbox"
                />
                <span className="admin-checkbox-label">Remember Me</span>
              </label>
              
              <button
                type="button"
                onClick={handleForgotPassword}
                className="admin-forgot-password"
              >
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="admin-submit-button">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;