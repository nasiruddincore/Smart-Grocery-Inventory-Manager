import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold tracking-wide">Smart Grocery Manager</h1>
      <div>
        {user ? (
          <button 
            onClick={handleLogout} 
            className="bg-red-500 px-4 py-2 rounded font-semibold hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        ) : (
          <Link 
            to="/login" 
            className="bg-green-500 px-4 py-2 rounded font-semibold hover:bg-green-600 transition-colors"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}