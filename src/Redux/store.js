import { configureStore } from "@reduxjs/toolkit";
import { readAllCitiesReducer } from "./reducers/citiesReducer.js";

const store = configureStore({
  reducer: {
    readAllCitiesReducer: readAllCitiesReducer,
  },
});

export default store;
