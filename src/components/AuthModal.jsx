import React from "react";

const AuthModal = ({ setIsModalOpen, isSignup, setIsSignup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative z-50">
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={() => {
            setIsModalOpen(false); // Close the modal
          }}>
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">{isSignup ? "Sign Up" : "Login"}</h2>

        <form>
          {isSignup && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="w-full p-2 border rounded-md" required />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="w-full p-2 border rounded-md" required />
          </div>
          <button type="submit" className="w-full bg-coral-red text-white p-2 rounded-md">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {isSignup ? "Already have an account?" : "New user?"}{" "}
          <span
            className="text-coral-red cursor-pointer"
            onClick={() => {
              setIsSignup(!isSignup); // Toggle between Signup and Login
            }}>
            {isSignup ? "Login now" : "Sign up now"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
