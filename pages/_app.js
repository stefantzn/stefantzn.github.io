// pages/_app.js

import '../styles/globals.css'; // Import your global styles
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // Add any global side effects using useEffect
  useEffect(() => {
    // Your global side effects here
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;