import React from "react";
import Carousel from "./Carousel";
import "../index.css";
import CTA from "./CTA";

function Hero() {
  return (
    <div className="top-20 pt-[15vh] flex flex-col md:flex-row justify-center items-center gap-3 w-full p-5">
      <div className="border bg-gray-800 rounded-md p-7 text-white md:w-1/3 w-full flex flex-col gap-5">
        <h1 className="font-bold text-left text-3xl">
          Find your <span className="text-blue-500">perfect trip</span>,
          designed by insiders who know and{" "}
          <span className="text-blue-500">love their cities!</span>
        </h1>
        <CTA />
      </div>
      <Carousel />
    </div>
  );
}

export default Hero;
