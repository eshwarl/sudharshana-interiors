import { motion } from "framer-motion";

const projects = [
  {
    title: "Luxury Living Room",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  },
  {
    title: "Modern Kitchen",
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
  },
  {
    title: "Elegant Bedroom",
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  },
  {
    title: "Office Interior",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
  },
  {
    title: "TV Unit Design",
    category: "Furniture",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800",
  },
  {
    title: "Villa Exterior",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0B0B0B] py-28">

      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[6px] text-[#D4AF37]">
            Our Portfolio
          </p>

          <h2
            className="text-6xl mt-5"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Explore some of our finest interior and exterior transformations
            crafted with creativity, elegance and precision.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-8">

                <p className="text-[#D4AF37] uppercase tracking-[3px]">
                  {project.category}
                </p>

                <h3 className="text-3xl mt-2">
                  {project.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;