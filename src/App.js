// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'; // Assuming you have a Sidebar component
import Importance from './components/Importance';
import SolarPanels from './components/SolarPanels';
import Tariff from './components/TariffMonitoring';
import Scheduling from './components/Scheduling';
import Reports from './components/Reports';
// Check the import statement in EnergyAnalytics.js or App.js
import './EnergyAnalytics.css'; // Ensure this file exists
import './EnergyAnalytics.css'; // This line may be removed if the CSS is directly imported in EnergyAnalytics.js


import './App.css';
import TariffMonitoring from './components/TariffMonitoring';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <div className="container">
                    <Sidebar />
                    <div className="main-content">
                        <Routes>
                            <Route path="/dashboard/importance" element={<Importance />} />
                            <Route path="/dashboard/solar-panels" element={<SolarPanels />} />
                            <Route path="/dashboard/tariff" element={<Tariff />} />
                            <Route path="/dashboard/scheduling" element={<Scheduling />} />
                            <Route path="/dashboard/reports" element={<Reports />} />
                            {/* Add other routes as necessary */}
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
