// src/pages/RecommendationsPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import Recommendations from '../components/Recommendations';

const RecommendationsPage = () => {
  return (
    <div className="content">
      <Navbar />
      <Recommendations />
    </div>
  );
};

export default RecommendationsPage;
