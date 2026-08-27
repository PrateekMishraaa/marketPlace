import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Agar roles specified hain aur user ka role allowed nahi hai
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Agar Admin hai toh Admin dashboard, Buyer hai toh home, Seller hai toh seller dashboard
    if (user.role === 'admin') return <Navigate to="/admin/orders" replace />;
    if (user.role === 'seller') return <Navigate to="/seller/listings" replace />;
    return <Navigate to="/listings" replace />;
  }

  return children;
};

export default PrivateRoute;