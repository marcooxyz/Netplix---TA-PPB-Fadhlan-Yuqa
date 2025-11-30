// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple authentication logic
    if (username === 'yuqa' && password === '2130') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      {/* Netflix Logo */}
      <img src="/public.PNG" alt="Netflix Logo" className="netflix-logo" />

      {/* Login Form */}
      <form onSubmit={handleLogin} className="login-form">
        <h2>Sign In</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="login-button">Sign In</button>
      </form>

      {/* Footer */}
      <div className="login-footer">
        <p>New to Netplix? <a href="/">Sign up now.</a></p>
        <p className="login-disclaimer">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </div>
    </div>
  );
};

export default Login;
