import { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import AuthModal from "../components/AuthModal"; // Import the common AuthModal component

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  console.log("Modal Open State:", isModalOpen); // Debug log

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <Info setIsModalOpen={setIsModalOpen} />
      <ImagesSection />
      {isModalOpen && (
        <AuthModal setIsModalOpen={setIsModalOpen} isSignup={isSignup} setIsSignup={setIsSignup} />
      )}
    </section>
  );
};

function Info({ setIsModalOpen }) {
  return (
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <InfoText />
      <Button
        label="Login Now"
        iconURL={arrowRight}
        onClick={() => {
          console.log("Login Now Clicked"); // Debug log
          setIsModalOpen(true);
        }}
      />
    </div>
  );
}

function InfoText() {
  return (
    <>
      <p className="text-xl text-coral-red font-montserrat">Simplified Job Application</p>
      <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
      <span className="xl:bg-white xl:whitespace-nowrap relative pr-10 z-[5]">
          Automating
        </span>
        <br />
        <span className="text-coral-red relative top-3 inline-block">
          Applications
        </span>
      </h1>
      <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
        Get started with Simplify Pro.
      </p>
    </>
  );
}

function ImagesSection() {
  return (
    <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center z-[5]">
        <img
          src={bigShoe1}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-[5]"
        />
    </div>
  );
}

export default Hero;
