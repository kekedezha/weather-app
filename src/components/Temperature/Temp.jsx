import { useContext } from "react";
import DataContext from "../../context/DataContext";
import "./Temp.css";

const Temp = () => {
  const { weatherInfo } = useContext(DataContext);
  return (
    <div id="temp">
      {weatherInfo && <p>{Math.round(weatherInfo.main.temp)} ˚F</p>}
      {!weatherInfo && <p>-</p>}
    </div>
  );
};
export default Temp;
