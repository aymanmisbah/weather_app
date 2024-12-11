import { useEffect, useState } from "react";
import SearchBar from "./components/searchBar";
import CurrentWeather from "./components/currentWeather";
import HourlyForecast from "./components/hourlyForecast";
import useCurrentWeather from "./hooks/useCurrentWeatherData";
import useForecast from "./hooks/useForecastData";
import DailyForecast from "./components/dailyForecast";

function App() {
  
  const { getCurrentWeather, currWeatherData } = useCurrentWeather();
  const { getCityCoords, forecastData } = useForecast();




  return (
    <div className="h-screen bg-white">
      <SearchBar onSearch={getCurrentWeather} weatherData={currWeatherData} onGetCityCoords={getCityCoords} />
      <CurrentWeather weatherData={currWeatherData} />
      <HourlyForecast hourlyForecastData={forecastData} />
      <DailyForecast dailyForecastData={forecastData} />
    </div>
  );
}

export default App;


