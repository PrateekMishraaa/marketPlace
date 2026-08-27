import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { apiService } from '../../api/axiosConfig';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch dashboard stats from backend
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await apiService.admin.getDashboardStats();
        setStats(response.data.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
        toast.error('Failed to load dashboard stats');
      } finally {
        setLoading(false);
      }
    };
    
    if (user) {
      fetchStats();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const statCards = [
    { label: 'Total Users', value: stats?.totalUsers || 0, icon: '👥', color: 'bg-blue-500' },
    { label: 'Total Orders', value: stats?.totalOrders || 0, icon: '📦', color: 'bg-green-500' },
    { label: 'Total Listings', value: stats?.totalListings || 0, icon: '📋', color: 'bg-purple-500' },
    { label: 'Pending Orders', value: stats?.pendingOrders || 0, icon: '⏳', color: 'bg-yellow-500' },
    { label: 'Total Revenue', value: `$${stats?.revenue || 0}`, icon: '💰', color: 'bg-indigo-500' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📊 Admin Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
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
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-4">📋 Orders Management</h2>
          <p className="text-gray-600 mb-4">Review and manage all orders placed on the platform.</p>
          <Link
            to="/admin/orders"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Manage Orders →
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-4">👥 Users Management</h2>
          <p className="text-gray-600 mb-4">View and manage all users (Buyers, Sellers) on the platform.</p>
          <button
            onClick={() => toast.info('User management page coming soon!')}
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Manage Users →
          </button>
        </div>
      </div>

      {/* Recent Orders */}
      {stats?.recentOrders?.length > 0 && (
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">📝 Recent Orders</h2>
          <div className="space-y-2">
            {stats.recentOrders.slice(0, 5).map((order) => (
              <div key={order.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <span className="font-medium">#{order.id}</span>
                  <span className="ml-2 text-gray-600">{order.listing?.title || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500 mr-3">${order.totalPrice}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    order.status === 'approved' ? 'bg-green-100 text-green-800' :
                    order.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;