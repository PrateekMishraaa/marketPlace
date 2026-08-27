import React, { useState } from 'react';
import ListingCard from '../../components/common/listings/ListingCard.jsx';

const Listings = () => {
  // Dummy data - Baad mein API se aayega
  const [listings] = useState([
    {
      id: 1,
      title: 'MacBook Pro 14"',
      price: 1299,
      description: 'Apple M2 Pro chip, 16GB RAM, 512GB SSD',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
      seller: 'Apple Store',
      category: 'Electronics',
    },
    {
      id: 2,
      title: 'iPhone 15 Pro Max',
      price: 1199,
      description: '6.7-inch display, 256GB, Titanium',
      image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400&h=300&fit=crop',
      seller: 'Tech Hub',
      category: 'Electronics',
    },
    {
      id: 3,
      title: 'Samsung 65" QLED TV',
      price: 899,
      description: '4K Smart TV, Quantum HDR',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop',
      seller: 'Samsung Official',
      category: 'Electronics',
    },
    {
      id: 4,
      title: 'Sony WH-1000XM5',
      price: 399,
      description: 'Wireless Noise Cancelling Headphones',
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop',
      seller: 'Audio World',
      category: 'Accessories',
    },
    {
      id: 5,
      title: 'Nike Air Max 270',
      price: 150,
      description: 'Comfortable running shoes',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
      seller: 'Nike Store',
      category: 'Fashion',
    },
    {
      id: 6,
      title: 'Dyson V15 Vacuum',
      price: 699,
      description: 'Cordless vacuum cleaner',
      image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=300&fit=crop',
      seller: 'Home Appliances',
      category: 'Home',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Unique categories for filter
  const categories = ['all', ...new Set(listings.map(item => item.category))];

  // Filter logic
  const filteredListings = listings.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">🛍️ Browse Listings</h1>
      
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Listings Grid */}
      {filteredListings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No listings found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Listings;