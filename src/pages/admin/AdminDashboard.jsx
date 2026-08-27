import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [stats] = useState({
    totalUsers: 156,
    totalOrders: 89,
    totalListings: 234,
    pendingOrders: 12,
    revenue: 45678,
  });

  const statCards = [
    { label: 'Total Users', value: stats.totalUsers, icon: '👥', color: 'bg-blue-500' },
    { label: 'Total Orders', value: stats.totalOrders, icon: '📦', color: 'bg-green-500' },
    { label: 'Total Listings', value: stats.totalListings, icon: '📋', color: 'bg-purple-500' },
    { label: 'Pending Orders', value: stats.pendingOrders, icon: '⏳', color: 'bg-yellow-500' },
    { label: 'Total Revenue', value: `$${stats.revenue}`, icon: '💰', color: 'bg-indigo-500' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📊 Admin Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <div className={`${stat.color} text-white p-3 rounded-full text-xl`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">📋 Orders Management</h2>
          <p className="text-gray-600 mb-4">Review and manage all orders placed on the platform.</p>
          <Link
            to="/admin/orders"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Manage Orders →
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">👥 Users Management</h2>
          <p className="text-gray-600 mb-4">View and manage all users (Buyers, Sellers) on the platform.</p>
          <button
            onClick={() => alert('User management page coming soon!')}
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Manage Users →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;