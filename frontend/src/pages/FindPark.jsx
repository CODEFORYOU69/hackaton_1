/* eslint-disable */

import React, { useState } from "react";
// import SimpleModal from "../components/SimpleModal";
import ParkCard from "../components/ParkCard";
import Map from "./Map";
import "../style/park_card.css";
import Filter from "@components/Filter";
import L from "leaflet";

function FindPark({ parks }) {
  const [getID, setGetID] = useState([]);
  const [layerGroup] = useState(L.layerGroup()); // ajout calque map

  const handleClick = () => {
    layerGroup.clearLayers();
    console.log("hello");
  };

  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const [theme, setTheme] = useState("");
  const handleSelectTheme = (event) => {
    setTheme(event.target.value);
  };
  const [attraction, setAttraction] = useState("");
  const handleAttraction = (event) => {
    setAttraction(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="find">
      <Filter
        parks={parks}
        country={country}
        handleChange={handleChange}
        theme={theme}
        handleSelectTheme={handleSelectTheme}
        handleAttraction={handleAttraction}
        attraction={attraction}
      />
      <ParkCard
        parks={parks}
        setGetID={setGetID}
        handleClick={handleClick}
        getID={getID}
        country={country}
        theme={theme}
        attraction={attraction}
      />
      <Map getID={getID} handleClick={handleClick} layerGroup={layerGroup} />
    </div>
  );
}

export default FindPark;
