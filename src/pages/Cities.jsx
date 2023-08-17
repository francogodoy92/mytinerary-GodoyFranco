import React, { useState, useEffect } from "react";
import "../index.css";
import cities15 from "../data/cities15";

function Cities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState(cities15);

  const handleSearch = () => {
    const filtered = cities15.filter((city) =>
      city.city.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div className="flex flex-col items-center py-10 min-h-[85vh] ">
      <input
        type="text"
        placeholder="Search your city!"
        className="mb-10 px-2 py-1 border border-gray-300 rounded-md focus:outline-none w-auto focus:border-blue-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {filteredCities.map((city, index) => (
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
    </div>
  );
}

export default Cities;

/* import React, { useState, useEffect } from "react";
import "../index.css";
import cities15 from "../data/cities15";

function Cities() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-10 min-h-[85vh]">
      {cities15.map((city, index) => (
        <div        
        className="rounded-md shadow-lg shadow-blue-950 overflow-hidden border-2 border-t-blue-950 border-r-blue-700 border-b-blue-500 border-l-blue-300 "
      >
        <div key={index} className="w-80 h-60">
          <img
            className="w-full h-full object-cover"
            src={city.photo}
            title={city.featuredLocation}
            alt={city.city}
          />
        </div>
        <p className="text-right px-2 py-1 text-sm text-blue-400 bg-blue-950 hidden md:block">{city.city},{city.country}</p>
        </div>
      ))}
    </div>
  );
}

export default Cities; */


/*
<div className="min-h-screen flex items-center flex-col gap-3 justify-center mt-5 ">
<h1 className="font-bold text-left text-3xl bg-blue-950 text-blue-300 drop-shadow-xl p-3 rounded-md">
  Under construction
</h1>
<img className="rounded-2xl shadow-lg" src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZzbGMxc3hkaGFudWJmbDEwcjI0ZXphODkwdXVvdjBmcTRrZjUzZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oKIPnAiaMCws8nOsE/giphy-downsized.gif' alt="Página en construcción" title="En construcción" /> */