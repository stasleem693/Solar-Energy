// src/components/SmartScheduling.js
import React from 'react';
import './Dashboard.css'; // Import dashboard styles

const SmartScheduling = () => {
  return (
    <div className="smart-scheduling">
      <h2>Smart Appliance Scheduling</h2>
      <form>
        <label htmlFor="appliance">Select Appliance:</label>
        <select id="appliance" name="appliance">
          <option value="ev">EV Charger</option>
          <option value="washing-machine">Washing Machine</option>
        </select>
        <label htmlFor="schedule-time">Schedule Time:</label>
        <input type="time" id="schedule-time" name="schedule-time" />
        <button type="submit">Schedule</button>
      </form>
    </div>
  );
};

export default SmartScheduling;
