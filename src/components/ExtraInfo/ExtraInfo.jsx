import { useContext } from "react";
import DataContext from "../../context/DataContext";
import "./ExtraInfo.css";

const ExtraInfo = () => {
  const { weatherInfo } = useContext(DataContext);
  return (
    <div id="extraInfo">
      <div className="col">
        <div className="info">
          <h5>High</h5>
          {weatherInfo && <p id="tempMax">{weatherInfo.main.temp_max}</p>}
          {!weatherInfo && <p id="tempMax">-</p>}
        </div>
      </div>
      <div className="col">
        <div className="info">
          <h5>Low</h5>
          {weatherInfo && <p id="tempMax">{weatherInfo.main.temp_min}</p>}
          {!weatherInfo && <p id="tempMax">-</p>}
        </div>
      </div>
    </div>
  );
};

export default ExtraInfo;
