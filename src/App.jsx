import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import PrivateRoute from './components/common/PrivateRoute';
import ScrollToTop from './components/common/ScrollToTop';
import LoadingSpinner from './components/common/LoadingSpinner';

// ==================== LAZY LOADED COMPONENTS ====================

// Public Pages
const Homepage = lazy(() => import('./pages/home/Homepage'));
const Services = lazy(() => import('./pages/Home/Services'));
const Blog = lazy(() => import('./pages/Home/Blog'));
const FAQ = lazy(() => import('./pages/Home/FAQ'));
const Contact = lazy(() => import('./pages/Home/Contact'));
const Podcast = lazy(() => import('./pages/Home/Podcast'));

// Auth Pages
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));

// Profile Page
const Profile = lazy(() => import('./pages/profile/Profile'));

// Buyer Pages
const Listings = lazy(() => import('./pages/buyer/Listings'));
const ListingDetail = lazy(() => import('./pages/buyer/ListingDetail'));
const MyOrders = lazy(() => import('./pages/buyer/MyOrders'));

// Seller Pages
const MyListings = lazy(() => import('./pages/seller/MyListings'));
const CreateListing = lazy(() => import('./pages/seller/CreateListing'));
const EditListing = lazy(() => import('./pages/seller/EditListing'));
const SellerOrders = lazy(() => import('./pages/seller/SellerOrders'));

// Admin Pages
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminOrders = lazy(() => import('./pages/admin/AdminOrders'));
const AdminUsers = lazy(() => import('./pages/admin/AdminUsers'));

// Solutions Pages
const Solutions = lazy(() => import('./pages/Solutions'));

// ==================== MAIN APP COMPONENT ====================

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <ScrollToTop />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* ==================== PUBLIC ROUTES ==================== */}
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/podcasts" element={<Podcast />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* ==================== SOLUTIONS ROUTES ==================== */}
            <Route path="/solutions/advertisers" element={<Solutions />} />
            <Route path="/solutions/brands" element={<Solutions />} />
            <Route path="/solutions/agencies" element={<Solutions />} />

            {/* ==================== SERVICES SUB-ROUTES ==================== */}
            <Route path="/services/digital-pr" element={<Services />} />
            <Route path="/services/email-marketing" element={<Services />} />
            <Route path="/services/seo" element={<Services />} />
            <Route path="/services/cro" element={<Services />} />

            {/* ==================== PROFILE ROUTE ==================== */}
            <Route
              path="/profile"
              element={
                <PrivateRoute allowedRoles={['buyer', 'seller', 'admin']}>
                  <Profile />
                </PrivateRoute>
              }
            />

            {/* ==================== BUYER ROUTES ==================== */}
            <Route
              path="/listings"
              element={
                <PrivateRoute allowedRoles={['buyer', 'admin']}>
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

            {/* ==================== SELLER ROUTES ==================== */}
            <Route
              path="/seller/listings"
              element={
                <PrivateRoute allowedRoles={['seller', 'admin']}>
                  <MyListings />
                </PrivateRoute>
              }
            />
            <Route
              path="/seller/listings/new"
              element={
                <PrivateRoute allowedRoles={['seller', 'admin']}>
                  <CreateListing />
                </PrivateRoute>
              }
            />
            <Route
              path="/seller/listings/edit/:id"
              element={
                <PrivateRoute allowedRoles={['seller', 'admin']}>
                  <EditListing />
                </PrivateRoute>
              }
            />
            <Route
              path="/seller/orders"
              element={
                <PrivateRoute allowedRoles={['seller', 'admin']}>
                  <SellerOrders />
                </PrivateRoute>
              }
            />

            {/* ==================== ADMIN ROUTES ==================== */}
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
            <Route
              path="/admin/users"
              element={
                <PrivateRoute allowedRoles={['admin']}>
                  <AdminUsers />
                </PrivateRoute>
              }
            />

            {/* ==================== 404 PAGE ==================== */}
            <Route
              path="*"
              element={
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center text-gray-700">
                  <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
                  <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
                  <p className="text-lg text-gray-500 mb-6">
                    Oops! The page you are looking for does not exist.
                  </p>
                  <a
                    href="/"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all duration-300"
                  >
                    Go Back Home
                  </a>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      
      {/* ==================== TOAST NOTIFICATIONS ==================== */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#ffffff',
            color: '#1a202c',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          },
          success: {
            icon: '✅',
            style: {
              borderLeft: '4px solid #22c55e',
            },
          },
          error: {
            icon: '❌',
            style: {
              borderLeft: '4px solid #ef4444',
            },
          },
          loading: {
            icon: '⏳',
            style: {
              borderLeft: '4px solid #3b82f6',
            },
          },
        }}
      />
    </div>
  );
};

export default App;