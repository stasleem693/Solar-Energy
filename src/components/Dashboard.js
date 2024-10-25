// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import ChartComponent from './ChartComponent';
import './Dashboard.css'; // Your CSS styles

const Dashboard = () => {
    // State variables for storing data
    const [tariffs, setTariffs] = useState([]);
    const [solarData, setSolarData] = useState({});
    const [applianceSchedule, setApplianceSchedule] = useState([]);
    const [notification, setNotification] = useState('');

    // Simulated data for demonstration (you can replace this with real API calls)
    useEffect(() => {
        const fetchTariffData = () => {
            setTariffs([
                { time: '08:00 AM', price: 0.10 },
                { time: '12:00 PM', price: 0.15 },
                { time: '06:00 PM', price: 0.20 },
                { time: '10:00 PM', price: 0.25 }
            ]);
        };

        const fetchSolarData = () => {
            setSolarData({
                production: 500, // in kWh
                consumption: 400, // in kWh
            });
        };

        fetchTariffData();
        fetchSolarData();

        // Optionally, simulate real-time updates every minute
        const interval = setInterval(() => {
            fetchTariffData();
            fetchSolarData();
        }, 60000); // Update every minute

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const scheduleAppliance = (appliance) => {
        if (!applianceSchedule.includes(appliance)) {
            setApplianceSchedule([...applianceSchedule, appliance]);
            setNotification(`${appliance} has been scheduled successfully!`);
        } else {
            setNotification(`${appliance} is already scheduled.`);
        }
    };

    return (
        <div className="dashboard-container">
            <h1>Solar Energy Dashboard</h1>
            {notification && <div className="alert">{notification}</div>}
            <div className="dashboard-cards">
                <div className="card tariffMonitor">
                    <h2>Real-Time ToU/ToD Tariffs</h2>
                    <ul>
                        {tariffs.map((tariff, index) => (
                            <li key={index}>{tariff.time}: ${tariff.price.toFixed(2)}</li>
                        ))}
                    </ul>
                </div>

                <div className="card energyAnalytics">
                    <h2>Solar Energy Production & Consumption</h2>
                    <p>Production: {solarData.production} kWh</p>
                    <p>Consumption: {solarData.consumption} kWh</p>
                    <ChartComponent data={{
                        labels: ['Production', 'Consumption'],
                        datasets: [{
                            label: 'Energy (kWh)',
                            data: [solarData.production, solarData.consumption],
                            backgroundColor: ['#4CAF50', '#F44336']
                        }]
                    }} />
                </div>

                <div className="card SmartScheduling">
                    <h2>Schedule Appliances</h2>
                    <button onClick={() => scheduleAppliance('Washing Machine')} disabled={applianceSchedule.includes('Washing Machine')}>
                        Schedule Washing Machine
                    </button>
                    <button onClick={() => scheduleAppliance('EV Charger')} disabled={applianceSchedule.includes('EV Charger')}>
                        Schedule EV Charger
                    </button>
                    <h3>Scheduled Appliances:</h3>
                    <ul>
                        {applianceSchedule.map((appliance, index) => (
                            <li key={index}>{appliance}</li>
                        ))}
                    </ul>
                </div>

                <div className="card SolarManagement">
                    <h2>View Detailed Reports</h2>
                    <p>Coming soon! Detailed reports on energy savings and usage will be available here.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
