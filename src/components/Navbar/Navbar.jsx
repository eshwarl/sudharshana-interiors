import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8">

        {/* Logo */}

        <div>
          <h1
            className="text-4xl text-[#D4AF37] font-bold"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Sudharshana
          </h1>

          <p className="text-xs tracking-[4px] uppercase">
            Interiors & Exteriors
          </p>
        </div>

        {/* Navigation */}

        <ul className="hidden md:flex gap-10 uppercase text-sm font-medium">

          <li>
            <a href="#home" className="hover:text-[#D4AF37] duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-[#D4AF37] duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-[#D4AF37] duration-300">
              Services
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-[#D4AF37] duration-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-[#D4AF37] duration-300">
              Contact
            </a>
          </li>

        </ul>

        <button className="hidden md:flex items-center gap-2 bg-[#D4AF37] px-6 py-3 rounded-full text-black font-semibold hover:scale-105 duration-300">

          <FaPhoneAlt />

          Call Now

        </button>

      </div>
    </nav>
  );
};

export default Navbar;