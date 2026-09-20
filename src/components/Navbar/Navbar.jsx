// import { useEffect, useState } from "react";
// import { FaPhoneAlt } from "react-icons/fa";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-black/95 shadow-lg py-4" : "bg-transparent py-6"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-8">

//         {/* Logo */}

//         <div>
//           <h1
//             className="text-4xl text-[#D4AF37] font-bold"
//             style={{ fontFamily: "Cormorant Garamond" }}
//           >
//             Sudharshana
//           </h1>

//           <p className="text-xs tracking-[4px] uppercase">
//             Interiors & Exteriors
//           </p>
//         </div>

//         {/* Navigation */}

//         <ul className="hidden md:flex gap-10 uppercase text-sm font-medium">

//           <li>
//             <a href="#home" className="hover:text-[#D4AF37] duration-300">
//               Home
//             </a>
//           </li>

//           <li>
//             <a href="#about" className="hover:text-[#D4AF37] duration-300">
//               About
//             </a>
//           </li>

//           <li>
//             <a href="#services" className="hover:text-[#D4AF37] duration-300">
//               Services
//             </a>
//           </li>

//           <li>
//             <a href="#projects" className="hover:text-[#D4AF37] duration-300">
//               Projects
//             </a>
//           </li>

//           <li>
//             <a href="#contact" className="hover:text-[#D4AF37] duration-300">
//               Contact
//             </a>
//           </li>

//         </ul>

//         <button className="hidden md:flex items-center gap-2 bg-[#D4AF37] px-6 py-3 rounded-full text-black font-semibold hover:scale-105 duration-300">

//           <FaPhoneAlt />

//           Call Now

//         </button>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/images/logo.jpeg";

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
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">

        {/* ================= LOGO SECTION ================= */}
        <a
          href="#home"
          className="flex items-center gap-3 shrink-0"
        >

          {/* Circular Logo */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-[#D4AF37]/60 shrink-0">
            <img
              src={logo}
              alt="Sudharshana Interiors and Exteriors Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Brand Name */}
          <div className="hidden sm:flex items-center gap-3">

            {/* Gold Divider */}
            <div className="h-12 w-[1px] bg-[#D4AF37]" />

            <div className="flex flex-col">

              <h1
                className="text-lg sm:text-xl lg:text-2xl tracking-wide text-[#D4AF37] leading-tight"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                SUDHARSHANA
              </h1>

              <p className="text-[9px] sm:text-[10px] tracking-[2px] uppercase text-white whitespace-nowrap mt-1">
                INTERIORS AND EXTERIORS
              </p>

            </div>

          </div>

        </a>

        {/* ================= NAVIGATION ================= */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 uppercase text-xs xl:text-sm font-medium text-white">

          <li>
            <a
              href="#home"
              className="relative group hover:text-[#D4AF37] transition-colors duration-300"
            >
              Home
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="relative group hover:text-[#D4AF37] transition-colors duration-300"
            >
              About
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="relative group hover:text-[#D4AF37] transition-colors duration-300"
            >
              Services
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="relative group hover:text-[#D4AF37] transition-colors duration-300"
            >
              Projects
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="relative group hover:text-[#D4AF37] transition-colors duration-300"
            >
              Contact
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>

        </ul>

        {/* ================= CALL NOW ================= */}
        <a
          href="tel:+919000991744"
          className="hidden sm:flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B08D24] text-black px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md"
        >
          <FaPhoneAlt className="text-xs sm:text-sm" />
          <span>Call Now</span>
        </a>

      </div>
    </nav>
  );
};

export default Navbar;