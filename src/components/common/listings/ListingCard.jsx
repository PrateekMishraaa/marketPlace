import React from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({ listing }) => {
  return (
    <Link to={`/listings/${listing.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg truncate">{listing.title}</h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{listing.description}</p>
          <div className="flex justify-between items-center mt-3">
            <span className="text-2xl font-bold text-blue-600">${listing.price}</span>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {listing.category}
            </span>
          </div>
          <div className="mt-2 text-xs text-gray-400">by {listing.seller}</div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;