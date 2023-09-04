import { configureStore } from "@reduxjs/toolkit";
import { readAllCitiesReducer, readOneCityReducer, readItinerariesByCityReducer } from "./reducers/citiesReducer.js";

const store = configureStore({
  reducer: {
    readAllCitiesReducer: readAllCitiesReducer,
    readOneCityReducer: readOneCityReducer,
    readItinerariesByCityReducer: readItinerariesByCityReducer,    
  },
});

export default store;
