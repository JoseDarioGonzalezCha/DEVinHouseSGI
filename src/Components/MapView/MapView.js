import React, { useState, useEffect } from "react";

import { MapViewStyled } from "./MapView.styles";
import { MapContainer, TileLayer } from "react-leaflet";
import "./style.css";
import { Markers } from "../Markers/Markers";

export const MapView = () => {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    async function getCompany() {
      const result = await fetch(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      );
      const data = await result.json();
      setCompany(data);
    }
    getCompany();
  }, []);

  return (
    <MapViewStyled>
      <MapContainer
        center={[-27.544689, -48.500187]}
        zoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {company.map((item) => (
          <></>
        ))}
        <Markers />
      </MapContainer>
    </MapViewStyled>
  );
};
