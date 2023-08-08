import React from "react";
import "../index.css";

function ArrowL({ onClick, item } ) {
  return (
    <div
      
      onClick={onClick}
    >
      <p className="flex items-center text-3xl md:text-6xl font-extrabold text-black cursor-pointer">{item}</p>
    </div>
  );
}

export default ArrowL;
