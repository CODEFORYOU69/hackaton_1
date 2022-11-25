/* eslint-disable */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import FindPark from "./pages/FindPark";
import Navbar from "./components/Navbar";
import Favorite from "./pages/Favorite";

function App() {
  const [parks, setParks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/PARK")
      .then((response) => response.json())
      .then((data) => {
        setParks(data);
        console.log(data);
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
