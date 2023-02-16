import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="grid h-screen">
      <div className=" relative bg-red-500 row-start-1 col-start-1 row-end-2 col-end-3 overflow-hidden">
        <Link to="/characters">
          <div className="absolute w-full h-full bg-characters bg-cover"></div>
          <div className="absolute top-1/2 left-1/2 text-2xl font-bold">
            Characters
          </div>
        </Link>
      </div>
      <div className="relative bg-blue-500 row-start-2 col-start-1 row-end-3 col-end-2 overflow-hidden">
        <Link to="/locations">
          <div className="absolute w-full h-full bg-locations bg-cover"></div>
          <div className="absolute top-1/2 left-1/2 text-2xl font-bold">
            Locations
          </div>
        </Link>
      </div>
      <div className="relative bg-gray-500 row-start-2 col-start-2 row-end-3 col-end-3 overflow-hidden">
        <Link to="/episodes">
          <div className="absolute w-full h-full bg-episodes bg-cover "></div>
          <div className="absolute top-1/2 left-1/2  text-2xl font-bold">
            Episodes
          </div>
        </Link>
      </div>
    </div>
  );
};
