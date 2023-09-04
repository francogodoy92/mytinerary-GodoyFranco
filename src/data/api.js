const api_url = "http://localhost:3000/api/";

export async function fetchCities(searchTerm) {
  try {
    const response = await fetch(`${api_url}/cities?search=${searchTerm}`);
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error loading your cities:", error);
    throw error;
  }
}

export async function fetchCityById(id) {
  try {
    const response = await fetch(`${api_url}/cities/id/${id}`);
    const data = await response.json();
    return data.response
  } catch (error) {
    console.error("Error loading your city:", error);
    throw error;
  }
}

export default api_url