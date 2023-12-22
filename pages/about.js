// about.js

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const About = () => {
    return (
      <div>
        <Navbar />
  
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center mr-40 text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl mb-6"
            >
              Hi, I'm Stefan
            </motion.h1>
  
            <motion.ul
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="list-disc text-small text-left"
            >
              <motion.li className="mb-2 whitespace-pre-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
                📚 First Year Computer Engineering Student at the University of Waterloo
              </motion.li>
              <motion.li className="mb-2 whitespace-pre-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
                🌱 Currently learning React and Embedded Programming with C
              </motion.li>
              <motion.li className="mb-2 whitespace-pre-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.5 }}>
                💼 Seeking Summer 2024 Internship Opportunities
              </motion.li>
              <motion.li className="mb-2 whitespace-pre-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 3 }}>
                🗣️ I speak English and I'm learning Japanese
              </motion.li>
              {/* Add more list items as needed */}
            </motion.ul>
          </div>
  
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-40 h-40 rounded-full object-cover"
            style={{
              width: '20%',
              height: '20%',
              boxShadow: '0 0 5px rgba(255, 0, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.7), 0 0 15px rgba(0, 0, 255, 0.7)',
              animation: 'vibrant-glow 3s infinite alternate', // Add animation property
            }}
            src="/portrait.png"
            alt="Profile"
          />
        </div>
      </div>
    );
  };
  
  export default About;