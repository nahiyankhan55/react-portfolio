import { motion } from "framer-motion";
import image from "/image1.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full mt-20 px-5 flex flex-col items-center text-left"
    >
      <div className="flex items-center md:flex-row flex-col gap-5 max-w-6xl mx-auto">
        <motion.img
          src={image}
          alt="my_image"
          className="w-40 sm:w-56 md:w-64 h-60 object-cover sm:h-72 md:h-80 rounded-3xl shadow-lg"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:text-4xl font-bold mb-2 font-serif bg-linear-to-br from-sky-500 to-black text-transparent bg-clip-text text-2xl"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl leading-relaxed text-lg"
          >
            <p className="text-left">
              I am Kushbula Ahmed Nahiyan Khan, a dedicated MERN Stack Developer
              from Barishal, Bangladesh. I work with MongoDB, Express, React,
              and Node, focusing on building full-stack web applications. My
              goal is to work in a professional environment, build scalable
              real-world applications, and grow into an industry-ready developer
              while consistently contributing high-quality code.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
