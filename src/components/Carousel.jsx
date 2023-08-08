import React, { useState, useEffect } from 'react';
import data from '../data/data';
import '../index.css';
import Indice from './Indice';
import Arrow from './Arrow';

function Carousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.events.length / itemsPerPage);

  const previousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
  };

  const getDisplayedEvents = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.events.slice(startIndex, endIndex);
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
      <h1 className="font-bold text-left text-3xl">Popular MyTineraries</h1>
        <div className="w-100 h-100 p-3 relative flex items-center justify-center">
        <Arrow item={"<"} onClick={previousPage} />
          <div className="grid grid-cols-2 gap-3">
            {getDisplayedEvents().map((event) => (
              <div
                key={event._id}
                className="w-full aspect-w-3 rounded-md shadow-md overflow-hidden"
              >
                <div className="w-80 h-60">
                  <img
                    className="w-full h-full object-cover"
                    src={event.image}
                    title={event.name}
                    alt={event.name}
                  />
                </div>
              </div>
            ))}
          </div>
          <Arrow item={">"} onClick={nextPage} />
        </div>
        <Indice totalPáginas={totalPages} páginaActual={currentPage} cambiarPágina={setCurrentPage} />
      </div>
    </div>
  );
}

export default Carousel;
