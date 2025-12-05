import { motion } from "framer-motion";

const projects = [
  {
    title: "GreenNest",
    image: "https://i.ibb.co.com/R4jbCDmx/greennest.jpg",
    description:
      "GreenNest is a SPA for indoor plant lovers. Explore plant care guides, buy plants, and book expert consultations.",
    tech: ["React", "Tailwind CSS", "Firebase", "MUI"],
    live: "https://greennest-a9b12-nahiyan.netlify.app/",
    github: "https://github.com/nahiyankhan55/B12-A9-Web",
  },
  {
    title: "E.martBD",
    image: "https://i.ibb.co.com/vxNDNnv4/emartbd.jpg",
    description:
      "E.martBD is an e-commerce platform built with Next.js, offering secure shopping with user authentication and protected routes.",
    tech: ["Next.js", "React", "Tailwind CSS", "NextAuth"],
    live: "https://ejp12b-nextjs-task-web-nahiyan-ecommerce1128.vercel.app/",
    github: "https://github.com/nahiyankhan55/ejp-nextjs-task-client",
  },
  {
    title: "IE Hub",
    image: "https://i.ibb.co.com/DS7jS61/iehub.jpg",
    description:
      "IE Hub is a full-stack Import-Export management platform. Manage products, track imports/exports, and maintain a personal dashboard.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase"],
    live: "https://b12a10-nahiyan-ieh.netlify.app/",
    github: "https://github.com/nahiyankhan55/b12a10-web",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-5 w-full flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="md:text-4xl font-bold mb-12 font-serif text-2xl bg-linear-to-br from-emerald-700 to-purple-700 text-transparent bg-clip-text"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white dark:bg-gray-900 shadow-md shadow-gray-400 hover:shadow-lg transition duration-300 rounded-xl overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded font-medium transition"
                >
                  Live Site
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 hover:bg-gray-900 text-white py-2 rounded font-medium transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
