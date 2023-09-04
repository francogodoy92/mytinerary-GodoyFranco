import { createReducer } from "@reduxjs/toolkit";
import { readAllCities, filterCities, readOneCity, readItinerariesByCity} from "../actions/citiesAction.js";

const initialState = {
  cities: [],
  filteredCities: [],
  city: {},
  itineraries: [],
};

export const readAllCitiesReducer = createReducer(initialState, (builder) => {
  builder

  .addCase(readAllCities.fulfilled, (store,action)=>{
        return {
                ...store,
                cities: action.payload,
                filteredCities: action.payload
        }
  })

  .addCase(filterCities, (store, action)=>{
        const newFilteredCities = store.cities.filter((city) =>
        city.city.toLowerCase().trim().startsWith(action.payload.toLowerCase().trim()))
        return {
                ...store,
                filteredCities: newFilteredCities
        }
  })
});

export const readOneCityReducer = createReducer(initialState, (builder) => {
  builder

  .addCase(readOneCity.fulfilled, (store,action)=>{
        return {
                ...store,
                city: action.payload
        }
  })
});

export const readItinerariesByCityReducer = createReducer(initialState, (builder)=> {
  builder
      .addCase(readItinerariesByCity.fulfilled, (store,action)=>{
          const newItineraries = { ...store, itineraries: action.payload}
          return newItineraries
      })
})
