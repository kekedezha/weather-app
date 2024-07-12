import { useContext } from "react";
import DataContext from "../../context/DataContext";
import "./Description.css";

const Description = () => {
  const { weatherInfo } = useContext(DataContext);

  return (
    <div id="description">
      {weatherInfo && weatherInfo.weather[0].main}
      {!weatherInfo && null}
    </div>
  );
};

export default Description;
