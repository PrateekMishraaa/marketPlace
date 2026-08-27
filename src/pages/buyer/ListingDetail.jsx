// src/pages/ListingDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { apiService } from '../../api/axiosConfig';
import toast from 'react-hot-toast';

const ListingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [placingOrder, setPlacingOrder] = useState(false);

  // ✅ Fetch listing from backend
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const response = await apiService.listings.getById(id);
        
        // ✅ Correctly access the nested data
        const apiData = response.data;
        
        if (apiData.success) {
          setListing(apiData.data);
        } else {
          toast.error(apiData.message || 'Listing not found');
          navigate('/listings');
        }
      } catch (error) {
        console.error('Error fetching listing:', error);
        toast.error('Listing not found');
        navigate('/listings');
      } finally {
        setLoading(false);
      }
    };
    
    fetchListing();
  }, [id, navigate]);

  // ✅ Place order
  const handlePlaceOrder = async () => {
    if (!user) {
      toast.error('Please login first');
      navigate('/login');
      return;
    }

    if (user.role === 'seller') {
      toast.error('Sellers cannot purchase listings');
      return;
    }

    try {
      setPlacingOrder(true);
      const response = await apiService.orders.create({
        listingId: parseInt(id),
        quantity,
        shippingAddress: 'Default Address - Update in profile',
      });
      
      toast.success(`✅ Order placed successfully for ${listing.title}!`);
      toast('Order status: Pending (Waiting for admin approval)', { icon: '⏳' });
      
      navigate('/my-orders');
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error(error.response?.data?.message || 'Failed to place order');
    } finally {
      setPlacingOrder(false);
    }
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
            src={listing.imageUrl || 'https://via.placeholder.com/400x400?text=No+Image'}
            alt={listing.title}
            className="w-full max-h-96 object-cover rounded-lg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
            }}
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                {listing.category || 'Uncategorized'}
              </span>
              
              {/* ✅ Access seller.name, not the seller object */}
              <span className="text-sm text-gray-500">
                by {listing.seller?.name || 'Unknown Seller'}
              </span>
              
              <span className="text-sm text-gray-500">
                Stock: {listing.stock || 0}
              </span>
              
              <span className={`text-xs px-2 py-1 rounded ${
                listing.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {listing.status || 'Unknown'}
              </span>
            </div>
            
            <p className="text-gray-700 text-lg mb-4">{listing.description}</p>
            
            <div className="text-4xl font-bold text-blue-600 mb-4">
              ${listing.price ? parseFloat(listing.price).toFixed(2) : '0.00'}
            </div>
            
            <div className="text-sm text-gray-400">
              Listed on: {listing.createdAt 
                ? new Date(listing.createdAt).toLocaleDateString() 
                : 'Unknown date'}
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <label className="font-medium">Quantity:</label>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 hover:bg-gray-100"
                  disabled={placingOrder}
                >
                  -
                </button>
                <span className="px-4 py-1 min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(listing.stock || 0, quantity + 1))}
                  className="px-3 py-1 hover:bg-gray-100"
                  disabled={placingOrder || quantity >= (listing.stock || 0)}
                >
                  +
                </button>
              </div>
              <span className="text-sm text-gray-500">
                Available: {listing.stock || 0}
              </span>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={placingOrder || listing.stock === 0}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {placingOrder 
                ? 'Placing Order...' 
                : listing.stock === 0 
                  ? 'Out of Stock' 
                  : '🛒 Place Order'}
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