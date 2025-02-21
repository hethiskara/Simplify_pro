import { useState } from "react";
import Button from "../components/Button";
import shoe8 from "../assets/images/shoe8.png";
import AuthModal from "../components/AuthModal"; // Assuming you have a common AuthModal component

const SuperQuality = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal
  const [isSignup, setIsSignup] = useState(true); // Set to true to show signup form by default

  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <Info setIsModalOpen={setIsModalOpen} setIsSignup={setIsSignup} />
      <ImageSec />
      {/* Display modal */}
      {isModalOpen && (
        <AuthModal setIsModalOpen={setIsModalOpen} isSignup={isSignup} setIsSignup={setIsSignup} />
      )}
    </section>
  );
};

function Info({ setIsModalOpen, setIsSignup }) {
  return (
    <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
        We started Simplify Pro to  
        <span className="text-coral-red"> fix the issues  </span>
        <span className="text-coral-red"> we faced while </span> job searching.
      </h2>
      <p className="mt-4 lg:max-w-lg info-text">
        Finding a job sucks. In college, we each applied to over 100 positions every recruiting cycle, spending hours finding roles that fit our interests, manually entering the same information on every application, and trying to stay organized using spreadsheets. After experimenting with virtually every job board and recruiting website out there, one thing became clear: there was no good solution.
      </p>
      <div className="mt-11">
        <Button 
          label="Sign-Up Now" 
          onClick={() => {
            setIsSignup(true); // Make sure we are in signup mode
            setIsModalOpen(true); // Open the modal
          }} 
        />
      </div>
    </div>
  );
}

function ImageSec() {
  return (
    <div className="flex flex-1 justify-center items-center ">
      <img
        src={shoe8}
        alt="shoe8"
        width={570}
        height={522}
        className="object-contain"
      />
    </div>
  );
}

export default SuperQuality;
