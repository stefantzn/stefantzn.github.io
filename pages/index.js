import React, { useState, useEffect, useRef } from 'react';
import LoadingPage from '../components/LoadingPage.js';
import ParticleContainer from '../components/Particles.js';
import { FaLinkedin, FaGithub, FaFileAlt} from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { Helmet } from 'react-helmet';
import NET from 'vanta/dist/vanta.net.min';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

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


    NET({
      el: '#vanta',
    })

 
  });

  return (
    <div ref={myRef}>
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
      
      <div className="background" id="vanta"></div>
      <div className="text-white flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold mb-4 text-center">Stefan Tuczynski</h1>
        <p className="text-lg text-center">Computer Engineering Student @ University of Waterloo</p>
        <div className="flex items-center justify-center left-1/2 transform space-x-10 mt-4">
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
          href="mailto:svtuczyn@uwaterloo.ca"
          rel="noopener noreferrer"
          className="text-white hover:text-[#1DB954] transition duration-300"
        >
          <IoIosMail size={40} />
        </a>
          <a
            href="/resume.pdf"  
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#6c63ff] transition duration-300"
          >
            <FaFileAlt size={40} />
          </a>
      </div>
      </div>

    </div>
  );
};

export default App;
