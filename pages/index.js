import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.js';
import LoadingPage from '../components/LoadingPage.js';
import ParticleContainer from '../components/Particles.js';
import { FaLinkedin, FaGithub, FaSpotify } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { LuInstagram } from 'react-icons/lu';
import Typed from 'react-typed';
import { Helmet } from 'react-helmet';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit');

    if (isFirstVisit === null) {
      // First visit
      localStorage.setItem('isFirstVisit', 'false');
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      // Not the first visit
      setLoading(false);
    }
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage color="#FFFFFF" />
      ) : (
        <ContentWithFadeIn isFirstVisit={localStorage.getItem('isFirstVisit')} />
      )}
    </div>
  );
};

const ContentWithFadeIn = ({ isFirstVisit }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Apply fade in effect only on the first visit
    if (isFirstVisit === 'false') {
      const fadeInTimeout = setTimeout(() => {
        setFadeIn(true);
      }, 500); // Adjust the delay based on your preference

      return () => clearTimeout(fadeInTimeout);
    }
  }, [isFirstVisit]);

  return (
    
    <div
      className={`opacity-0 ${fadeIn ? 'opacity-100' : ''}`}
      style={{ transition: 'opacity 1s ease-in-out' }}
    >
      <Helmet>
        <title>Stefan Tuczynski</title>
      </Helmet>

      <ParticleContainer />
      <Navbar fadeIn={isFirstVisit === 'false'} />
      {/* Your additional content */}
      <div className="text-white flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold mb-4 text-center">Stefan Tuczynski</h1>
        <p className="text-lg text-center">Computer Engineering Student @ University of Waterloo</p>
        <div className="mt-10">
          <Typed
            strings={['Engineering Student', 'Programmer', 'Learner', 'Hardware Enthusiast']}
            typeSpeed={75}
            backSpeed={40}
            loop
          />
        </div>
      </div>

      <div className="flex items-center justify-center fixed bottom-8 left-1/2 transform -translate-x-1/2 space-x-10">
        <a
          href="https://www.linkedin.com/in/stefan-tuczynski/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#0a66c2] transition duration-300"
        >
          <FaLinkedin size={40} />
        </a>
        <a
          href="https://github.com/stefantzn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#333] transition duration-300"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://instagram.com/stefantzn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#bc2a8d] transition duration-300"
        >
          <LuInstagram size={40} />
        </a>
        <a
          href="https://open.spotify.com/user/gc4ixa97ys0brkajg0mogwixm?si=cd3bf71fc8d146ea"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#1DB954] transition duration-300"
        >
          <FaSpotify size={40} />
        </a>
        <a
          href="mailto:tuczynskis@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#f2a60c] transition duration-300"
        >
          <IoIosMail size={40} />
        </a>
      </div>
    </div>
  );
};

export default App;
