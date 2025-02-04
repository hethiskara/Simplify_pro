// src/context/AuthContext.jsx

import { createContext, useState, useContext } from "react";
import { loginUser, registerUser } from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to handle login
  const login = async (email, password) => {
    try {
      const data = await loginUser(email, password);
      setUser(data.user); // Store user details
      localStorage.setItem("token", data.token); // Save token for future requests
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Function to handle signup
  const signup = async (name, email, password) => {
    try {
      const data = await registerUser(name, email, password);
      setUser(data.user);
      localStorage.setItem("token", data.token);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const logout = () => {
    setUser(null); // Clear the user data
    localStorage.removeItem("token"); // Remove token from local storage
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Define and export the `useAuth` hook to access the context
export const useAuth = () => {
  return useContext(AuthContext); // Access the AuthContext
};
