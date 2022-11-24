import "./App.css";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://tp.arendz.nl/parks/")
      .then((response) => response.json())
      .then((data) => console.warn(data))
      .catch((err) => console.warn(err));
  }, []);
  return <div className="App">HEllo</div>;
}

export default App;
