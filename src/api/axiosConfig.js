import axios from 'axios';
import toast from 'react-hot-toast';

// Base URL - Development ke liye localhost, Production mein change karna
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor - Har request se pehle token attach karega
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor - Global error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle different error status codes
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 401:
          // Unauthorized - Token expired ya invalid
          toast.error('Session expired. Please login again.');
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          window.location.href = '/login';
          break;

        case 403:
          // Forbidden - Insufficient permissions
          toast.error('You do not have permission to perform this action.');
          break;

        case 404:
          // Not Found
          toast.error(data?.message || 'Resource not found');
          break;

        case 422:
          // Validation Error
          if (data?.errors) {
            // Handle validation errors (e.g., from express-validator)
            const errorMessages = data.errors.map(err => err.msg).join(', ');
            toast.error(errorMessages);
          } else {
            toast.error(data?.message || 'Validation failed');
          }
          break;

        case 500:
          // Server Error
          toast.error('Something went wrong on the server. Please try again later.');
          break;

        default:
          toast.error(data?.message || 'An error occurred');
      }
    } else if (error.request) {
      // Request was made but no response received
      toast.error('Network error. Please check your internet connection.');
    } else {
      // Something else happened
      toast.error(error.message || 'An unexpected error occurred');
    }

    return Promise.reject(error);
  }
);

// API Methods (Helper functions for common operations)
export const apiService = {
  // Auth APIs
  auth: {
    login: (credentials) => api.post('/auth/login', credentials),
    register: (userData) => api.post('/auth/register', userData),
    getProfile: () => api.get('/auth/profile'),
    logout: () => api.post('/auth/logout'),
  },

  // Listing APIs
  listings: {
    getAll: (params) => api.get('/listings', { params }),
    getById: (id) => api.get(`/listings/${id}`),
    create: (data) => api.post('/listings', data),
    update: (id, data) => api.put(`/listings/${id}`, data),
    delete: (id) => api.delete(`/listings/${id}`),
    getMyListings: () => api.get('/listings/my-listings'),
  },

  // Order APIs
  orders: {
    create: (data) => api.post('/orders', data),
    getMyOrders: () => api.get('/orders/my-orders'),
    getById: (id) => api.get(`/orders/${id}`),
    markComplete: (id) => api.put(`/orders/${id}/complete`),
    
    // Seller APIs
    getSellerOrders: () => api.get('/orders/seller-orders'),
    
    // Admin APIs
    getAll: (params) => api.get('/admin/orders', { params }),
    approve: (id) => api.put(`/admin/orders/${id}/approve`),
    reject: (id) => api.put(`/admin/orders/${id}/reject`),
  },

  // User APIs (Admin)
  users: {
    getAll: () => api.get('/admin/users'),
    getById: (id) => api.get(`/admin/users/${id}`),
    update: (id, data) => api.put(`/admin/users/${id}`, data),
    delete: (id) => api.delete(`/admin/users/${id}`),
  },

  // Dashboard APIs
  dashboard: {
    getStats: () => api.get('/admin/dashboard/stats'),
  },
};

// Export default for simple imports
export default api;