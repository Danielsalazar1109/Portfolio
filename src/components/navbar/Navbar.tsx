import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [text] = useTypewriter({
    words: ['Daniel Salazar'],
    loop: true,
  });

  return (
    <motion.nav
      className="fixed top-0 w-full bg-black shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-white">
            {text}
            <Cursor cursorColor="white" />
          </h1>
          <button
            className="bg-transparent text-white fixed right-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      <motion.div
        className={`fixed top-16 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        initial={{ opacity : 0 }}
        animate={{ x: isOpen ? 0 : '100%', opacity:isOpen? 1:0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <a
                href="/"
                className="hover:text-gray-300 transition duration-300 text-white mx-20"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-300 transition duration-300 text-white mx-20"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-gray-300 transition duration-300 text-white mx-20"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-gray-300 transition duration-300 text-white mx-20"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-300 transition duration-300 text-white mx-20"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
