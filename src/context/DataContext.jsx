import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [city, setCity] = useState("");

  console.log(weatherInfo);

  return (
    <DataContext.Provider
      value={{
        weatherInfo,
        setWeatherInfo,
        city,
        setCity,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
