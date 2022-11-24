import React from "react";
// import SimpleModal from "../components/SimpleModal";
import ParkCard from "../components/ParkCard";

function FindPark({ parks }) {
  return (
    <div>
      {" "}
      <ParkCard parks={parks} />
      {/* <SimpleModal /> */}
    </div>
  );
}

export default FindPark;
