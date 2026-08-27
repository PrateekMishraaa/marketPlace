import React, { useState } from 'react';
import StatusBadge from '../../components/common/StatusBadge.jsx';
import toast from 'react-hot-toast';

const AdminOrders = () => {
  // Dummy Data - Baad mein API se aayega
  const [orders, setOrders] = useState([
    { id: 1, product: 'MacBook Pro', buyer: 'Rahul', amount: 1200, status: 'pending' },
    { id: 2, product: 'iPhone 15', buyer: 'Amit', amount: 900, status: 'pending' },
    { id: 3, product: 'Samsung TV', buyer: 'Priya', amount: 600, status: 'approved' },
    { id: 4, product: 'Headphones', buyer: 'John', amount: 50, status: 'rejected' },
  ]);

  const handleApprove = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: 'approved' } : order
      )
    );
    toast.success(`Order #${id} Approved!`);
  };

  const handleReject = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: 'rejected' } : order
      )
    );
    toast.success(`Order #${id} Rejected.`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">📋 Admin - Manage Orders</h1>
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Buyer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">#{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{order.product}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{order.buyer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">${order.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {order.status === 'pending' ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleApprove(order.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-xs"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(order.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs"
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
      </div>
    </div>
  );
};

export default AdminOrders;