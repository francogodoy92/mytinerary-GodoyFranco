const API_BASE_URL = "http://localhost:3000/api/";

export async function fetchCities(searchTerm) {
  try {
    const response = await fetch(`${API_BASE_URL}/cities?search=${searchTerm}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading cities:", error);
    throw error;
  }
}

export async function fetchCityById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/cities/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading city by ID:", error);
    throw error;
  }
}

/* const API_BASE_URL = "http://localhost:3000/api/"; 

export async function fetchCities(searchTerm) {
  try {
    const response = await fetch(`${API_BASE_URL}/cities?search=${searchTerm}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading cities:", error);
    throw error;
  }
}
 */