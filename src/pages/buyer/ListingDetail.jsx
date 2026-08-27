import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext.jsx';

const ListingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  // Dummy data - Baad mein API se aayega
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const dummyListings = {
      1: {
        id: 1,
        title: 'MacBook Pro 14"',
        price: 1299,
        description: 'Apple M2 Pro chip with 12-core CPU, 16-core GPU, 16GB RAM, 512GB SSD. 14.2-inch Liquid Retina XDR display. Up to 18 hours battery life.',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop',
        seller: 'Apple Store',
        sellerId: 2,
        category: 'Electronics',
        stock: 5,
        createdAt: '2024-01-15',
      },
      2: {
        id: 2,
        title: 'iPhone 15 Pro Max',
        price: 1199,
        description: '6.7-inch Super Retina XDR display, 256GB storage, Titanium body, A17 Pro chip, 48MP main camera with 5x optical zoom.',
        image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=600&h=400&fit=crop',
        seller: 'Tech Hub',
        sellerId: 3,
        category: 'Electronics',
        stock: 3,
        createdAt: '2024-02-01',
      },
      3: {
        id: 3,
        title: 'Samsung 65" QLED TV',
        price: 899,
        description: '65-inch 4K QLED TV with Quantum HDR, 100% Color Volume, Object Tracking Sound, and Smart TV features.',
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=400&fit=crop',
        seller: 'Samsung Official',
        sellerId: 4,
        category: 'Electronics',
        stock: 8,
        createdAt: '2024-01-20',
      },
    };

    setTimeout(() => {
      const found = dummyListings[id];
      if (found) {
        setListing(found);
      } else {
        toast.error('Listing not found');
        navigate('/listings');
      }
      setLoading(false);
    }, 500);
  }, [id, navigate]);

  const handlePlaceOrder = () => {
    if (!user) {
      toast.error('Please login first');
      navigate('/login');
      return;
    }

    // Simulate placing order
    toast.success(`✅ Order placed successfully for ${listing.title}!`);
    toast('Order status: Pending (Waiting for admin approval)', { icon: '⏳' });
    
    // Navigate to My Orders
    setTimeout(() => navigate('/my-orders'), 1500);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!listing) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full max-h-96 object-cover rounded-lg"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">{listing.category}</span>
              <span className="text-sm text-gray-500">by {listing.seller}</span>
              <span className="text-sm text-gray-500">Stock: {listing.stock}</span>
            </div>
            <p className="text-gray-700 text-lg mb-4">{listing.description}</p>
            <div className="text-4xl font-bold text-blue-600 mb-4">${listing.price}</div>
            <div className="text-sm text-gray-400">Listed on: {listing.createdAt}</div>
          </div>

          <div className="mt-6 space-y-3">
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              🛒 Place Order
            </button>
            <button
              onClick={() => navigate('/listings')}
              className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              ← Back to Listings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;