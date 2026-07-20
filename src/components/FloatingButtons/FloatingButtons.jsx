import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}

      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Call */}

      <a
        href="tel:+91XXXXXXXXXX"
        className="fixed bottom-24 right-6 bg-[#D4AF37] hover:bg-yellow-500 text-black p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110"
      >
        <FaPhoneAlt size={24} />
      </a>

      {/* Scroll to Top */}

      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-42 right-6 bg-white text-black p-3 rounded-full shadow-2xl z-50 hover:scale-110 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;