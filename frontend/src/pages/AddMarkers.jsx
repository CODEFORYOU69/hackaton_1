/* eslint-disable */
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

const AddMarkers = (props) => {
  const { getID, handleClick } = props;
  const [coordinate, setCoordinate] = useState([]);
  const map = useMap();

  useEffect(() => {
    fetch(`http://localhost:5000/PARK/${getID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const lat = parseInt(data.LATITUDE);
        const lng = parseInt(data.LONGITUDE);
        const newCoord = [lat, lng];

        new L.Marker(newCoord, { icon }).addTo(map);
      });
  }, [handleClick]);

  return null;
};

export default AddMarkers;
