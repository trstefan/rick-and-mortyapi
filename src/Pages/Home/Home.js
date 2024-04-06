import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="grid h-screen">
      <div className=" relative bg-red-500 row-start-1 col-start-1 row-end-2 col-end-3 overflow-hidden">
        <Link to="/characters">
          <div className="absolute w-full h-full bg-characters bg-cover bg-cover grayscale brightness-50  hover:grayscale-0 hover:scale-[1.25] transition-[.6s] duration-[.6s] "></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[2rem] font-bold text-white">
            Characters
          </div>
        </Link>
      </div>
      <div className="relative bg-blue-500 row-start-2 col-start-1 row-end-3 col-end-2 overflow-hidden">
        <Link to="/locations">
          <div className="absolute w-full h-full bg-locations bg-cover bg-cover grayscale brightness-50  hover:grayscale-0 hover:scale-[1.25] transition-[.6s] duration-[.6s] "></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[2rem] font-bold text-white">
            Locations
          </div>
        </Link>
      </div>
      <div className="relative bg-gray-500 row-start-2 col-start-2 row-end-3 col-end-3 overflow-hidden">
        <Link to="/episodes">
          <div className="absolute w-full h-full bg-episodes bg-cover grayscale brightness-50  hover:grayscale-0 hover:scale-[1.25] transition-[.6s] duration-[.6s] "></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-[2rem] font-bold text-white">
            Episodes
          </div>
        </Link>
      </div>
    </div>
  );
};
