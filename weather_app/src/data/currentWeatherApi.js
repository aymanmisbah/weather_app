const API_KEY = '';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?'; 

const x = 'q={city name}&appid={API key}'

const getCurrentWeather = async (city) => {
    try {
        const url = `${API_URL}q=${city}&appid=${API_KEY}&units=metric`
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json()
        return data

    } catch (error) {
        console.error("Error fetching weather data:",error);
        throw error
    }
}

export default getCurrentWeather;
