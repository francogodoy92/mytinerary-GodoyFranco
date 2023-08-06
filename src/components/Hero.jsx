/* import React from 'react';
import Carousel from "./Carousel";
import "../index.css";
import Button from "./Button";

function Hero() {
  return (
    <div className="top-20 pt-[15vh] flex justify-center items-center gap-3 w-full">
      <div className="border bg-gray-800 rounded-md p-5 text-white w-1/3 flex flex-col gap-5" >
        <h1 className="font-black text-left text-2xl">Find the perfect destination</h1>
        <h3>
          Our app will help you find the perfect path for your next trip.
          With an easy-to-use interface and a host of itinerary options,
          planning your next trip has never been easier.
        </h3>
        <Button />
      </div>
      <Carousel />
    </div>
  );
}

export default Hero; */

import React from 'react';
import Carousel from "./Carousel";
import "../index.css";
import Button from "./Button";

function Hero() {
  return (
    <div className="top-20 pt-[15vh] flex flex-col md:flex-row justify-center items-center gap-3 w-full">
      <div className="border bg-gray-800 rounded-md p-5 text-white md:w-1/3 w-full flex flex-col gap-5">
        <h1 className="font-black text-left text-2xl">Find the perfect destination</h1>
        <h3>
          Our app will help you find the perfect path for your next trip.
          With an easy-to-use interface and a host of itinerary options,
          planning your next trip has never been easier.
        </h3>
        <Button />
      </div>
      <Carousel />
    </div>
  );
}

export default Hero;