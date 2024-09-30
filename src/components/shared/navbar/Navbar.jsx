import { Link, NavLink } from "react-router-dom";
import iPad from "../../../assets/iPadPro.jpg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-[80px] w-full text-white flex justify-center items-center fixed z-50 duration-200 ${
        isScrolled
          ? "backdrop-blur-md shadow-lg"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="w-11/12 flex justify-between items-center">
        <div>
          <Link to="/" className="hover:cursor-pointer">
            {/* <img className="size-12" src={iPad} alt="" /> */}
            <h1 className="text-2xl font-bold text-blue-700">Demo</h1>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-5 font-semibold">
          <NavLink
            to={"/home"}
            className={({ isActive, isPending }) =>
              `${isActive ? "text-blue-600 font-bold" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/service"}
            className={({ isActive, isPending }) =>
              `${isActive ? "text-blue-600 font-bold" : ""}`
            }
          >
            Service
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive, isPending }) =>
              `${isActive ? "text-blue-600 font-bold" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive, isPending }) =>
              `${isActive ? "text-blue-600 font-bold" : ""}`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive, isPending }) =>
              `${isActive ? "text-blue-600 font-bold" : ""}`
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
