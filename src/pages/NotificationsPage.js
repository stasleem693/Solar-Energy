// src/pages/NotificationsPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import Notifications from '../components/Notifications';

const NotificationsPage = () => {
  return (
    <div className="content">
      <Navbar />
      <Notifications />
    </div>
  );
};

export default NotificationsPage;
