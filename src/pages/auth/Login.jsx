import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔴 Mock login logic (backend se connect nahi hai)
    // Hardcoded users for testing
    const mockUsers = [
      { id: 1, name: 'Rahul Buyer', email: 'buyer@test.com', role: 'buyer' },
      { id: 2, name: 'Priya Seller', email: 'seller@test.com', role: 'seller' },
      { id: 3, name: 'Admin Ji', email: 'admin@test.com', role: 'admin' },
    ];

    const foundUser = mockUsers.find((u) => u.email === email);
    if (foundUser && password === 'password') {
      login(foundUser, 'mock-jwt-token-123');
      if (foundUser.role === 'admin') navigate('/admin/orders');
      else if (foundUser.role === 'seller') navigate('/seller/listings');
      else navigate('/listings');
    } else {
      alert('Invalid credentials! Use buyer@test.com / password');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
      <p className="mt-3 text-center text-sm">
        No account? <Link to="/register" className="text-blue-600">Register</Link>
      </p>
      <p className="mt-2 text-xs text-gray-400 text-center">
        Demo: buyer@test.com / seller@test.com / admin@test.com (Password: password)
      </p>
    </div>
  );
};

export default Login;
