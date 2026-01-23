function MobileBlock() {
  return (
    <div className="min-h-screen bg-[#1f232a] flex flex-col items-center justify-center text-center px-6 text-white">

      <h1 className="text-4xl font-bold mb-4">
        Mobile Version <span className="text-yellow-400">Coming Soon...</span>
      </h1>

      <p className="text-gray-300 max-w-md mb-8">
        This portfolio is currently optimized for desktop and laptop screens.
        Please visit using a computer for the best experience.
      </p>

      <div className="border border-yellow-400 px-6 py-3 text-yellow-400 rounded">
        Desktop Recommended 💻
      </div>

    </div>
  );
}

export { MobileBlock };
export default MobileBlock;
