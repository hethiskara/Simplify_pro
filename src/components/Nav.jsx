import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 w-full z-10 absolute">
      <nav className="flex justify-between items-center max-container">
      <div>
        <p className="text-3xl font-bold text-black-500">
          Simplify <span className="text-coral-red">Pro</span>
        </p>
      </div>
      <ul className="flex flex-1 justify-center items-center gap-20 max-lg:hidden pl-20">

          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray  hover:text-black">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
