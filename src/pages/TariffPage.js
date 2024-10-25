// src/pages/TariffPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import TariffMonitor from '../components/TariffMonitor';
const TariffPage = () => {
  return (
    <div className="content">
      <Navbar />
      <TariffMonitor />
    </div>
  );
};

export default TariffPage;
