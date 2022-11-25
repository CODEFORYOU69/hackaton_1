/* eslint-disable */
import React from "react";
import "../style/Welcome.css";

function Welcome() {
  return (
    <div>
      <div className="welcomeall">
        <div className="img-back"></div>
        <div className="titleall">
          <h1 className="title1">Theme</h1>
          <h1 className="title2">Park</h1>
          <h1 className="title3">World</h1>
          <button className="buttonreserve" type="button">
            Trouver mon parc
          </button>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
