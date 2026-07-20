import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
    id="home"
    className="h-screen flex items-center bg-cover bg-center relative"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600')",
    }}
>
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-8">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#D4AF37] uppercase tracking-[6px]"
        >
          Luxury Interior Design
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-7xl font-bold mt-6 leading-tight"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Transforming
          <br />
          Spaces Into
          <br />
          Masterpieces
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-300 max-w-xl mt-8 text-lg leading-8"
        >
          Premium Interior & Exterior Solutions crafted with
          elegance, creativity and precision.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-10 bg-[#D4AF37] px-8 py-4 rounded-full text-black font-semibold"
        >
          Get Free Consultation
        </motion.button>

      </div>
    </section>
  );
};

export default Hero;