// src/App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // Importing the useAuth hook
import { AuthProvider } from "./context/AuthContext"; // Importing AuthProvider
import { Hero, SuperQuality, Footer, Services } from "./sections";
import Nav from "./components/Nav";
import AuthModal from "../src/components/AuthModal"; 
import HomePage from "../src/home"; 

const App = () => {
  return (
    <AuthProvider> {/* Wrap everything in the AuthProvider */}
      <Router>
        <RouterWrapper />
      </Router>
    </AuthProvider>
  );
};

const RouterWrapper = () => {
  const { user, login, signup, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false); // Toggle between login/signup
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clear user data in context
    navigate("/"); // Redirect to home after logout
  };

  useEffect(() => {
    if (user) {
      navigate("/Simplify_pro/home");
    }
  }, [user, navigate]);

  return (
    <main className="relative">
      <Nav isLoggedIn={user !== null} handleLogout={handleLogout} />
      
      {/* Render the sections if the user is not logged in */}
      {!user && (
        <>
          <section className="xl:padding-l wide:padding-r padding-b">
            <Hero />
          </section>
          <section className="padding">
            <SuperQuality />
          </section>
          <section className="padding-x py-10">
            <Services />
          </section>
          <section className="padding-x padding-t bg-black pb-8">
            <Footer />
          </section>
        </>
      )}
      
      {/* Routes */}
      <Routes>
        <Route path="/Simplify_pro/home" element={<HomePage />} />
      </Routes>

      {/* Modal for login/signup */}
      {isModalOpen && <AuthModal setIsModalOpen={setIsModalOpen} isSignup={isSignup} setIsSignup={setIsSignup} />}
    </main>
  );
};

export default App;
