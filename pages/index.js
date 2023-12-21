import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.js';
import LoadingPage from '../components/LoadingPage.js';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage color="#FFFFFF" />
      ) : (
        <ContentWithFadeIn />
      )}
    </div>
  );
};

const ContentWithFadeIn = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set fade-in to true after a short delay
    const fadeInTimeout = setTimeout(() => {
      setFadeIn(true);
    }, 500); // Adjust the delay based on your preference

    return () => clearTimeout(fadeInTimeout);
  }, []);

  return (
    <div className={`transition-opacity ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />

      {/* Your additional content */}
      <div className="text-white flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold mb-4">Stefan Tuczynski</h1>
        <p className="text-lg text-center">Computer Engineering Student @ University of Waterloo</p>
      </div>

      <div className="flex items-center justify-center fixed bottom-8 left-1/2 transform -translate-x-1/2 space-x-10">
        <a href="https://www.linkedin.com/in/stefan-tuczynski/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} color="#0077b5" /> {/* Adjust size and color as needed */}
        </a>
        <a href="https://github.com/stefantzn" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} color="#FFFFFF" /> {/* Adjust size and color as needed */}
        </a>
        <a href="mailto:tuczynskis@gmail.com" target="_blank" rel="noopener noreferrer">
          <IoIosMail size={40} color="#FFFFFF" /> {/* Adjust size and color as needed */}
        </a>
      </div>
    </div>
  );
};

export default App;
