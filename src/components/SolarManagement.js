// src/components/SolarManagement.js
import React from 'react';
import './Dashboard.css'; // Import dashboard styles

const SolarManagement = () => {
  return (
    <div className="solar-management">
      <h2>Solar Energy Management</h2>
      <p>Battery Storage: <span id="battery-status">80%</span></p>
      <p>Solar Energy Produced: <span id="solar-produced">5 kWh</span></p>
    </div>
  );
};

export default SolarManagement;
