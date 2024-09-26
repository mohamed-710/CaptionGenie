import React from "react";

function GrowthStats() {
  return (
    <div className="w-full pt-16">
      <div className="flex justify-around py-8 mx-auto text-center text-white max-sm:flex-col max-w-7xl">
        <div className="flex flex-col items-center m-4">
          <h2 className="text-6xl font-bold text-purple-300 sm:text-7xl lg:text-8xl">
            10M+
          </h2>
          <p className="mt-2 text-lg font-medium text-gray-400 sm:text-xl">
            Creators
          </p>
        </div>
        <div className="flex flex-col items-center m-4">
          <h2 className="text-6xl font-bold text-purple-300 sm:text-7xl lg:text-8xl">
            100K+
          </h2>
          <p className="mt-2 text-lg font-medium text-gray-400 sm:text-xl">
            Daily Users
          </p>
        </div>
        <div className="flex flex-col items-center m-4">
          <h2 className="text-6xl font-bold text-purple-300 sm:text-7xl lg:text-8xl">
            3M+
          </h2>
          <p className="mt-2 text-lg font-medium text-gray-400 sm:text-xl">
            Monthly Videos
          </p>
        </div>
      </div>
    </div>
  );
}

export default GrowthStats;
