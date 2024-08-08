import { Helmet } from 'react-helmet';
import Link from 'next/link';

const fourofour = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-4xl mb-2">error 404: page not found</h1>
          <p className="text-xs md:text-sm mb-4">
        you seem rather lost. <Link href="/">return home?</Link>
        </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            className="w-40 h-40 md:w-60 md:h-60 object-cover mb-4"
            src="/tomoya.png"
            alt="Tomoya"
          />
        </div>
      </div>
    </div>
  );
};

export default fourofour;
