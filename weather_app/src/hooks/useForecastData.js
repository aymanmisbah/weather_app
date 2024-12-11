import { useState } from "react";
import fetchForecast from "../data/forcastApi";
import fetchCityCoords from "../data/geoApi";

function useForecast() {
    const [forecastData, setForecastData] = useState(null);

    const getCityCoords = async (city) => {
        try {
            const { cityLat, cityLon } = await fetchCityCoords(city);
            fetchForecastData(cityLat, cityLon);
        } catch (error) {
            console.error("Error fetching city coordinates:", error);
        }
    };

    const fetchForecastData = async (lat, lon) => {
        try {
            const forecastResponse = await fetchForecast(lat, lon);
            setForecastData(forecastResponse);

        } catch (error) {
            console.error("Error fetching forecast:", error);
        }
    };

    return {
        getCityCoords,
        forecastData
    };
}

export default useForecast;
