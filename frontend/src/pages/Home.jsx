/* eslint-disable */
import React from "react";
import BestAtt from "@components/BestAtt";
import Country from "./Country";
import Welcome from "../components/Welcome";
import Rubrique from "./Rubrique";

function Home() {
  return (
    <div>
      <Welcome />
      <BestAtt />
      <Country />
      <Rubrique />
    </div>
  );
}

export default Home;
