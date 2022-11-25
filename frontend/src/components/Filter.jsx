/* eslint-disable */
import React from "react";
import FilterCountry from "./FilterCountry";
import FilterTheme from "./FilterTheme";
import Search from "./Search";
import "../style/park_card.css";

const Filter = () => {
  return (
    <div className="filter-container">
      <FilterCountry />
      <FilterTheme />
      <Search />
    </div>
  );
};

export default Filter;
