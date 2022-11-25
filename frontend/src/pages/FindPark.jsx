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

  return (
    <div className="find">
      <Filter />
      <ParkCard
        parks={parks}
        setGetID={setGetID}
        handleClick={handleClick}
        getID={getID}
      />
      <Map getID={getID} handleClick={handleClick} layerGroup={layerGroup} />
    </div>
  );
}

export default FindPark;
