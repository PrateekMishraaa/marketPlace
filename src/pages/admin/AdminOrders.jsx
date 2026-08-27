import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { apiService } from '../../api/axiosConfig';
import StatusBadge from '../../components/common/StatusBadge';
import toast from 'react-hot-toast';

const AdminOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    total: 0,
  });

  // ✅ Fetch all orders from backend (Admin only)
  const fetchOrders = async (page = 1) => {
    try {
      setLoading(true);
      const params = {
        page,
        limit: 20,
      };
      if (statusFilter !== 'all') params.status = statusFilter;
      
      const response = await apiService.admin.getOrders(params);
      const data = response.data.data;
      
      setOrders(data.orders || []);
      setPagination({
        page: data.page || 1,
        totalPages: data.totalPages || 1,
        total: data.total || 0,
      });
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

  // ✅ Approve order
  const handleApprove = async (orderId) => {
    try {
      await apiService.admin.approveOrder(orderId);
      toast.success(`Order #${orderId} Approved!`);
      fetchOrders(pagination.page);
    } catch (error) {
      console.error('Error approving order:', error);
      toast.error(error.response?.data?.message || 'Failed to approve order');
    }
  };

  // ✅ Reject order
  const handleReject = async (orderId) => {
    try {
      await apiService.admin.rejectOrder(orderId);
      toast.success(`Order #${orderId} Rejected.`);
      fetchOrders(pagination.page);
    } catch (error) {
      console.error('Error rejecting order:', error);
      toast.error(error.response?.data?.message || 'Failed to reject order');
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchOrders(newPage);
    }
  };

  if (loading && orders.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📋 Admin - Manage Orders</h1>
      
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
      
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Buyer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Qty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">#{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {order.listing?.title || 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div>{order.buyer?.name || 'N/A'}</div>
                  <div className="text-xs text-gray-400">{order.buyer?.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{order.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold">${order.totalPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {order.status === 'pending' ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleApprove(order.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-xs transition"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(order.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs transition"
                      >
                        Reject
                      </button>
                    </div>
                  ) : (
                    <span className="text-gray-400 text-xs">No action</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="flex justify-center gap-2 p-4">
            <button
              onClick={() => handlePageChange(pagination.page - 1)}
              disabled={pagination.page === 1}
              className="px-4 py-2 border rounded disabled:opacity-50 hover:bg-gray-100"
            >
              Previous
            </button>
            <span className="px-4 py-2">
              Page {pagination.page} of {pagination.totalPages}
            </span>
            <button
              onClick={() => handlePageChange(pagination.page + 1)}
              disabled={pagination.page === pagination.totalPages}
              className="px-4 py-2 border rounded disabled:opacity-50 hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;