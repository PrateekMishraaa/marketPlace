import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import ListingForm from '../../components/common/listings/ListingForm.jsx';

const CreateListing = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (formData) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('✅ Listing created successfully!');
      setLoading(false);
      navigate('/seller/listings');
    }, 1000);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📝 Create New Listing</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ListingForm onSubmit={handleSubmit} loading={loading} />
      </div>
    </div>
  );
};

export default CreateListing;