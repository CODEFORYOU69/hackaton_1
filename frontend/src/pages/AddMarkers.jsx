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
  const { getID, handleClick, layerGroup } = props;

  const map = useMap();

  useEffect(() => {
    fetch(`http://localhost:5000/PARK/${getID}`)
      .then((response) => response.json())
      .then((data) => {
        const lat = parseInt(data.LATITUDE);
        const lng = parseInt(data.LONGITUDE);
        const bounds = [lat, lng];
        new L.Marker(bounds, { icon }).addTo(layerGroup);

        map.panTo(bounds);
      });

    map.addLayer(layerGroup);
  }, [handleClick]);

  return null;
};

export default AddMarkers;
