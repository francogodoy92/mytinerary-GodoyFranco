import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCities, fetchCityById } from "../../data/api.js";

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
