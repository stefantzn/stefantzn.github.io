import React, { useEffect, useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';

const LoadingPage = ({ color }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black transition-opacity ${show ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`transform transition-transform ${show ? 'translate-y-0' : 'translate-y-20'}`}>
        <HashLoader color={color} />
      </div>
    </div>
  );
};

export default LoadingPage;