// src/pages/SolarManagementPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import SolarManagement from '../components/SolarManagement';

const SolarManagementPage = () => {
  return (
    <div className="content">
      <Navbar />
      <SolarManagement />
    </div>
  );
};

export default SolarManagementPage;
