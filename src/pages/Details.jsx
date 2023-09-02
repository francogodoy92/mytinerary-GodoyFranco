import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCities } from "../data/api"; 
import { Link } from "react-router-dom";
import Itinerary from "../components/Itinerary";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

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
          Loading...
        </p>
    </div>;
  }

  const city = data.response.find((city) => city._id.toString() === id.toString());

  if (!city) {
    return <div>City not found</div>;
  }

  const toggleImage = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="min-h-[80vh]  px-20 py-5">
      <div className="flex flex-col gap-3 items-center">
        <p className="text-3xl text-center font-bold py-2">
          {city.city}, {city.country}
          </p>
        <img
          className={`${isExpanded ? 'h-[70vh] w-[90vw] absolute object-cover' : 'h-80 w-[40vw] object-fill'}  rounded-lg shadow-2xl border-4 border-blue-950 cursor-pointer`}
          src={city.photo}
          title={city.featuredLocation}
          alt={city.city}
          onClick={toggleImage}
        />
        <Itinerary data={data.name = "Pepe"}/>
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
