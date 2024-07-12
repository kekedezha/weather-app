// import { useState } from 'react'
import DateCity from "./components/DateCity";
import Description from "./components/Description";
import ExtraInfo from "./components/ExtraInfo";
import SearchBar from "./components/SearchBar";
import Temp from "./components/Temp";
import "./App.css";

function App() {
  return (
    <>
      <SearchBar />
      <DateCity />
      <Description />
      <Temp />
      <ExtraInfo />
    </>
  );
}

export default App;
