import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Image from 'next/image'

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-shrink-0 mr-4"
        >
          <Image
            className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover mb-4 md:mb-0"
            style={{
              boxShadow: '0 0 5px rgba(255, 0, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.7), 0 0 15px rgba(0, 0, 255, 0.7)',
              animation: 'vibrant-glow 3s infinite alternate',
            }}
            src="/portrait.png"
            alt="Profile"
            width="1000"
            height="1000"
          />
        </motion.div>

        <motion.div className="text-white text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-5xl mb-6"
          >
            Hi, I'm Stefan
          </motion.h1>

          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="list-none text-sm md:text-base text-white text-center md:text-left"
          >
            <motion.li className="mb-3 whitespace-pre-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
              📚 First Year Computer Engineering Student at the University of Waterloo
            </motion.li>
            <motion.li className="mb-3 whitespace-pre-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
              🌱 Currently learning React and Embedded Programming with C
            </motion.li>
            <motion.li className="mb-3 whitespace-pre-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.5 }}>
              💼 Seeking Summer 2024 Internship Opportunities
            </motion.li>
            <motion.li className="mb-3 whitespace-pre-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 3 }}>
              🗣️ I speak English and I'm learning Japanese
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
