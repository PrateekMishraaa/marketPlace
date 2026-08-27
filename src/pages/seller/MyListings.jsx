import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { apiService } from '../../api/axiosConfig';
import toast from 'react-hot-toast';

const MyListings = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch seller's listings from backend
  const fetchMyListings = async () => {
    try {
      setLoading(true);
      const response = await apiService.listings.getMyListings();
      setListings(response.data.data || []);
    } catch (error) {
      console.error('Error fetching listings:', error);
      toast.error('Failed to load your listings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchMyListings();
    }
  }, [user]);

  // ✅ Delete listing
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this listing?')) return;
    
    try {
      await apiService.listings.delete(id);
      toast.success('Listing deleted successfully');
      fetchMyListings();
    } catch (error) {
      console.error('Error deleting listing:', error);
      toast.error(error.response?.data?.message || 'Failed to delete listing');
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
                <img
                  src={listing.imageUrl || 'https://via.placeholder.com/128x128?text=No+Image'}
                  alt={listing.title}
                  className="w-32 h-32 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/128x128?text=No+Image';
                  }}
                />
                
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{listing.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{listing.description}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{listing.category}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          listing.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {listing.status}
                        </span>
                        <span className="text-xs text-gray-500">Stock: {listing.stock}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">${listing.price}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Link
                      to={`/seller/listings/edit/${listing.id}`}
                      className="bg-yellow-500 text-white px-4 py-1.5 rounded hover:bg-yellow-600 text-sm transition"
                    >
                      ✏️ Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(listing.id)}
                      className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 text-sm transition"
                    >
                      🗑️ Delete
                    </button>
                    <span className="text-xs text-gray-400 ml-auto self-center">
                      Created: {new Date(listing.createdAt).toLocaleDateString()}
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