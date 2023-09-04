import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  readOneCity,
  readItinerariesByCity,
} from "../Redux/actions/citiesAction.js";
import Itinerary from "../components/Itinerary";
import NoItineraries from "../components/NoItineraries";

function Details() {
  const params = useParams();
  const dispatch = useDispatch();

  const city = useSelector((store) => store.readOneCityReducer.city);

  const itineraries = useSelector(
    (store) => store.readItinerariesByCityReducer.itineraries
  );

  useEffect(() => {
    dispatch(readOneCity(params.id));
    dispatch(readItinerariesByCity(params.id));
  }, []);

  return (
    <div className="min-h-[80vh]  px-20 py-5">
      <div className="flex flex-col gap-3 items-center">
        {city ? (
          <div className="mb-12">
            <p className="text-3xl text-center font-bold py-2 text-blue-950">
              {city.city}, {city.country}
            </p>
            <img
              className={` h-60 w-96 object-cover rounded-lg shadow-2xl border-2 border-blue-950 `}
              src={city.photo}
              title={city.featuredLocation}
              alt={city.city}
            />
          </div>
        ) : (
          <p>Loading city details...</p>
        )}
        <div className="flex flex-col gap-5">
          {itineraries.length === 0 ? (
            <NoItineraries />
          ) : (
            itineraries.map((itinerary) => {
              return <Itinerary data={itinerary} key={itinerary.id} />;
            })
          )}
        </div>
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
