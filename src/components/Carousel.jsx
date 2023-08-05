/* import React from 'react';
import "../index.css";


function Carousel() {
  return (
    <div className="w-1/3">
      <img className="rounded-md shadow-md" src="../public/41546.jpg" title="carousel" alt="carousel"></img>
    </div>
  );
}

export default Carousel; */
import React from 'react';
import '../index.css';

function Carousel() {
  return (
    <div className="w-1/2 h-100 p-3 flex ">

      {/* Flecha izq */}
      <div className="flex items-center text-6xl font-extrabold text-black cursor-pointer">
        {"<"}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Imagen 1 */}
        <img
          className="w-full h-full p-4 rounded-md shadow-md object-cover"
          src="../public/41546.jpg"
          title="carousel"
          alt="carousel"
        ></img>

        {/* Imagen 2 */}
        <img
          className="w-full h-full p-4 rounded-md shadow-md object-cover"
          src="../public/41546.jpg"
          title="carousel"
          alt="carousel"
        ></img>

        {/* Imagen 3 */}
        <img
          className="w-full h-full p-4 rounded-md shadow-md object-cover"
          src="../public/41546.jpg"
          title="carousel"
          alt="carousel"
        ></img>

        {/* Imagen 4 */}
        <img
          className="w-full h-full p-4 rounded-md shadow-md object-cover"
          src="../public/41546.jpg"
          title="carousel"
          alt="carousel"
        ></img>
      </div>
      {/* Flecha der */}
      <div className="flex items-center text-6xl font-extrabold text-black cursor-pointer">
        {">"}
      </div>
    </div>
  );
}

export default Carousel;


