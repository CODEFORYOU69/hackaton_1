/* eslint-disable */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import FindPark from "./pages/FindPark";
import Navbar from "./components/Navbar";
import Favorite from "./pages/Favorite";

function App() {
  const [parks, setParks] = useState([]);
  useEffect(() => {
    fetch("https://tp.arendz.nl/parks/")
      .then((response) => response.json())
      .then((data) => {
        setParks(data).catch((err) => console.error(err));
      });
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/findpark" element={<FindPark parks={parks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
