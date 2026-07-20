import { motion } from "framer-motion";
import {
  FaCouch,
  FaKitchenSet,
  FaBuilding,
  FaPaintRoller,
  FaLightbulb,
  FaHouse,
} from "react-icons/fa6";

const services = [
  {
    icon: <FaHouse size={42} />,
    title: "False Ceiling & Painting Works",
    desc: "Transform your interiors with stylish false ceilings and premium-quality painting that adds elegance and durability.",
  },
  {
    icon: <FaKitchenSet size={42} />,
    title: "Flooring & Tiles",
    desc: "Enhance your spaces with high-quality flooring and beautifully crafted tile installations for a modern finish.",
  },
  {
    icon: <FaCouch size={42} />,
    title: "Waterproofing",
    desc: "Protect your property from leaks and moisture with reliable waterproofing solutions for roofs, walls, and bathrooms.",
  },
  {
    icon: <FaBuilding size={42} />,
    title: "Plumbing & Electrical",
    desc: "Professional plumbing and electrical services ensuring safety, efficiency, and long-lasting performance.",
  },
  {
    icon: <FaPaintRoller size={42} />,
    title: "Cupboard & Wardrobe",
    desc: "Custom-designed cupboards and wardrobes that maximize storage while complementing your interior aesthetics.",
  },
  {
    icon: <FaLightbulb size={42} />,
    title: "Lighting Design",
    desc: "Create the perfect ambiance with innovative lighting designs that blend functionality with modern elegance.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#111] py-28">

      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[6px] text-[#D4AF37]">
            Our Services
          </p>

          <h2
            className="text-6xl mt-4 mb-5"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Luxury Design Solutions
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            We provide premium interior and exterior design services
            tailored to create timeless spaces with elegance and quality.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-10 hover:border-[#D4AF37] duration-500"
            >

              <div className="text-[#D4AF37] mb-8">
                {service.icon}
              </div>

              <h3 className="text-2xl mb-4 font-semibold">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;