/* import React, { useState, useEffect } from 'react';
import data from '../data/data';
import '../index.css';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 4;

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? data.events.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= data.events.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const getDisplayedEvents = () => {
    const startIndex = currentIndex;
    const endIndex = currentIndex + itemsPerPage;
    return data.events.slice(startIndex, endIndex);
  };

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <div className="w-50 h-100 flex flex-col justify-center items-center">
        <div className="w-100 h-100 p-3 relative flex">
          <div
            className="flex items-center text-3xl md:text-6xl font-extrabold text-black cursor-pointer"
            onClick={previousImage}
          >
            {"<"}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {getDisplayedEvents().map((event) => (
              <div
                key={event._id}
                className="w-full aspect-w-3 rounded-md shadow-md overflow-hidden"
              >
                <div className="w-60 h-40">
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
          <div
            className="flex items-center text-3xl md:text-6xl font-extrabold text-black cursor-pointer"
            onClick={nextImage}
          >
            {">"}
          </div>
        </div>
        <div>○◉○</div>
      </div>
    </div>
  );
}

export default Carousel; */

import React, { useState, useEffect } from 'react';
import data from '../data/data';
import '../index.css';
import Indice from './Indice';
import ArrowL from './ArrowL';
import ArrowR from './ArrowR'

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
        <div className="w-100 h-100 p-3 relative flex">
        <ArrowL onClick={previousPage} />
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
          <ArrowR onClick={nextPage} className="rotate-y-180" />
        </div>
        <Indice totalPáginas={totalPages} páginaActual={currentPage} cambiarPágina={setCurrentPage} />
      </div>
    </div>
  );
}

export default Carousel;
