import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 size={45} />,
    label: "HTML5",
    color: "text-orange-600",
    box: "bg-gradient-to-br from-orange-100 via-white to-white",
    shadow: "hover:shadow-orange-300",
    border: "border-orange-600",
  },
  {
    icon: <FaCss3Alt size={45} />,
    label: "CSS3",
    color: "text-blue-600",
    box: "bg-gradient-to-br from-blue-100 via-white to-white",
    shadow: "hover:shadow-blue-300",
    border: "border-blue-600",
  },
  {
    icon: <SiTailwindcss size={45} />,
    label: "Tailwind CSS",
    color: "text-cyan-500",
    box: "bg-gradient-to-br from-cyan-100 via-white to-white",
    shadow: "hover:shadow-cyan-300",
    border: "border-cyan-500",
  },
  {
    icon: <SiJavascript size={45} />,
    label: "JavaScript",
    color: "text-yellow-600",
    box: "bg-gradient-to-br from-yellow-100 via-white to-white",
    shadow: "hover:shadow-yellow-300",
    border: "border-yellow-600",
  },
  {
    icon: <FaReact size={45} />,
    label: "React.js",
    color: "text-blue-400",
    box: "bg-gradient-to-br from-blue-100 via-white to-white",
    shadow: "hover:shadow-blue-200",
    border: "border-blue-400",
  },
  {
    icon: <FaNodeJs size={45} />,
    label: "Node.js",
    color: "text-green-600",
    box: "bg-gradient-to-br from-green-100 via-white to-white",
    shadow: "hover:shadow-green-300",
    border: "border-green-600",
  },
  {
    icon: <SiExpress size={45} />,
    label: "Express.js",
    color: "text-gray-600",
    box: "bg-gradient-to-br from-gray-100 via-white to-white",
    shadow: "hover:shadow-gray-300",
    border: "border-gray-600",
  },
  {
    icon: <SiMongodb size={45} />,
    label: "MongoDB",
    color: "text-green-700",
    box: "bg-gradient-to-br from-green-100 via-white to-white",
    shadow: "hover:shadow-green-300",
    border: "border-green-700",
  },
  {
    icon: <SiFirebase size={45} />,
    label: "Firebase",
    color: "text-yellow-500",
    box: "bg-gradient-to-br from-yellow-100 via-white to-white",
    shadow: "hover:shadow-yellow-300",
    border: "border-yellow-500",
  },
  {
    icon: <FaGitAlt size={45} />,
    label: "Git & GitHub",
    color: "text-orange-500",
    box: "bg-gradient-to-br from-orange-100 via-white to-white",
    shadow: "hover:shadow-orange-300",
    border: "border-orange-500",
  },
  {
    icon: <FaFigma size={45} />,
    label: "Figma",
    color: "text-pink-500",
    box: "bg-gradient-to-br from-pink-100 via-white to-white",
    shadow: "hover:shadow-pink-300",
    border: "border-pink-500",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-5 w-full flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="md:text-4xl font-bold mb-5 font-serif bg-linear-to-br from-emerald-700 to-purple-700 text-transparent bg-clip-text text-2xl"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl w-full">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`${skill.box} shadow-lg rounded-xl p-6 flex flex-col items-center justify-center gap-3 border-2 ${skill.border} transition ${skill.shadow}`}
          >
            <div className={skill.color}>{skill.icon}</div>
            <p className={`text-xl font-semibold ${skill.color}`}>
              {skill.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
