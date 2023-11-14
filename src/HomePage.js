

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  const [duration, setDuration] = useState('');
  const navigate = useNavigate();

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleSubmit = () => {
    navigate(`/practice?duration=${duration}`);
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Typing Practice</h1>
      <select onChange={handleDurationChange} value={duration}>
        <option value="">Select Duration</option>
        <option value="1">1 Minute</option>
        <option value="5">5 Minutes</option>
        <option value="10">10 Minutes</option>
        <option value="15">15 Minutes</option>
      </select>
      <button onClick={handleSubmit}>Start Practice</button>
    </div>
  );
};

export default HomePage;
