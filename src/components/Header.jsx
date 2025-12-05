import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import iamge from "/image1.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  const navShowHide = () => setNavShow((prev) => !prev);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full px-2 flex flex-col items-center"
    >
      <div id="home"></div>
      <nav className="bg-linear-to-r from-cyan-100/90 via-gray-100/90 to-purple-100/90 w-full flex items-center justify-between px-3 py-3 max-w-6xl mx-auto fixed mt-2 shadow-md z-50 rounded-full">
        <div className="flex items-center gap-2 relative">
          <button className="text-2xl md:hidden" onClick={navShowHide}>
            <RiMenu2Fill />
          </button>

          {navShow && (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="absolute md:hidden border-2 rounded-lg top-12 left-0 font-bold bg-gray-100 text-gray-700 p-4 shadow"
            >
              <ul className="flex flex-col gap-2 text-nowrap">
                <a href="./../../index.html">
                  <h1 className="text-lg font-semibold cursor-pointer font-serif hover:text-cyan-700 duration-300 transition">
                    Nahiyan
                  </h1>
                </a>
                <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
                  <a href="#home">Home</a>
                </li>
                <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
                  <a href="#about">About</a>
                </li>
                <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
                  <a href="#skills">Skills</a>
                </li>
                <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
                  <a href="#projects">Projects</a>
                </li>
                <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </motion.div>
          )}

          <a className="flex items-center gap-2" href="./../../index.html">
            <h1 className="text-2xl md:block hidden font-semibold cursor-pointer font-serif bg-linear-to-br from-pink-500 to-black text-transparent bg-clip-text duration-300 transition w-fit">
              Nahiyan
            </h1>
          </a>
        </div>

        <ul className="md:flex hidden items-center gap-3">
          <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
            <a href="#home">Home</a>
          </li>
          <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
            <a href="#about">About</a>
          </li>
          <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
            <a href="#skills">Skills</a>
          </li>
          <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
            <a href="#projects">Projects</a>
          </li>
          <li className="text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-200 py-1 px-3 rounded-lg">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <a
          href="https://github.com/nahiyankhan55/"
          target="_blank"
          className="sm:px-4 px-2 flex items-center gap-2 py-2 rounded-full bg-linear-to-br from-purple-700 to-sky-700 text-white hover:to-black hover:text-white transition duration-300 sm:text-base text-sm font-medium"
        >
          <span className="sm:flex hidden">GitHub</span>
          <FaGithub className="text-xl"></FaGithub>
        </a>
      </nav>

      {/* Section under nav: text from top & image from right */}
      <section className="w-full max-w-5xl mx-auto mt-28 px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 w-full"
        >
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold">
            Hi, I'm <br />{" "}
            <span className="lg:text-5xl sm:text-4xl font-serif bg-linear-to-r from-purple-800 via-black to-emerald-800 text-transparent bg-clip-text">
              {" "}
              Kushbula Ahmed{" "}
            </span>{" "}
            <br />{" "}
            <span className="md:text-4xl text-3xl font-serif bg-linear-to-br from-pink-500 to-black text-transparent bg-clip-text">
              Nahiyan
            </span>
          </h1>
          <p className="mt-3 text-purple-800 font-medium text-lg">
            Web Developer | MERN Specialist |{" "}
            <Typewriter
              words={["React.js", "Node.js", "Express.js", "MongoDB"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={800}
            />
          </p>
        </motion.div>

        <motion.img
          src={iamge}
          alt="my_image"
          className="w-40 sm:w-56 md:w-64 h-60 object-cover sm:h-72 md:h-80 rounded-3xl shadow-lg"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </section>
    </motion.header>
  );
};

export default Header;
