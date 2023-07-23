import React, { useState } from 'react';
import './App.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Weather' && password === 'Checker') {
      onLogin();
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>WeatherChecker Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button className="Login" type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
