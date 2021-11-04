import React from "react";

import ImageOne from "../images/1.jpg";

const Trips = () => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center bg-yellow-300">
        <h1 className="text-9xl uppercase font-black">trips</h1>
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img
          src={ImageOne}
          alt="isley1"
          className="h-full rounded mb-8 shadow"
        />
        <h2 className="text-2xl">Isley at Peña Park</h2>
        <p className="mb-2">8/26/21</p>
      </div>
    </div>
  );
};

export default Trips;
