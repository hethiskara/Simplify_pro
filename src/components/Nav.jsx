import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import { navLinks } from "../constants";
import AuthModal from "./AuthModal"; // Import AuthModal

const Nav = () => {
  const { user, logout } = useContext(AuthContext); // Get user & logout function
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal

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

        {/* Login/Logout Button (Aligned Properly) */}
        <div className="flex items-center">
          {user ? (
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-coral-red text-white px-4 py-2 rounded"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      {/* Render the AuthModal when isModalOpen is true */}
      {isModalOpen && (
        <AuthModal setIsModalOpen={setIsModalOpen} isSignup={false} />
      )}
    </header>
  );
};

export default Nav;
