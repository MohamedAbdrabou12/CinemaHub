/**
 * Authentication Context
 * Manages user authentication state:
 * - User login/logout functionality
 * - Google authentication integration
 * - User data persistence in localStorage
 * - Protected route handling
 * - Profile update functions
 */
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create authentication context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load user from localStorage on app start
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const register = async (userData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find(u => u.email === userData.email);

    if (existingUser) {
      throw new Error('Email already exists');
    }

    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      photoURL: null,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Auto login after registration
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return newUser;
  };

  const login = async (credentials) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === credentials.email && u.password === credentials.password);

    if (!user) {
      throw new Error('Invalid email or password');
    }

    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = async (updatedData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.id === user.id);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    const updatedUser = { ...users[userIndex], ...updatedData };
    users[userIndex] = updatedUser;

    localStorage.setItem('users', JSON.stringify(users));
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    return updatedUser;
  };

  const googleSignIn = async () => {
    try {
      // Simulating Google Sign-in with mock data
      const googleUser = {
        id: Date.now(),
        name: 'Google User',
        email: 'user@gmail.com',
        photoURL: 'https://lh3.googleusercontent.com/a/default-user',
        createdAt: new Date().toISOString(),
        provider: 'google'
      };

      // Save the user to local storage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find(u => u.email === googleUser.email);

      if (!existingUser) {
        users.push(googleUser);
        localStorage.setItem('users', JSON.stringify(users));
      }

      setUser(existingUser || googleUser);
      localStorage.setItem('user', JSON.stringify(existingUser || googleUser));
      return existingUser || googleUser;
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      register,
      updateProfile,
      googleSignIn,
      isAuthenticated: !!user,
      loading
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};