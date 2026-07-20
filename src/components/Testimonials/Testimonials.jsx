import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Hyderabad",
    review:
      "Sudharshana Interiors completely transformed our home. The quality, finishing, and professionalism exceeded our expectations.",
  },
  {
    name: "Priya Sharma",
    location: "Secunderabad",
    review:
      "Our modular kitchen turned out exactly as we imagined. Excellent craftsmanship and timely delivery.",
  },
  {
    name: "Rahul Reddy",
    location: "Warangal",
    review:
      "Highly recommend Sudharshana Interiors. Their team paid attention to every detail and delivered premium work.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#111] py-28">
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-[#D4AF37]">
            Testimonials
          </p>

          <h2
            className="text-6xl mt-5"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            What Our Clients Say
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Customer satisfaction is at the heart of everything we do.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-[#1A1A1A] border border-gray-800 hover:border-[#D4AF37] rounded-2xl p-8 transition-all duration-500"
            >

              <div className="flex gap-1 text-[#D4AF37] mb-6">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-300 leading-8 italic">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-[#D4AF37] text-sm mt-2">
                  {item.location}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;