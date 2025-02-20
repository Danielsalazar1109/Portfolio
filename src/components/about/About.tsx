import DanielImg from "../../assets/Daniel.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full md:p-24  p-32 ">
      <div className="max-w-7xl md:mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            ¡Hi there! I am <span className="text-orange-500">Daniel</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-white sm:text-xl lg:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            I am a web development student, I am currently learning at{" "}
            <span className="text-blue-500">
              Cornerstone International College
            </span>
            . I am really passionate about web development and I want to learn
            more about it.
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center md:justify-start space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              My projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <img
            src={DanielImg}
            alt="Daniel"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
