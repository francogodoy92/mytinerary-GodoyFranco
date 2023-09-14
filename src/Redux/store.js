import { configureStore } from "@reduxjs/toolkit";
import { readAllCitiesReducer, readOneCityReducer, readItinerariesByCityReducer } from "./reducers/citiesReducer.js";
import { userSignUpReducer } from "./reducers/authReducer.js";

const store = configureStore({
  reducer: {
    readAllCitiesReducer: readAllCitiesReducer,
    readOneCityReducer: readOneCityReducer,
    readItinerariesByCityReducer: readItinerariesByCityReducer,
    userSignUpReducer: userSignUpReducer
  },
});

export default store;
