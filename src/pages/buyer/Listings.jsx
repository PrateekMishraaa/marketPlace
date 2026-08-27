// src/components/common/listings/ListingCard.jsx

import React from 'react';

const ListingCard = ({ listing }) => {
  // Safety check
  if (!listing || typeof listing !== 'object') {
    return (
      <div className="border rounded-lg p-4 text-center text-gray-500">
        No listing data available
      </div>
    );
  }

  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-white">
      {/* Image - using 'imageUrl' from your API */}
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        {listing.imageUrl ? (
          <img 
            src={listing.imageUrl} 
            alt={listing.title || 'Listing'}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="200" height="200" fill="%23f0f0f0"/%3E%3Ctext x="50" y="110" font-family="Arial" font-size="16" fill="%23999"%3ENo Image%3C/text%3E%3C/svg%3E';
            }}
          />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>

      {/* Details */}
      <div className="p-4">
        {/* Title - using 'title' from your API */}
        <h3 className="font-semibold text-lg truncate">
          {listing.title || 'Unnamed'}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2 min-h-[40px]">
          {listing.description || 'No description available'}
        </p>

        {/* Price and Status */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-blue-600 font-bold text-xl">
            ${parseFloat(listing.price).toFixed(2)}
          </span>
          
          {/* Status - 'active' from your API */}
          <span className={`text-xs px-2 py-1 rounded ${
            listing.status === 'active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {listing.status || 'Unknown'}
          </span>
        </div>

        {/* Category */}
        {listing.category && (
          <span className="text-sm text-gray-500 inline-block mt-1">
            {listing.category}
          </span>
        )}

        {/* Stock */}
        {listing.stock !== undefined && (
          <p className="text-sm text-gray-500 mt-1">
            Stock: {listing.stock} available
          </p>
        )}

        {/* ⚠️ CRITICAL FIX: Seller info - accessing seller.name, NOT the seller object */}
        {listing.seller && typeof listing.seller === 'object' && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Seller:</span>{' '}
              {listing.seller.name || listing.seller.email || 'Unknown'}
            </p>
          </div>
        )}
        {/* ❌ NEVER DO: {listing.seller} - this causes the error! */}

        {/* Created At */}
        {listing.createdAt && (
          <p className="text-xs text-gray-400 mt-1">
            Posted: {new Date(listing.createdAt).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default ListingCard;