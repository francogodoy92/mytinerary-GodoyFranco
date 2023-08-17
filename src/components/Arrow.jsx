import React from "react";
import "../index.css";

function Arrow({ onClick, item }) {
  return (
    <div
      className="hidden md:block items-center text-2xl md:text-6xl font-extrabold text-blue-950 hover:drop-shadow-lg rounded-lg active:text-5xl active:ease-in-out hover:ease-in-out hover:text-blue-700 duration-300 active:text-white cursor-pointer "
      onClick={onClick}
    >
      {item}
    </div>
  );
}

export default Arrow;
