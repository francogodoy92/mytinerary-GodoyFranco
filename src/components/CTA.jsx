import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";

function CTA() {
  return (
    <>
      <Link
        to="/Cities"
        className="font-bold text-xl bg-blue-950 border-2 border-blue-400 rounded-md py-2 px-3 ml-auto hover:bg-white cursor-pointer hover:text-gray-800 duration-300 ease-in-out hover:font-bold hover:shadow-md hover:p-2"
      >
        Start today 🡆
      </Link>
    </>
  );
}

export default CTA;
