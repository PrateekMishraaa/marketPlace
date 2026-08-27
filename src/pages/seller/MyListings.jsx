import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext.jsx';

const MyListings = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Dummy data - Baad mein API se aayega
  const [listings, setListings] = useState([
    {
      id: 1,
      title: 'MacBook Pro 14"',
      price: 1299,
      description: 'Apple M2 Pro chip, 16GB RAM',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop',
      status: 'active',
      ordersCount: 3,
      createdAt: '2024-02-01',
    },
    {
      id: 2,
      title: 'Wireless Earbuds Pro',
      price: 79,
      description: 'Noise cancelling, 24hr battery',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=200&fit=crop',
      status: 'active',
      ordersCount: 7,
      createdAt: '2024-02-05',
    },
    {
      id: 3,
      title: 'Smart Watch Series 8',
      price: 399,
      description: 'Health tracking, GPS, LTE',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=200&fit=crop',
      status: 'inactive',
      ordersCount: 1,
      createdAt: '2024-01-28',
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      setListings((prev) => prev.filter(item => item.id !== id));
      toast.success('Listing deleted successfully');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📋 My Listings</h1>
        <Link
          to="/seller/listings/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          + Create New Listing
        </Link>
      </div>

      {listings.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500 text-lg">You haven't created any listings yet.</p>
          <Link
            to="/seller/listings/new"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Create First Listing
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Image */}
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                
                {/* Details */}
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{listing.title}</h3>
                      <p className="text-sm text-gray-600">{listing.description}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{listing.category}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          listing.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {listing.status}
                        </span>
                        <span className="text-xs text-gray-500">Orders: {listing.ordersCount}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">${listing.price}</div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Link
                      to={`/seller/listings/edit/${listing.id}`}
                      className="bg-yellow-500 text-white px-4 py-1.5 rounded hover:bg-yellow-600 text-sm"
                    >
                      ✏️ Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(listing.id)}
                      className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 text-sm"
                    >
                      🗑️ Delete
                    </button>
                    <span className="text-xs text-gray-400 ml-auto self-center">
                      Created: {listing.createdAt}
                    </span>
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

export default MyListings;