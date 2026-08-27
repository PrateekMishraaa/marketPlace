import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import ListingForm from '../../components/common/listings/ListingForm.jsx';

const EditListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [listingData, setListingData] = useState(null);

  useEffect(() => {
    // Simulate fetching listing data
    const dummyData = {
      1: {
        title: 'MacBook Pro 14"',
        price: 1299,
        description: 'Apple M2 Pro chip, 16GB RAM, 512GB SSD',
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop',
        stock: 5,
      },
      2: {
        title: 'Wireless Earbuds Pro',
        price: 79,
        description: 'Noise cancelling, 24hr battery life',
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=200&fit=crop',
        stock: 10,
      },
    };

    setTimeout(() => {
      const data = dummyData[id];
      if (data) {
        setListingData({ ...data, id: parseInt(id) });
      } else {
        toast.error('Listing not found');
        navigate('/seller/listings');
      }
      setLoading(false);
    }, 500);
  }, [id, navigate]);

  const handleUpdate = (formData) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('✅ Listing updated successfully!');
      setLoading(false);
      navigate('/seller/listings');
    }, 1000);
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
      <h1 className="text-3xl font-bold mb-6">✏️ Edit Listing #{id}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ListingForm 
          initialData={listingData} 
          onSubmit={handleUpdate} 
          loading={loading} 
        />
      </div>
    </div>
  );
};

export default EditListing;