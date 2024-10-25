// src/components/Notifications.js
import React from 'react';
import './Dashboard.css'; // Import dashboard styles

const Notifications = () => {
  return (
    <div className="notifications">
      <div className="alert">
        <p>High tariff alert! Consider reducing energy usage.</p>
      </div>
    </div>
  );
};

export default Notifications;
