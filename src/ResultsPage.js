

import React from 'react';
import { useLocation } from 'react-router-dom';
import './ResultsPage.css'; // Import the CSS file

const ResultsPage = () => {
  const location = useLocation();
  const { grossWPM, accuracy, netWPM } = location.state;

  return (
    <div className="results-container">
      <h1>Typing Test Results</h1>
      <div>
        <p><strong>Typing Speed (Gross WPM):</strong> {grossWPM.toFixed(2)}</p>
        <p><strong>Accuracy:</strong> {accuracy.toFixed(2)}%</p>
        <p><strong>Net Speed (Net WPM):</strong> {netWPM.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ResultsPage;
