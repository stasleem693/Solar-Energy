// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const isAuthenticated = localStorage.getItem('token'); // Check if token exists

    return (
        <nav className="navbar">
            <h1>Solar Energy Platform</h1>
            <ul>
                <li><Link to="/dashboard/importance">Importance</Link></li>
                <li><Link to="/dashboard/solar-panels">Solar Panels</Link></li>
                <li><Link to="/dashboard/tariff">Tariff Monitoring</Link></li>
                <li><Link to="/dashboard/scheduling">Scheduling</Link></li>
                <li><Link to="/dashboard/reports">Reports</Link></li>
                {isAuthenticated && (
                    <li><Link to="/login" onClick={() => { localStorage.removeItem('token'); }}>Logout</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
