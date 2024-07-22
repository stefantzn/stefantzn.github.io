import React, { useEffect } from 'react';

const ParticleContainer = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load particles.js script dynamically
      const particlesScript = document.createElement('script');
      particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      particlesScript.async = true;
      document.body.appendChild(particlesScript);

      particlesScript.onload = () => {
        // Neon colors
        const neonGreen = '#39FF14';
        const neonCyan = '#00FFFF';
        const neonPink = '#FF6EC7';
        const neonYellow = '#FFFF00';

        // Initialize particles.js for the first instance
        window.particlesJS('particles-js-1', {
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: neonGreen },
            shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 }, image: { src: 'img/github.svg', width: 100, height: 100 } },
            opacity: { value: 0.6, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 1, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 150, color: neonGreen, opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: 'repulse',
              },
              onclick: {
                enable: false,
                mode: 'push',
              },
            },
          },
        });
        window.particlesJS('particles-js-2', {
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: neonCyan },
            shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 }, image: { src: 'img/github.svg', width: 100, height: 100 } },
            opacity: { value: 0.6, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 1, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 150, color: neonCyan, opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: 'repulse',
              },
              onclick: {
                enable: false,
                mode: 'push',
              },
            },
          },
        });
        window.particlesJS('particles-js-3', {
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: neonPink },
            shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 }, image: { src: 'img/github.svg', width: 100, height: 100 } },
            opacity: { value: 0.6, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 1, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 150, color: neonPink, opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: 'repulse',
              },
              onclick: {
                enable: false,
                mode: 'push',
              },
            },
          },
        });

        window.particlesJS('particles-js-4', {
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: neonYellow },
            shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 }, image: { src: 'img/github.svg', width: 100, height: 100 } },
            opacity: { value: 0.6, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 1, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 150, color: neonYellow, opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: 'repulse',
              },
              onclick: {
                enable: false,
                mode: 'push',
              },
            },
          },
        });
        
      };
    }
  }, []);

  return (
    <div>
      <div id="particles-js-1" className="absolute w-full h-full"></div>
      <div id="particles-js-2" className="absolute w-full h-full"></div>
      <div id="particles-js-3" className="absolute w-full h-full"></div>
      <div id="particles-js-4" className="absolute w-full h-full"></div>
    </div>
  );
};

export default ParticleContainer;