import React from "react";
import ParkCard from "../components/ParkCard";

function Home({ parks }) {
  return (
    <div>
      <ParkCard parks={parks} />
    </div>
  );
}

export default Home;
