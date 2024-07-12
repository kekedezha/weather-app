import { useContext } from "react";
import DataContext from "../../context/DataContext";
import "./DateCity.css";

const DateCity = () => {
  const { weatherInfo } = useContext(DataContext);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let dateObj = new Date();
  let month = months[dateObj.getUTCMonth()];
  let day = dateObj.getDate();
  let year = dateObj.getUTCFullYear();

  return (
    <div id="info">
      <p id="date">
        {month} {day} {year}
      </p>
      {weatherInfo && (
        <h3 id="city">
          {weatherInfo.name}, {weatherInfo.sys.country}
        </h3>
      )}
      {!weatherInfo && <h3 id="city"></h3>}
    </div>
  );
};

export default DateCity;
