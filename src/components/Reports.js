import React, { useState } from 'react';
import './Reports.css';
import EnergyAnalytics from './EnergyAnalytics';

const Reports = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    console.log('Attempting login with:', { trimmedEmail, trimmedPassword });

    // Update this conditional with your actual credentials
    if (trimmedEmail === '218x1a05a4@khitguntur.ac.in' && trimmedPassword === 'tasleem') {
      setIsAuthenticated(true);
      setError('');
      localStorage.setItem('token', 'your_auth_token'); // Simulate storing a token
    } else {
      console.log('Invalid credentials');
      setError('Invalid email or password');
    }
  };

  return (
    <div className="reports-container">
      {isAuthenticated ? (
        <div className="reports-content">
          <h2>Energy Reports</h2>
          <p>Here are your detailed energy reports:</p>
          <EnergyAnalytics />
        </div>
      ) : (
        <div className="login-form">
          <h2>Please log in to view detailed reports.</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button">Log In</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Reports;
