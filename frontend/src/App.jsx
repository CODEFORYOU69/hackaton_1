import "./App.css";
import React, { useEffect } from "react";
import Home from "@pages/Home";

function App() {
  useEffect(() => {
    fetch("https://tp.arendz.nl/parks/")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
