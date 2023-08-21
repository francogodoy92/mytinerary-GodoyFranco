import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCities } from "../data/api"; // Asegúrate de importar la función fetchCities correctamente
import { Link } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await fetchCities();
        setData(fetchedData);
      } catch (error) {
        console.error("Error loading cities:", error);
      }
    }
    fetchData();
  }, []);

  if (!data) {
    return <div className="min-h-[85vh] flex flex-col items-center">
      <p className="text-3xl text-center font-bold mt-10">
          Loading your details...
        </p>
    </div>;
  }

  const city = data.response.find((city) => city._id.toString() === id.toString());

  if (!city) {
    return <div>City not found</div>;
  }

  return (
    <div className="min-h-[85vh]  px-20 py-5">
      <div className="flex flex-col gap-3 items-center">
        <p className="text-3xl text-center font-bold py-2">
          {city.city}, {city.country}
        </p>
        <img
          className="h-80 w-[30vw] object-cover rounded-lg shadow-2xl"
          src={city.photo}
          title={city.featuredLocation}
          alt={city.city}
        />
        <p className="text-3xl text-center py-5">🛠️Under construction🛠️</p>
      </div>
        <Link to="/Cities" className="flex items-end justify-end">
          <p className="text-blue-200 bg-blue-950 text-center py-1 px-2 rounded-md hover:bg-blue-100 border border-blue-950 hover:text-blue-950 hover:shadow-lg w-auto text-lg">
            Back to Cities 🡆
          </p>
        </Link>
    </div>
  );
}

export default Details;


/* import React from "react";
import { useParams } from "react-router-dom";
import cities15 from "../data/cities15";
import { Link } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const city = cities15.find((city) => city._id.toString() === id);

  if (!city) {
    return <div>City not found</div>;
  }

  return (
    <div className="min-h-[85vh] px-20 py-5">
      <div className=" flex flex-col gap-3">
        <p className="text-3xl text-center font-bold">
          {city.city}, {city.country}
        </p>
        <img
          className=" h-90 object-cover rounded-lg"
          src={city.photo}
          title={city.featuredLocation}
          alt={city.city}
        />
        <p className="text-3xl text-center">🛠️Under construction🛠️</p>
        <Link to="/Cities" className="flex items-end justify-end">
        <p className=" text-blue-200 bg-blue-950 text-center py-1 px-2 rounded-md hover:bg-blue-100 border border-blue-950 hover:text-blue-950 hover:shadow-lg w-auto text-lg">Back to Cities 🡆</p>
        </Link>
      </div>
    </div>
  );
}

export default Details;
 */