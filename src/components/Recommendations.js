// src/components/Recommendations.js
import React from 'react';
import './Dashboard.css'; // Import dashboard styles

const Recommendations = () => {
  return (
    <div className="forecasting">
      <h2>Energy Usage Recommendations</h2>
      <p>Based on the tariff forecast, reduce usage between 6 PM and 9 PM.</p>
    </div>
  );
};

export default Recommendations;
