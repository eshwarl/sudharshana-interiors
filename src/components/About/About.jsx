import { motion } from "framer-motion";

const stats = [
  {
    number: "500+",
    title: "Projects Completed",
  },
  {
    number: "10+",
    title: "Years Experience",
  },
  {
    number: "100%",
    title: "Client Satisfaction",
  },
];

const About = () => {
  return (
   <section
    id="about"
    className="bg-[#0B0B0B] py-28"
>

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">

        {/* Left */}

        <motion.div

          initial={{ opacity: 0, x: -80 }}

          whileInView={{ opacity: 1, x: 0 }}

          transition={{ duration: 0.8 }}

          viewport={{ once: true }}

        >

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
            className="rounded-2xl shadow-2xl"
          />

        </motion.div>

        {/* Right */}

        <motion.div

          initial={{ opacity: 0, x: 80 }}

          whileInView={{ opacity: 1, x: 0 }}

          transition={{ duration: 0.8 }}

          viewport={{ once: true }}

        >

          <p className="text-[#D4AF37] uppercase tracking-[5px]">
            About Us
          </p>

          <h2
            className="text-6xl mt-5 mb-8"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Creating Luxury
            <br />
            Living Spaces
          </h2>

          <p className="text-gray-400 leading-8">

            At Sudharshana Interiors & Exteriors,
            we specialize in transforming homes and commercial spaces
            into elegant environments through innovative design,
            premium materials, and meticulous craftsmanship.

          </p>

          <div className="grid grid-cols-3 gap-6 mt-14">

            {stats.map((item) => (

              <div
                key={item.title}
                className="text-center border border-[#D4AF37]/30 rounded-xl py-8"
              >

                <h2 className="text-4xl text-[#D4AF37] font-bold">

                  {item.number}

                </h2>

                <p className="text-gray-400 mt-2 text-sm">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default About;