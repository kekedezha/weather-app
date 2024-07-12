// import { useState } from 'react'
import DateCity from "./components/DateCity/DateCity";
import Description from "./components/Description/Description";
import ExtraInfo from "./components/ExtraInfo/ExtraInfo";
import SearchBar from "./components/SearchBar/SearchBar";
import Temp from "./components/Temperature/Temp";
import WeatherImage from "./components/WeatherImage/WeatherImage";
import { DataProvider } from "./context/DataContext";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <div id="app">
        <SearchBar />
        <DateCity />
        <Description />
        <WeatherImage />
        <Temp />
        <ExtraInfo />
      </div>
    </DataProvider>
  );
}

export default App;
