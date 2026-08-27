// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import PrivateRoute from './components/common/PrivateRoute.jsx';

// Public Pages
import Homepage from './pages/Home/Homepage.jsx';
import Services from './pages/Home/Services.jsx';
import Blog from './pages/Home/Blog.jsx';
import FAQ from './pages/Home/FAQ.jsx';
import Contact from './pages/Home/Contact.jsx';

// Auth Pages
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';

// Buyer Pages
import Listings from './pages/buyer/Listings.jsx';
import ListingDetail from './pages/buyer/ListingDetail.jsx';
import MyOrders from './pages/buyer/MyOrders.jsx';

// Seller Pages
import MyListings from './pages/seller/MyListings.jsx';
import CreateListing from './pages/seller/CreateListing.jsx';
import EditListing from './pages/seller/EditListing.jsx';
import SellerOrders from './pages/seller/SellerOrders.jsx';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AdminOrders from './pages/admin/AdminOrders.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Buyer Routes */}
          <Route
            path="/listings"
            element={
              <PrivateRoute allowedRoles={['buyer']}>
                <Listings />
              </PrivateRoute>
            }
          />
          <Route
            path="/listings/:id"
            element={
              <PrivateRoute allowedRoles={['buyer']}>
                <ListingDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-orders"
            element={
              <PrivateRoute allowedRoles={['buyer']}>
                <MyOrders />
              </PrivateRoute>
            }
          />

          {/* Seller Routes */}
          <Route
            path="/seller/listings"
            element={
              <PrivateRoute allowedRoles={['seller']}>
                <MyListings />
              </PrivateRoute>
            }
          />
          <Route
            path="/seller/listings/new"
            element={
              <PrivateRoute allowedRoles={['seller']}>
                <CreateListing />
              </PrivateRoute>
            }
          />
          <Route
            path="/seller/listings/edit/:id"
            element={
              <PrivateRoute allowedRoles={['seller']}>
                <EditListing />
              </PrivateRoute>
            }
          />
          <Route
            path="/seller/orders"
            element={
              <PrivateRoute allowedRoles={['seller']}>
                <SellerOrders />
              </PrivateRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/orders"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminOrders />
              </PrivateRoute>
            }
          />

          {/* 404 */}
          <Route path="*" element={<div className="text-center py-20 text-2xl">404 - Page Not Found</div>} />
        </Routes>
      </div>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;