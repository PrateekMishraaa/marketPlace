import React, { useState } from 'react';
import StatusBadge from '../../components/common/StatusBadge.jsx';
import toast from 'react-hot-toast';

const MyOrders = () => {
  // Dummy data - Baad mein API se aayega
  const [orders, setOrders] = useState([
    {
      id: 101,
      product: 'MacBook Pro 14"',
      price: 1299,
      seller: 'Apple Store',
      status: 'pending',
      placedAt: '2024-02-15 10:30 AM',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop',
    },
    {
      id: 102,
      product: 'iPhone 15 Pro Max',
      price: 1199,
      seller: 'Tech Hub',
      status: 'approved',
      placedAt: '2024-02-14 02:15 PM',
      image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=100&h=100&fit=crop',
    },
    {
      id: 103,
      product: 'Samsung 65" QLED TV',
      price: 899,
      seller: 'Samsung Official',
      status: 'completed',
      placedAt: '2024-02-12 09:00 AM',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=100&h=100&fit=crop',
    },
    {
      id: 104,
      product: 'Sony WH-1000XM5',
      price: 399,
      seller: 'Audio World',
      status: 'rejected',
      placedAt: '2024-02-10 05:45 PM',
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=100&h=100&fit=crop',
    },
  ]);

  const handleMarkComplete = (orderId) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId && order.status === 'approved'
          ? { ...order, status: 'completed' }
          : order
      )
    );
    toast.success('🎉 Order marked as completed!');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📦 My Orders</h1>
      
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
                  src={order.image}
                  alt={order.product}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                
                {/* Details */}
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{order.product}</h3>
                      <p className="text-sm text-gray-600">Seller: {order.seller}</p>
                      <p className="text-sm text-gray-500">Placed: {order.placedAt}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-blue-600">${order.price}</div>
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