import React, { useState, useEffect } from "react";
import cities from "../data/cities";
import "../index.css";
import Indice from "./Indice";
import Arrow from "./Arrow";

function Carousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(cities.length / itemsPerPage);

  const previousPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  const getDisplayedCities = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return cities.slice(startIndex, endIndex);
  };

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextPage();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentPage]);

  return (
    <div>
      <div className="w-50 h-100 flex flex-col justify-center items-center">
        <h1 className="font-bold text-left text-3xl text-blue-950 underline drop-shadow-xl">
          Popular MyTineraries
        </h1>
        <div className="w-100 h-100 p-3 relative flex items-center justify-center">
          <Arrow item={"⪡"} onClick={previousPage} />
          <div className="grid grid-cols-2 gap-3">
            {getDisplayedCities().map((city) => (
              <div
                key={city.city}
                className="w-full aspect-w-3 rounded-md shadow-lg shadow-blue-950 overflow-hidden border-2 border-t-blue-950 border-r-blue-700 border-b-blue-500 border-l-blue-300 "
              >
                <div className="w-80 h-60">
                  <img
                    className="w-full h-full object-cover"
                    src={city.photo}
                    title={city.city}
                    alt={city.city}
                  />
                </div>
                <p className="text-right px-3 py-1 text-blue-400 bg-blue-950 hidden md:block">{city.city},{city.country}</p>
              </div>
            ))}
          </div>
          <Arrow item={"⪢"} onClick={nextPage} />
        </div>
        <Indice
          totalPáginas={totalPages}
          páginaActual={currentPage}
          cambiarPágina={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Carousel;
