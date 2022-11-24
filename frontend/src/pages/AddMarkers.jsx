import React, { useState, useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import rollerMarker from "../assets/img/marker.png";

const icon = L.icon({
  iconSize: [60, 61],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: rollerMarker,
});

const AddMarkers = () => {
  const [coordinate, setCoordinate] = useState([]);
  const map = useMap();

  useEffect(() => {
    fetch("https://tp.arendz.nl/parks/")
      .then((response) => response.json())
      .then((data) => {
        const lat = data[1].location.lat;
        const lng = data[1].location.lng;
        const newCoord = [lat, lng];

        new L.Marker(newCoord, { icon }).addTo(map);
      });
  }, [map]);

  return null;
};

export default AddMarkers;
