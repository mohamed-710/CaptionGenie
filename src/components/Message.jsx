const Message = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#100919]">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-l from-[#c591fc] to-[#f1e7ff] py-1">
            The next generation
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-purple-400 py-5">
            of storytelling is here
          </h1>
          <button className="mt-8 px-6 py-3 bg-[#8c20f8] text-white text-lg rounded-lg font-semibold shadow-md transition duration-300 hover:bg-purple-600">
            Get Started
          </button>
        </div>
      </div>
    );
  };
  
  export default Message;
  