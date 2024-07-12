import { useContext } from "react";
import DataContext from "../../context/DataContext";

const WeatherImage = () => {
  const { weatherInfo } = useContext(DataContext);
  return (
    <div id="tempImg">
      {weatherInfo && (
        <img
          src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`}
        />
      )}
      {!weatherInfo && null}
    </div>
  );
};

export default WeatherImage;
