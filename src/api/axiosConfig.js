import axios from 'axios';
import toast from 'react-hot-toast';

// ✅ Use your backend URL
const BASE_URL = 'https://marketplacebackend-1.onrender.com/api';

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor - Add token to every request
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

// Response Interceptor - Handle errors globally
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      // Handle 401 - Unauthorized
      if (status === 401) {
        toast.error('Session expired. Please login again.');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
      }
      // Handle 403 - Forbidden
      else if (status === 403) {
        toast.error(data.message || 'You do not have permission to perform this action.');
      }
      // Handle 404 - Not Found
      else if (status === 404) {
        toast.error(data.message || 'Resource not found.');
      }
      // Handle 422 - Validation Error
      else if (status === 422) {
        if (data.errors) {
          const messages = data.errors.map(err => err.msg).join(', ');
          toast.error(messages);
        } else {
          toast.error(data.message || 'Validation failed.');
        }
      }
      // Handle 500 - Server Error
      else if (status === 500) {
        toast.error('Something went wrong on the server. Please try again later.');
      }
      // Handle other errors
      else {
        toast.error(data.message || 'An error occurred.');
      }
    } else if (error.request) {
      toast.error('Network error. Please check your internet connection.');
    } else {
      toast.error(error.message || 'An unexpected error occurred.');
    }

    return Promise.reject(error);
  }
);

// ==================== API SERVICES ====================

export const apiService = {
  // Auth APIs
  auth: {
    login: (credentials) => api.post('/auth/login', credentials),
    register: (userData) => api.post('/auth/register', userData),
    getProfile: () => api.get('/auth/profile'),
    updateProfile: (data) => api.put('/auth/profile', data),
    logout: () => api.post('/auth/logout'),
  },

  // Listing APIs
  listings: {
    getAll: (params = {}) => api.get('/listings', { params }),
    getById: (id) => api.get(`/listings/${id}`),
    search: (query) => api.get(`/listings/search?q=${query}`),
    getByCategory: (category) => api.get(`/listings/category/${category}`),
    create: (data) => api.post('/listings', data),
    update: (id, data) => api.put(`/listings/${id}`, data),
    delete: (id) => api.delete(`/listings/${id}`),
    getMyListings: () => api.get('/listings/my-listings'),
  },

  // Order APIs
  orders: {
    create: (data) => api.post('/orders', data),
    getMyOrders: (params = {}) => api.get('/orders/my-orders', { params }),
    getSellerOrders: (params = {}) => api.get('/orders/seller-orders', { params }),
    getById: (id) => api.get(`/orders/${id}`),
    markComplete: (id) => api.put(`/orders/${id}/complete`),
    cancel: (id) => api.put(`/orders/${id}/cancel`),
  },

  // Admin APIs
  admin: {
    getDashboardStats: () => api.get('/admin/dashboard/stats'),
    getOrders: (params = {}) => api.get('/admin/orders', { params }),
    approveOrder: (id, data = {}) => api.put(`/admin/orders/${id}/approve`, data),
    rejectOrder: (id, data = {}) => api.put(`/admin/orders/${id}/reject`, data),
    getUsers: (params = {}) => api.get('/admin/users', { params }),
    getUserById: (id) => api.get(`/admin/users/${id}`),
    updateUser: (id, data) => api.put(`/admin/users/${id}`, data),
    deleteUser: (id) => api.delete(`/admin/users/${id}`),
    getAllListings: (params = {}) => api.get('/admin/listings', { params }),
    deleteListing: (id) => api.delete(`/admin/listings/${id}`),
  },
};

export default api;