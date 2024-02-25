import { Link } from 'react-router-dom';
import '../CSS/Profil.css'
import React, { useState } from 'react';


const LoginIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    userName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="cardLogIn">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="userName"
            placeholder="UserName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
          <button type="submit" id='submit'>Sign Up</button> 
        </form>
        <Link to="/singUp"><button type="submit">If You Have All Ready An Account Click here</button></Link>
      </div>
      
    </div>
  );
};

export default LoginIn
