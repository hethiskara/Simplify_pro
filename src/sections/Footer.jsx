import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container flex flex-col items-center text-center py-10">
      <p className="text-3xl font-bold text-coral-red">
        Simplify <span className="text-coral-red">Pro</span>
      </p>
      <p className="mt-4 text-base leading-7 font-montserrat text-white-400">
        We're here for every step of your application.
      </p>
      <div className="flex items-center mt-6">
        <img
          className="rounded-full m-2"
          src={copyrightSign}
          alt="copy right sign"
          width={20}
          height={20}
        />
        <p className="font-montserrat text-white-400">
          Copyright. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
