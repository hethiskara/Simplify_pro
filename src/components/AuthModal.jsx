import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const AuthModal = ({ setIsModalOpen, isSignup, setIsSignup }) => {
  const { login, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // To store error messages
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        // Call signup function
        await signup(name, email, password);
      } else {
        // Call login function
        await login(email, password);
      }
      setIsModalOpen(false); // Close modal on success
      
      // Ensure navigation happens only after the context state is updated
      navigate("/Simplify_pro/home", { replace: true }); // Redirect to /Simplify_pro/home after login
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10000]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative z-[11000]">
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={() => setIsModalOpen(false)}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isSignup ? "Sign Up" : "Login"}
        </h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-coral-red text-white p-2 rounded-md">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {isSignup ? "Already have an account?" : "New user?"}{" "}
          <span className="text-coral-red cursor-pointer" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login now" : "Sign up now"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
