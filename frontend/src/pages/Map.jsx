import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "./Map.css";
import AddMarkers from "./AddMarkers";

const location = [46.232192999999995, 2.209666999999996];
const zoom = 5;

const Map = (props) => {
  const { coordinate } = props;
  return (
    <div className="map-container">
      <MapContainer
        center={location}
        zoom={zoom}
        scrollWheelZoom
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <AddMarkers coordinate={coordinate} />
      </MapContainer>
    </div>
  );
};

export default Map;
