const API_KEY = 'd74be2c553f8eaba070d4007d63d1a4a';
const GEO_API_URL = 'http://api.openweathermap.org/geo/1.0/direct'; 


const fetchCityCoordinates = async (city) => {
    try {
        const url = `${GEO_API_URL}?q=${city}&appid=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.length === 0) {
            throw new Error(`No results found for city: ${city}`);
        }

        const cityLon = data[0].lon;
        const cityLat = data[0].lat;

        return { cityLat, cityLon }; 
    } catch (error) {
        console.error("Error fetching coordinates data:", error);
        throw error;
    }
};

export  default fetchCityCoordinates;