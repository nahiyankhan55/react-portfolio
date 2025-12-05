import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="py-5 flex items-center justify-center gap-5 px-5 w-full bg-black text-white">
      <a
        href="mailto:khusbuladesignmax@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 font-medium hover:text-teal-600 transition text-lg"
      >
        <FaEnvelope className="text-2xl" />
      </a>
      <a
        href="https://github.com/nahiyankhan55"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 font-medium hover:text-gray-500 transition text-lg"
      >
        <FaGithub className="text-2xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/kushbula-ahmed-nahiyan/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 font-medium hover:text-sky-500 transition text-lg"
      >
        <FaLinkedin className="text-2xl" />
      </a>
    </section>
  );
};

export default Footer;
