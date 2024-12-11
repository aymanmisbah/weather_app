import { useState } from "react";
import CurrentWeather from "../data/currentWeatherApi";

function useCurrentWeather() {
  const [currWeatherData, setCurrWeatherData] = useState(null);

  const getCurrentWeather = async (city) => {
    try {
      const weather = await CurrentWeather(city);  
      setCurrWeatherData(weather);      
      
      
    } catch (error) {
      console.error(error);
    }
  };

  return { getCurrentWeather , currWeatherData};  
}

export default useCurrentWeather;
