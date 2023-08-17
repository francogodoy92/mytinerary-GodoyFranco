import React, { useState, useEffect } from "react";
import "../index.css";
import Arrow from "../components/Arrow"; 
import Indice from "../components/Indice"; 
import cities15 from "../data/cities15";

import { Link } from "react-router-dom";

function Cities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState(cities15);
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(filteredCities.length / itemsPerPage);

  const handleSearch = () => {
    const filtered = cities15.filter((city) =>
      city.city.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

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
    return filteredCities.slice(startIndex, endIndex);
  };

  return (
    <div className="flex flex-col items-center py-10 min-h-[85vh] justify-between">
      <input
        type="text"
        placeholder="Search your city!"
        className="mb-10 px-2 py-1 border border-gray-300 shadow-sm rounded-md focus:outline-none w-auto focus:border-blue-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex justify-evenly w-screen items-center">
        <Arrow item={"⪡"} onClick={previousPage} />
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {getDisplayedCities().map((city, index) => (
            <Link to={`/details/${city._id}`} key={index}>
              <div
                key={index}
                className="rounded-md shadow-lg shadow-blue-950 overflow-hidden border-2 border-t-blue-950 border-r-blue-700 border-b-blue-500 border-l-blue-300"
              >
                <img
                  className="w-80 h-60 object-cover"
                  src={city.photo}
                  title={city.featuredLocation}
                  alt={city.city}
                />
                <p className="text-right px-2 py-1 text-sm text-blue-400 bg-blue-950 hidden md:block">
                  {city.city}, {city.country}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Arrow item={"⪢"} onClick={nextPage} />
      </div>
      <div className="flex items-center justify-center mt-4">
      </div>

      <Indice
        totalPáginas={totalPages}
        páginaActual={currentPage}
        cambiarPágina={setCurrentPage}
      />
    </div>
  );
}

export default Cities;


/* 
import React, { useState, useEffect } from "react";
import "../index.css";
import Arrow from "../components/Arrow"; 
import Indice from "../components/Indice"; 
import cities15 from "../data/cities15";

function Cities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState(cities15);
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(filteredCities.length / itemsPerPage);

  const handleSearch = () => {
    const filtered = cities15.filter((city) =>
      city.city.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

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
    return filteredCities.slice(startIndex, endIndex);
  };

  return (
    <div className="flex flex-col items-center py-10 min-h-[85vh] justify-between">
      <input
        type="text"
        placeholder="Search your city!"
        className="mb-10 px-2 py-1 border border-gray-300 shadow-sm rounded-md focus:outline-none w-auto focus:border-blue-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex justify-evenly w-screen items-center">
        <Arrow item={"⪡"} onClick={previousPage} />
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {getDisplayedCities().map((city, index) => (
            <div
              key={index}
              className="rounded-md shadow-lg shadow-blue-950 overflow-hidden border-2 border-t-blue-950 border-r-blue-700 border-b-blue-500 border-l-blue-300"
            >
              <img
                className="w-80 h-60 object-cover"
                src={city.photo}
                title={city.featuredLocation}
                alt={city.city}
              />
              <p className="text-right px-2 py-1 text-sm text-blue-400 bg-blue-950 hidden md:block">
                {city.city}, {city.country}
              </p>
            </div>
          ))}
        </div>
        <Arrow item={"⪢"} onClick={nextPage} />
      </div>
      <div className="flex items-center justify-center mt-4">
      </div>

      <Indice
        totalPáginas={totalPages}
        páginaActual={currentPage}
        cambiarPágina={setCurrentPage}
      />
    </div>
  );
}

export default Cities;
 */