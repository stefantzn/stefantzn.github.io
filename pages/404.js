import Navbar from '../components/Navbar';

const fourofour = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-4xl mb-2">Error 404: Page Not Found</h1>
          <p className="text-xs md:text-sm mb-4">You seem rather, lost.</p>
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
