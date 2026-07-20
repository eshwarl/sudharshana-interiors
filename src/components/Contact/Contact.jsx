import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0B0B0B] py-28">
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-[#D4AF37]">
            Contact Us
          </p>

          <h2
            className="text-6xl mt-4"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Let's Build Your Dream Space
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            We'd love to hear about your project. Reach out today for a free
            consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="flex gap-5 items-center">
              <FaPhoneAlt className="text-[#D4AF37] text-2xl" />
              <div>
                <h3 className="font-semibold text-xl">Phone</h3>
                <p className="text-gray-400">+919000991700, +918374757141</p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <FaEnvelope className="text-[#D4AF37] text-2xl" />
              <div>
                <h3 className="font-semibold text-xl">Email</h3>
                <p className="text-gray-400">
                  info@sudharshanainteriors.com
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <FaMapMarkerAlt className="text-[#D4AF37] text-2xl" />
              <div>
                <h3 className="font-semibold text-xl">Address</h3>
                <p className="text-gray-400">
                  Warangal, Telangana
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/919000991700"
              href="https://wa.me/918374757141"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-xl font-semibold hover:scale-105 duration-300"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#161616] p-10 rounded-2xl border border-gray-800"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#222] p-4 rounded-lg mb-5 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#222] p-4 rounded-lg mb-5 outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-[#222] p-4 rounded-lg mb-5 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full bg-[#222] p-4 rounded-lg mb-6 outline-none resize-none"
            />

            <button
              className="w-full bg-[#D4AF37] text-black py-4 rounded-lg font-bold hover:scale-105 duration-300"
            >
              Send Enquiry
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;