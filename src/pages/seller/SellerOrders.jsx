import React, { useState } from 'react';
import StatusBadge from '../../components/common/StatusBadge.jsx';

const SellerOrders = () => {
  // Dummy data - Baad mein API se aayega
  const [orders] = useState([
    {
      id: 201,
      product: 'MacBook Pro 14"',
      buyer: 'Rahul Sharma',
      buyerEmail: 'rahul@email.com',
      price: 1299,
      status: 'pending',
      orderedAt: '2024-02-15 10:30 AM',
      quantity: 1,
      address: '123 Main St, Mumbai',
    },
    {
      id: 202,
      product: 'MacBook Pro 14"',
      buyer: 'Priya Patel',
      buyerEmail: 'priya@email.com',
      price: 1299,
      status: 'approved',
      orderedAt: '2024-02-14 03:45 PM',
      quantity: 2,
      address: '456 Park Ave, Delhi',
    },
    {
      id: 203,
      product: 'Wireless Earbuds Pro',
      buyer: 'Amit Singh',
      buyerEmail: 'amit@email.com',
      price: 79,
      status: 'completed',
      orderedAt: '2024-02-13 11:20 AM',
      quantity: 3,
      address: '789 Lake Road, Bangalore',
    },
    {
      id: 204,
      product: 'Wireless Earbuds Pro',
      buyer: 'Neha Gupta',
      buyerEmail: 'neha@email.com',
      price: 79,
      status: 'rejected',
      orderedAt: '2024-02-12 05:00 PM',
      quantity: 1,
      address: '321 Hill Street, Chennai',
    },
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📦 Orders Received</h1>
      
      {orders.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500 text-lg">No orders received yet.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Buyer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Qty</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">#{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div>{order.buyer}</div>
                    <div className="text-xs text-gray-400">{order.buyerEmail}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{order.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold">${order.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.orderedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SellerOrders;