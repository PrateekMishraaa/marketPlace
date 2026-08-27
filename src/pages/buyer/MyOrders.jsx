import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { apiService } from '../../api/axiosConfig';
import StatusBadge from '../../components/common/StatusBadge';
import toast from 'react-hot-toast';

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');

  // ✅ Fetch orders from backend
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const params = statusFilter !== 'all' ? { status: statusFilter } : {};
      const response = await apiService.orders.getMyOrders(params);
      setOrders(response.data.data.orders || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast.error('Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [statusFilter, user]);

  // ✅ Mark order as completed
  const handleMarkComplete = async (orderId) => {
    try {
      await apiService.orders.markComplete(orderId);
      toast.success('🎉 Order marked as completed!');
      fetchOrders(); // Refresh list
    } catch (error) {
      console.error('Error completing order:', error);
      toast.error(error.response?.data?.message || 'Failed to complete order');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📦 My Orders</h1>
      
      {/* Status Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['all', 'pending', 'approved', 'rejected', 'completed'].map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-2 rounded-full transition ${
              statusFilter === status
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>
      
      {orders.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500 text-lg">You haven't placed any orders yet.</p>
          <button
            onClick={() => window.location.href = '/listings'}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Browse Listings
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                {/* Image */}
                <img
                  src={order.listing?.imageUrl || 'https://via.placeholder.com/80x80?text=No+Image'}
                  alt={order.listing?.title}
                  className="w-20 h-20 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/80x80?text=No+Image';
                  }}
                />
                
                {/* Details */}
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{order.listing?.title}</h3>
                      <p className="text-sm text-gray-600">Seller: {order.listing?.seller?.name || 'Unknown'}</p>
                      <p className="text-sm text-gray-500">Placed: {new Date(order.createdAt).toLocaleString()}</p>
                      <p className="text-sm text-gray-500">Quantity: {order.quantity}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-blue-600">${order.totalPrice}</div>
                      <StatusBadge status={order.status} />
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="mt-2">
                    {order.status === 'approved' && (
                      <button
                        onClick={() => handleMarkComplete(order.id)}
                        className="bg-green-500 text-white px-4 py-1.5 rounded-lg hover:bg-green-600 text-sm transition-colors"
                      >
                        ✅ Mark as Completed
                      </button>
                    )}
                    {order.status === 'pending' && (
                      <span className="text-yellow-600 text-sm">⏳ Waiting for admin approval...</span>
                    )}
                    {order.status === 'rejected' && (
                      <span className="text-red-600 text-sm">❌ Order was rejected</span>
                    )}
                    {order.status === 'completed' && (
                      <span className="text-green-600 text-sm">✅ Order completed successfully!</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;