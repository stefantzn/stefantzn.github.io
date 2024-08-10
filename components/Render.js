import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Render = () => {
  const mountRef = useRef(null);
  const [objToRender, setObjToRender] = useState('cherry'); // State for dynamic object

  useEffect(() => {
    // Ensure this code runs only on the client
    if (typeof window === 'undefined') return;

    // Create the scene
    const scene = new THREE.Scene();

    // Create the camera
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 100;

    // Create the renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight); // Set size based on the container
    mountRef.current.appendChild(renderer.domElement);

    // Load the GLTF model
    const loader = new GLTFLoader();
    let object;

    loader.load(
      `/cherry/scene.gltf`,
      (gltf) => {
        object = gltf.scene;
        object.position.y = -20; // Lower the object
        scene.add(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.error(error);
      }
    );

    // Add lights
    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "cherry" ? 5 : 1);
    scene.add(ambientLight);

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (object) {
        object.rotation.y += 0.001; // Slow rotation
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [objToRender]); // Dependency array to re-run if objToRender changes

  return <div ref={mountRef} style={{ height: '100vh', width: '40vw' }}></div>; // Adjust size to fit your layout
};

export default Render;
