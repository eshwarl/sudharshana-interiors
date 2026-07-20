import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#D4AF37]/20">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <h2
              className="text-4xl text-[#D4AF37] font-bold"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Sudharshana
            </h2>

            <p className="uppercase tracking-[4px] text-sm">
              Interiors & Exteriors
            </p>

            <p className="text-gray-400 mt-6 leading-7">
              We transform homes, villas and commercial spaces into
              luxurious environments with modern designs,
              premium materials and exceptional craftsmanship.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl mb-6 text-[#D4AF37]">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <a href="#home" className="hover:text-[#D4AF37]">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-[#D4AF37]">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-[#D4AF37]">
                  Services
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-[#D4AF37]">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#D4AF37]">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl mb-6 text-[#D4AF37]">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#D4AF37]" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#D4AF37]" />
                <span>info@sudharshanainteriors.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#D4AF37]" />
                <span>Hyderabad, Telangana</span>
              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-2xl mb-6 text-[#D4AF37]">
              Follow Us
            </h3>

            <p className="text-gray-400 mb-8">
              Stay connected with our latest interior projects
              and design inspirations.
            </p>

            <div className="flex gap-5">

              <a
                href="#"
                className="bg-[#111] p-4 rounded-full hover:bg-[#D4AF37] hover:text-black duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="bg-[#111] p-4 rounded-full hover:bg-[#D4AF37] hover:text-black duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-[#111] p-4 rounded-full hover:bg-[#D4AF37] hover:text-black duration-300"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800 py-6">

        <p className="text-center text-gray-500">

          © {new Date().getFullYear()} Sudharshana Interiors & Exteriors.
          All Rights Reserved.

        </p>

      </div>

    </footer>
  );
};

export default Footer;