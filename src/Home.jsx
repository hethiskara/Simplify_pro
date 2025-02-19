import React, { useState } from "react";
import Footer from "./sections/Footer";
import Button from "./components/Button";
import AuthModal from "./components/AuthModal";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-gray-100">
      {/* Main Content Section */}
       {/* Welcome Section */}
       <div className="w-full bg-white text-center py-6 shadow-md mt-24">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
      </div>

      {/* Resume Upload Section */}
      <div className="w-full max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Resume</h2>
        <button type="button" className="px-4 py-2 bg-coral-red text-white rounded-md shadow hover:bg-black">
          Upload
        </button>
      </div>
      <main className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto p-6 gap-8">
        {/* Info Section */}
        <div className="w-full lg:w-1/2 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Streamline Your Job Search</h2>
          <p className="text-gray-600 mb-6">
            Fill in your details once, and let our system auto-apply to relevant jobs for you!
          </p>
          <button type="button" className="px-4 py-2 bg-coral-red text-white rounded-md shadow hover:bg-black">
            Get Started
          </button>
        </div>

        {/* User Input Form Section */}
        <div className="w-full lg:w-1/2 p-6 bg-white shadow-md rounded-lg mt-10">
          <h2 className="text-xl font-semibold mb-4">Enter Your Job Preferences</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Job Title" className="p-3 border rounded" />
            <input type="text" placeholder="Location" className="p-3 border rounded" />
            <input type="text" placeholder="Skills" className="p-3 border rounded" />
            <button type="button" className="px-4 py-2 bg-coral-red text-white rounded-md shadow hover:bg-black">
              Save Preferences
            </button>
          </form>
        </div>
      </main>

      {/* Footer Section */}
      <section className="w-full min-h-[200px] bg-black pb-8">
        <Footer />
      </section>

      {/* Authentication Modal */}
      {isModalOpen && (
        <AuthModal setIsModalOpen={setIsModalOpen} isSignup={isSignup} setIsSignup={setIsSignup} />
      )}
    </div>
  );
};

export default HomePage;
