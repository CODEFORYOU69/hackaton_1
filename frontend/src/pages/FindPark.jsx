/* eslint-disable */

import React, { useState } from "react";
// import SimpleModal from "../components/SimpleModal";
import ParkCard from "../components/ParkCard";
import Map from "./Map";
import "../style/park_card.css";
import Filter from "@components/Filter";

function FindPark({ parks }) {
  const [getID, setGetID] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log("hello");
  };
  return (
    <div className="find">
      <Filter />
      <ParkCard parks={parks} setGetID={setGetID} handleClick={handleClick} />
      <Map getID={getID} isClicked={isClicked} />
    </div>
  );
}

export default FindPark;
