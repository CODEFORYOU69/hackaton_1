/* eslint-disable */
import React from "react";
import FilterCountry from "./FilterCountry";
import FilterTheme from "./FilterTheme";
import Search from "./Search";
import "../style/park_card.css";

const Filter = ({ parks, handleChange, handleSelectTheme }) => {
  return (
    <div className="filter-container">
      <FilterCountry parks={parks} handleChange={handleChange} />
      <FilterTheme parks={parks} handleSelectTheme={handleSelectTheme} />
      <Search />
    </div>
  );
};

export default Filter;
