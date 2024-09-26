const CallToAction = () => {
  return (
    <div className="flex items-center justify-center w-full pt-16 pb-10">
      <div className="container relative flex flex-col p-6 items-center justify-center w-full  transition-transform duration-500 shadow-xl shadow-slate-900 sm:p-10 sm:w-2/3 lg:w-1/2 rounded-3xl bg-gradient-to-br from-gray-700 to-[#3c304d] hover:shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#180c28] to-[#260650] opacity-20 rounded-3xl animate-pulse"></div>

        <div className="relative z-10 text-center">
          <h2 className="mb-4 text-2xl font-extrabold text-white sm:text-2xl lg:text-4xl drop-shadow-lg">
            Ready to Get Started?
          </h2>
          <div className="flex flex-col w-full gap-4 pt-3 sm:flex-row sm:justify-center">
            <button className="w-full px-8 py-2 text-sm font-semibold text-white transition-all duration-500 transform border-2 border-purple-400 rounded-full sm:w-auto hover:bg-purple-500 hover:text-white hover:scale-105 hover:rotate-2 hover:border-purple-500">
              Talk to us
            </button>
            <button className="w-full px-8 py-3 text-sm font-bold text-white transition-all duration-500 transform rounded-full shadow-lg sm:w-auto bg-gradient-to-r from-purple-400 to-purple-600 hover:scale-105 hover:shadow-2xl hover:brightness-125 hover:rotate-1">
              Start for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;