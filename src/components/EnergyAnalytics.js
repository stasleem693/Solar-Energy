// src/components/EnergyAnalytics.js
import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Import Chart.js automatically

const EnergyAnalytics = () => {
  // Sample data for the charts
  const dailyConsumptionData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Energy Consumption (kWh)',
        data: [10, 15, 12, 20, 18, 22, 17],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const monthlySavingsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Savings ($)',
        data: [50, 75, 100, 150, 120, 90, 60],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const usagePatternsData = {
    labels: ['12 AM', '6 AM', '12 PM', '6 PM', '12 AM'],
    datasets: [
      {
        label: 'Usage Patterns (kWh)',
        data: [5, 10, 15, 20, 25],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  const solarProductionData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Solar Production (kWh)',
        data: [200, 250, 300, 350],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
    ],
  };

  return (
    <div className="analytics-container">
      <h2>Energy Analytics</h2>

      <div className="chart">
        <h3>Daily Energy Consumption Trends</h3>
        <Line data={dailyConsumptionData} />
      </div>

      <div className="chart">
        <h3>Monthly Savings Comparison</h3>
        <Bar data={monthlySavingsData} />
      </div>

      <div className="chart">
        <h3>Usage Patterns by Time of Day</h3>
        <Line data={usagePatternsData} />
      </div>

      <div className="chart">
        <h3>Solar Production Metrics</h3>
        <Bar data={solarProductionData} />
      </div>
    </div>
  );
};

export default EnergyAnalytics;
