import React from "react";
import "../style/Welcome.css";

function Welcome() {
  return (
    <div>
      <div className="welcomeall">
        <div className="titleall">
          <h1 className="title1">Thèmes</h1>
          <h1 className="title2">Parc</h1>
          <h1 className="title3">World</h1>
          <button className="buttonreserve" type="button">
            Réserver votre sejour
          </button>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
