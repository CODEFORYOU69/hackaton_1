import React from "react";
import ParkCard from "../components/ParkCard";

function FindPark({ parks }) {
  return (
    <div>
      {" "}
      <ParkCard parks={parks} />
    </div>
  );
}

export default FindPark;
