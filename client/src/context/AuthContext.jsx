import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user is already logged in on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token });
    }
  }, []);

  // Handle User Login
  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setUser({ token: res.data.token });
    } catch (error) {
      console.error("Login failed:", error.response?.data?.msg || error.message);
      throw error;
    }
  };

  // Handle New User Registration
  const register = async (name, email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      setUser({ token: res.data.token });
    } catch (error) {
      console.error("Registration failed:", error.response?.data?.msg || error.message);
      throw error;
    }
  };

  // Handle Logout
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Validate the children prop to clear linter warnings
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};