import { useState } from "react";
import { motion } from "framer-motion";
import { TextField, Button } from "@mui/material";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID, // EmailJS Service ID
        import.meta.env.VITE_TEMPLATE_ID, // EmailJS Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_API_KEY // EmailJS Public Key
      );
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-5 w-full flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="md:text-4xl font-bold mb-12 font-serif bg-linear-to-br from-emerald-700 to-purple-700 text-transparent bg-clip-text text-2xl"
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl">
        {/* Left side icons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-5 md:w-1/3"
        >
          <a
            href="mailto:khusbuladesignmax@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-200 hover:text-teal-600 transition text-lg"
          >
            <FaEnvelope className="text-2xl" /> Email
          </a>
          <a
            href="https://github.com/nahiyankhan55"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-200 hover:text-black transition text-lg"
          >
            <FaGithub className="text-2xl" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kushbula-ahmed-nahiyan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-200 hover:text-sky-700 transition text-lg"
          >
            <FaLinkedin className="text-2xl" /> LinkedIn
          </a>
        </motion.div>

        {/* Right side form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col gap-6"
        >
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
          />
          <Button
            type="submit"
            variant="contained"
            className="bg-emerald-600 hover:bg-emerald-700 transition"
          >
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
