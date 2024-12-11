import WeatherIcon from "./weatherIcon";

const HourlyForecast = ({ hourlyForecastData }) => {
  if (!hourlyForecastData) {
    return <p>No data available</p>;
  }

  const { list } = hourlyForecastData;

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

  return (
    <div className="h-[28vh] my-2 mx-4 lg:mx-72 flex flex-col items-start justify-center">
      <h2 className="font-bold italic">Hourly Forecast</h2>
      <div className="flex items-center justify-start p-2 overflow-x-auto space-x-4 max-w-full">
        {list.map((item, index) => {
          const weatherConditionId = item.weather[0].id;
          const iconNumber = weatherIconMap[weatherConditionId] || 1;

          // Extract time from dt_txt (format: "YYYY-MM-DD HH:MM:SS")
          const time = item.dt_txt.split(" ")[1].slice(0, 5); // Extracts "HH:MM"

          return (
            <div
              key={index}
              className="flex items-center justify-center flex-col min-w-20 min-h-28 border-2 border-gray-700 rounded-xl"
            >
              <div className="font-semibold">{time}</div> {/* Display Time */}
              <div className="w-10 h-10 flex justify-center items-center">
                <WeatherIcon iconNumber={iconNumber} />
              </div>
              <div className="font-bold">{item.main.temp} °C</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;

