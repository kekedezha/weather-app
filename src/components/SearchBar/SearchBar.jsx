import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import "./SearchBar.css";
import axios from "axios";

const WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const SearchBar = () => {
  const { city, setCity, setWeatherInfo } = useContext(DataContext);

  const fetchCityWeather = async (cityToSearch) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&appid=${WEATHER_API_KEY}&units=imperial`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      setWeatherInfo(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div id="searchBar">
      <input
        type="text"
        id="searchBarInput"
        placeholder="Search by City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        type="button"
        id="searchIcon"
        onClick={() => fetchCityWeather(city)}
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
