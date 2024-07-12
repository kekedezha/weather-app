// import { useState } from 'react'
import DateCity from "./components/DateCity/DateCity";
import Description from "./components/Description/Description";
import ExtraInfo from "./components/ExtraInfo/ExtraInfo";
import SearchBar from "./components/SearchBar/SearchBar";
import Temp from "./components/Temp/Temp";
import "./App.css";

function App() {
  return (
    <div id="app">
      <SearchBar />
      <DateCity />
      <Description />
      <Temp />
      <ExtraInfo />
    </div>
  );
}

export default App;
