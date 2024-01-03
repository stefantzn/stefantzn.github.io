import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const Blog = () => {
  const placeholderLink = '/placeholder-link'; // Replace with your actual link

  return (
    <div>
      <Navbar />
      <div className="bg-black text-white min-h-screen flex items-center justify-center">

        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            My Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-sm md:text-lg mb-8"
          >
            Welcome to my blog of stuff
          </motion.p>

          <a href={placeholderLink} className="hover:cursor-pointer"> {/* Added a placeholder link and cursor-pointer for hover effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
              className="bg-white text-black p-4 rounded-md mx-auto max-w-xs"
            >
              <h2 className="text-xl font-bold mb-4">Reflection on 1A</h2>
              <h2 className="text-sm font-bold mb-4">1/3/2024 • 5 min</h2>
              <div className="mb-4">
                <img src={'/ece1a.jpg'} alt="Placeholder" className="w-full h-auto rounded-md" />
              </div>
              <p className="text-sm mb-4">
                Looking back at my first term at the University of Waterloo
              </p>
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
