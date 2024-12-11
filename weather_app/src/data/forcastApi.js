const API_KEY = 'd74be2c553f8eaba070d4007d63d1a4a';
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast';  

const getForcast = async (Lat, Lon) => {
    try {
        const url = `${API_URL}?lat=${Lat}&lon=${Lon}&appid=${API_KEY}&units=metric`;  
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;  
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};

export default getForcast;

