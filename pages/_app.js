import '/styles/globals.css'
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  // Add any global side effects using useEffect
  useEffect(() => {
    // Your global side effects here
  }, []);

  return <Component {...pageProps} />;
}

