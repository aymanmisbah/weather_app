import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch, weatherData, onGetCityCoords }) => {
  const [city, setCity] = useState("");

  useEffect(() => {
    if (!city) {
      onSearch("London");
      onGetCityCoords("London");
    }
  }, []);

  function handleInputChange(e) {
    setCity(e.target.value);
  }

  function handleSearch() {
    if (city.trim() !== "") {
      onSearch(city);
      onGetCityCoords(city);
      setCity("");
    } 
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <nav className="h-[10vh] bg-white shadow-md">
      <div className="flex items-center justify-between mx-4 lg:mx-72 p-5">
        {/* DIV 1 */}
        <div className="text-xl font-bold text-gray-800">
          <FontAwesomeIcon className="pr-2" icon={faLocationDot} />
          {weatherData ? (
            <>
              <span>{weatherData.name}</span>,
              <span> {weatherData.sys.country}</span>
            </>
          ) : (
            <p>loading</p>
          )}
        </div>
        {/* END OF DIV 1 */}

        {/* DIV 2 */}
        <div className="relative">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600"
          />
          <input
            className="py-1 px-8 border-2 rounded-2xl border-gray-300 focus:border-blue-500 outline-none text-gray-800"
            type="text"
            placeholder="Enter a city"
            value={city}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        {/* END OF DIV 2 */}
      </div>
    </nav>
  );
};

export default SearchBar;
