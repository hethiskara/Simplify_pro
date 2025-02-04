import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import { navLinks } from "../constants";
import AuthModal from "./AuthModal"; // Import AuthModal

const Nav = () => {
  const { user, logout } = useContext(AuthContext); // Get user & logout function
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal
  const [isSignup, setIsSignup] = useState(false); // Track signup/login mode
  const navigate = useNavigate(); // Initialize navigate

  const handleLogout = () => {
    logout(); // Clear user session
    navigate("/Simplify_pro/"); // Redirect to home after logout
  };

  return (
    <header className="padding-x py-6 w-full z-10 absolute top-0 left-0 bg-white shadow-md">
      <nav className="flex justify-between items-center w-full max-container">
        {/* Logo */}
        <div className="flex items-center">
          <p className="text-3xl font-bold text-black-500">
            Simplify <span className="text-coral-red">Pro</span>
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-1 justify-center items-center gap-10 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Login/Logout Button */}
        <div className="flex items-center">
          {user ? (
            <button
              onClick={handleLogout} // Call handleLogout when clicked
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsSignup(false); // Default to login modal
              }}
              className="bg-coral-red text-white px-4 py-2 rounded"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      {/* Render the AuthModal when isModalOpen is true */}
      {isModalOpen && (
        <AuthModal
          setIsModalOpen={setIsModalOpen}
          isSignup={isSignup}
          setIsSignup={setIsSignup} // Pass function to toggle signup/login
        />
      )}
    </header>
  );
};

export default Nav;
