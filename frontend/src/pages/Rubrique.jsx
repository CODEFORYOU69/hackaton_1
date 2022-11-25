import React from "react";
import "../style/Rubrique.css";

function Rubrique() {
  const pays = [
    "Amerique",
    "France",
    "Allemagne",
    "Espagne",
    "Royaume-uni",
    "Chine",
    "Mexique",
    "Brésil",
    "Togo",
    "Grèce",
  ];
  return (
    <div className="rubrique">
      <h1 className="rubriquetitle">Rubrique</h1>
      <div className="mapping">
        {pays.map((pay) => (
          <div className="country_name">{pay}</div>
        ))}
      </div>
    </div>
  );
}

export default Rubrique;
