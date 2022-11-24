import React from "react";
import ParkCard from "../components/ParkCard";
import Map from "./Map";
import "../style/park_card.css";

function FindPark({ parks }) {
  return (
    <div className="find-container">
      <ParkCard parks={parks} />
      <Map />
    </div>
  );
}

export default FindPark;
