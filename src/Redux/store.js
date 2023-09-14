import { configureStore } from "@reduxjs/toolkit";
import { readAllCitiesReducer, readOneCityReducer, readItinerariesByCityReducer } from "./reducers/citiesReducer.js";
import { authReducer } from "./reducers/authReducer.js";

const store = configureStore({
  reducer: {
    readAllCitiesReducer: readAllCitiesReducer,
    readOneCityReducer: readOneCityReducer,
    readItinerariesByCityReducer: readItinerariesByCityReducer,
    authReducer: authReducer
  },
});

export default store;
