import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { apiService } from '../../api/axiosConfig';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { FaUser, FaEnvelope, FaPhone, FaUserTag, FaCamera } from 'react-icons/fa';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profileImage: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        profileImage: user.profileImage || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await updateProfile(formData);
      if (result.success) {
        toast.success('Profile updated successfully!');
      }
    } catch (error) {
      toast.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const getRoleBadge = () => {
    const roles = {
      admin: { color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400', label: 'Admin' },
      seller: { color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400', label: 'Seller' },
      buyer: { color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400', label: 'Buyer' },
    };
    return roles[user?.role] || roles.buyer;
  };

  const roleBadge = getRoleBadge();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-4xl text-white">
                {formData.profileImage ? (
                  <img src={formData.profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
                ) : (
                  user?.name?.charAt(0).toUpperCase() || 'U'
                )}
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                <FaCamera className="w-4 h-4" />
              </button>
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold">{user?.name}</h1>
              <p className="opacity-80 flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${roleBadge.color}`}>
                  {roleBadge.label}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <FaUser className="inline mr-2" /> Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <FaEnvelope className="inline mr-2" /> Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
                className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <FaPhone className="inline mr-2" /> Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <FaUserTag className="inline mr-2" /> Role
              </label>
              <input
                type="text"
                value={roleBadge.label}
                disabled
                className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 cursor-not-allowed"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Profile Image URL
            </label>
            <input
              type="url"
              name="profileImage"
              value={formData.profileImage}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="https://example.com/profile.jpg"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 dark:bg-gray-900/50 border-t dark:border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">0</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Orders</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">0</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Listings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">0</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;