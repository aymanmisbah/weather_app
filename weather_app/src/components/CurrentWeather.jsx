import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudRain,
  faWind,
  faCloud,
  faDroplet,
  faLocationArrow,
  faGauge,
} from "@fortawesome/free-solid-svg-icons";

import WeatherIcon from "./weatherIcon";

const CurrentWeather = ({ weatherData }) => {
  if (!weatherData) {
    return <p>No data available</p>;
  }
  

  

  const timezoneOffset = weatherData.timezone;
  const localDate = new Date(new Date().getTime() + timezoneOffset * 1000);

  const formattedDate = localDate.toLocaleString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const precipitation = weatherData.rain ? weatherData.rain["1h"] : 0;

  const weatherCondition = weatherData.weather?.[0]?.id;

  const weatherIconMap = {
    800: 2, // Clear skies
    801: 4, // Few clouds
    802: 3, // Scattered clouds
    803: 5, // Broken clouds
    804: 7, // Overcast clouds
    500: 10, // Light rain
    501: 11, // Moderate rain
    600: 16, // Light snow
    601: 17, // Snow
    200: 14, // Thunderstorm
  };

  const iconNumber = weatherIconMap[weatherCondition];

  return (
    <div className="h-[28%] my-2 grid grid-cols-3 gap-2 mx-4 lg:mx-72">
      {/*FIRST DIV*/}
      <div className=" p-4 bg-white  rounded-xl overflow-hidden border-2 border-gray-700">
        <div className="text-center text-gray-500 text-sm">{formattedDate}</div>
        <div className="flex justify-center items-cente">
          <WeatherIcon iconNumber={iconNumber} />
        </div>
        <div>
          <div className="text-center text-2xl font-semibold text-gray-800">
            {weatherData.main.temp}°C
          </div>
          <div className="text-center text-l font-semibold text-gray-800">
            feels like {weatherData.main.feels_like} °C
          </div>
        </div>
        <div className="text-center text-gray-600 text-lg mt-2 capitalize ">
          {weatherData.weather[0]?.description}
        </div>
      </div>
      {/*SECONDE DIV*/}
      <div className="col-span-2 p-4 rounded-xl overflow-hidden border-2 border-gray-700">
        <div className="grid grid-cols-2  gap-2 w-full h-full bg-white font-sans text-gray-700 text-lg">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faWind} className="mr-3 text-2xl " />
            <div className="font-medium"> {weatherData.wind.speed} m/s</div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faLocationArrow}
              className="mr-3 text-2xl "
            />
            <div className="font-medium">{weatherData.wind.deg} °</div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faDroplet} className="mr-3 text-2xl " />
            <div className="font-medium">{weatherData.main.humidity} %</div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faGauge} className="mr-3 text-2xl " />
            <div className="font-medium">{weatherData.main.pressure} hPa</div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCloudRain} className="mr-3 text-2xl" />
            <div className="font-medium">{precipitation} mm</div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCloud} className="mr-3 text-2xl " />
            <div className="font-medium">{weatherData.clouds.all} %</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
