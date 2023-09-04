import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCities, fetchCityById } from "../../data/api.js";
import api_url from "../../data/api.js";
import axios from "axios";

export const readAllCities = createAsyncThunk("readAllCities", async () => {
  try {
    const cities = await fetchCities();
    return cities;
  } catch (error) {
    console.log(error);
    return [];
  }
});

export const filterCities = createAction("filterCities", (search) => {
        return {
                payload: search
        }
});

export const readOneCity = createAsyncThunk('readOneCity', async (id)=>{
  try {
      const city = await fetchCityById(id);
      return city
  } catch (error) {
      console.log(error);
      return []
  }
})
export const readItinerariesByCity = createAsyncThunk('readItinerariesByCity', async (city)=>{
  try {
      const res = await axios.get(api_url+"itineraries/"+city)
      return res.data.response
  } catch (error) {
      console.log(error);
      return []
  }
})