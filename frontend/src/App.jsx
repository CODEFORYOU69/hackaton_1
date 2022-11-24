import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [parks, setParks] = useState([]);
  useEffect(() => {
    fetch("https://tp.arendz.nl/parks/")
      .then((response) => response.json())
      .then((data) => setParks(data))
      .catch((err) => console.error(err));
  }, []);
  return <Home parks={parks} />;
}

export default App;
