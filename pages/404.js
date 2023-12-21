// NotFound.js
import React from 'react';
import Navbar from '../components/Navbar';

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold mb-4">Error 404 - Page Not Found 😕</h1>
        <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
        <p className="text-small">(probably under development)</p>
      </div>
    </div>
  );
};

export default NotFound;
