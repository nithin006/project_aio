import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (name === 'admin' && password === 'admin') {
      // If the provided name and password are 'admin', directly navigate to '/admin'
      navigate('/admin');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/login', {
        name,
        password,
      });

      console.log(response.data); // Success message or handle as needed

      if (response.status === 200 && response.data.redirect) {
        // Redirect to the URL received from the server upon successful login
        navigate(response.data.redirect);
      }
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
    }
  };

  return (
    <div className="login-container mt-5">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="login-input"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="login-input"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        <br />
        <h5 className="login-link">If you're not registered, <a href="/register">click here</a></h5>
      </form>
    </div>
  );
};

export default Login;
