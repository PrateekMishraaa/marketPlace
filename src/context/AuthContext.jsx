import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { apiService } from '../api/axiosConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check localStorage on mount
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  // ✅ REAL LOGIN - Connects to backend
// Update the login function
const login = async (email, password) => {
  try {
    console.log('🔐 Attempting login with:', { email });
    
    const response = await apiService.auth.login({ email, password });
    console.log('✅ Login response:', response.data);
    
    const { user, token } = response.data.data;
    
    setUser(user);
    setToken(token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    
    toast.success(`Welcome ${user.name}!`);
    return { success: true, user };
  } catch (error) {
    console.error('❌ Login error:', error);
    
    // Handle network errors
    if (error.code === 'ERR_NETWORK') {
      toast.error('Cannot connect to server. Is backend running?');
      return { success: false, error: 'Network error - backend not running' };
    }
    
    const message = error.response?.data?.message || 'Login failed. Please try again.';
    toast.error(message);
    return { success: false, error: message };
  }
};

  // ✅ REAL REGISTER - Connects to backend
  const register = async (userData) => {
    try {
      const response = await apiService.auth.register(userData);
      toast.success('Account created successfully! Please login.');
      return { success: true };
    } catch (error) {
      console.error('Register error:', error);
      return { success: false, error: error.response?.data?.message || 'Registration failed' };
    }
  };

  // ✅ REAL LOGOUT
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
  };

  // ✅ GET PROFILE
  const getProfile = async () => {
    try {
      const response = await apiService.auth.getProfile();
      return response.data.data;
    } catch (error) {
      console.error('Get profile error:', error);
      return null;
    }
  };

  // ✅ UPDATE PROFILE
  const updateProfile = async (data) => {
    try {
      const response = await apiService.auth.updateProfile(data);
      const updatedUser = response.data.data;
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      toast.success('Profile updated successfully!');
      return { success: true, user: updatedUser };
    } catch (error) {
      console.error('Update profile error:', error);
      return { success: false, error: error.response?.data?.message || 'Update failed' };
    }
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    getProfile,
    updateProfile,
    isAuthenticated: !!user && !!token,
    isBuyer: user?.role === 'buyer',
    isSeller: user?.role === 'seller',
    isAdmin: user?.role === 'admin',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};