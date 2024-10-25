// src/components/Scheduling.js
import React, { useState } from 'react';
import './Scheduling.css'; // Ensure you have a CSS file for styling

const Scheduling = () => {
  const [selectedAppliance, setSelectedAppliance] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [scheduledItems, setScheduledItems] = useState([]);

  const handleSchedule = (e) => {
    e.preventDefault();
    if (selectedAppliance && scheduleTime) {
      setScheduledItems([...scheduledItems, { appliance: selectedAppliance, time: scheduleTime }]);
      setSelectedAppliance('');
      setScheduleTime('');
    }
  };

  return (
    <div className="scheduling-container">
      <h1>Schedule Appliances</h1>
      <form onSubmit={handleSchedule}>
        <div className="form-group">
          <label htmlFor="appliance">Select Appliance:</label>
          <select
            id="appliance"
            value={selectedAppliance}
            onChange={(e) => setSelectedAppliance(e.target.value)}
            required
          >
            <option value="">--Select an Appliance--</option>
            <option value="Washing Machine">Washing Machine</option>
            <option value="EV Charger">EV Charger</option>
            <option value="Dishwasher">Dishwasher</option>
            <option value="Heater">Heater</option>
            {/* Add more appliances as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="schedule-time">Schedule Time:</label>
          <input
            type="time"
            id="schedule-time"
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Schedule Appliance</button>
      </form>

      <h2>Scheduled Appliances:</h2>
      <ul>
        {scheduledItems.map((item, index) => (
          <li key={index}>
            {item.appliance} - {item.time}
          </li>
        ))}
      </ul>

      <div className="suggestions">
        <h2>Suggestions for Efficient Scheduling:</h2>
        <p>Consider scheduling high-energy appliances during low-tariff periods to maximize savings.</p>
        <p>Use smart home integration to automate scheduling based on your energy usage patterns.</p>
      </div>
    </div>
  );
};

export default Scheduling;
