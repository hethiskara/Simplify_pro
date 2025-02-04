import { createContext, useState } from "react";
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

  return (
    <AuthContext.Provider value={{ user, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
