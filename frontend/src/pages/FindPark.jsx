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

  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const [theme, setTheme] = useState("");
  const handleSelectTheme = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className="find">
      <Filter
        parks={parks}
        country={country}
        handleChange={handleChange}
        theme={theme}
        handleSelectTheme={handleSelectTheme}
      />
      <ParkCard
        parks={parks}
        setGetID={setGetID}
        handleClick={handleClick}
        country={country}
        theme={theme}
      />
      <Map getID={getID} isClicked={isClicked} />
    </div>
  );
}

export default FindPark;
