import React, { useState, useEffect, useRef } from 'react';
import LoadingPage from '../components/LoadingPage.js';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import NET from 'vanta/dist/vanta.net.min';
import Render from '../components/Render.js';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit');

    if (isFirstVisit === null) {
      localStorage.setItem('isFirstVisit', 'false');
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      setLoading(false);
    }

    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: '#vanta',
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

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
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isFirstVisit === 'false') {
      const fadeInTimeout = setTimeout(() => {
        setFadeIn(true);
      }, 500);

      return () => clearTimeout(fadeInTimeout);
    }
  }, [isFirstVisit]);

  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY / 2); // Adjust rotation speed here
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`opacity-0 ${fadeIn ? 'opacity-100' : ''}`}
      style={{ transition: 'opacity 1s ease-in-out' }}
    >
      <div>
        <title>Stefan Tuczynski</title>
        <div className="background" id="vanta"></div>
        <div className="text-white flex items-center justify-center h-screen">
          {/* Split the screen into two halves */}
          <div className="w-1/2 flex justify-center items-center">
            <div className="text-container text-center">
              <h1 className="text-6xl mb-4 gradient-text animate-gradient">Stefan Tuczynski</h1>
              <p className="text-lg">Computer Engineering Student @ University of Waterloo</p>
              <div className="flex items-center justify-center space-x-10 mt-4">
                <a
                  href="https://www.linkedin.com/in/stefan-tuczynski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#0a66c2] transition duration-300 icon"
                >
                  <FaLinkedin size={40} />
                </a>
                <a
                  href="https://github.com/stefantzn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#333] transition duration-300 icon"
                >
                  <FaGithub size={40} />
                </a>
                <a
                  href="mailto:svtuczyn@uwaterloo.ca"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#1DB954] transition duration-300 icon"
                >
                  <IoIosMail size={40} />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#6c63ff] transition duration-300 icon"
                >
                  <FaFileAlt size={40} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="render-container" style={{ transform: `rotate(${rotation}deg)` }}>
              <Render />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
