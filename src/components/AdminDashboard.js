// AdminDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import UpdateProducts from './UpdateProducts';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-actions">
        <button onClick={() => navigate('/admin/newsletter')}>Upload Newsletter</button>
        <button onClick={() => navigate('/admin/products')}>Update Products</button>
        <button onClick={() => navigate('/admin/events')}>Update Events & Calendar</button>
        <UpdateProducts />
      </div>
    </div>
  );
};

export default AdminDashboard;
