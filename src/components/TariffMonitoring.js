import React from 'react';
import './TariffMonitoring.css';

const TariffMonitoring = () => {
  return (
    <div className="tariff-container">
      <h2 className="tariff-title">Tariff Monitoring: Optimize Your Energy Costs 💡</h2>
      <p className="tariff-description">
        Leverage real-time tariff monitoring to manage energy consumption smartly. Stay informed with dynamic rate updates and strategically schedule high-energy activities for maximum cost savings.
      </p>
      <div className="tariff-features">
        <h3 className="feature-heading">Features:</h3>
        <ul className="feature-list">
          <li><strong>Real-Time Updates:</strong> Stay updated with live electricity pricing data to make informed usage decisions.</li>
          <li><strong>Cost-Saving Insights:</strong> Plan energy-intensive activities during off-peak times for reduced costs.</li>
          <li><strong>Smart Scheduling:</strong> Automatically align high-energy appliance usage with lower tariff periods.</li>
          <li><strong>Historical Data Tracking:</strong> Access previous consumption and tariff patterns for better forecasting.</li>
          <li><strong>Eco-Friendly Impact:</strong> Minimize peak-time usage, supporting grid stability and sustainability goals.</li>
        </ul>
      </div>
    </div>
  );
};

export default TariffMonitoring;
