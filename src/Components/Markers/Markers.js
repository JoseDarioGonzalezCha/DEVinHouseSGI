import React from "react";
import { Marker } from "react-leaflet";

import { IconLocation } from "../Icons/IconLocation";

export const Markers = () => {
  return (
    <Marker
      position={{ lat: "-27.544689", lng: "-48.500187" }}
      icon={IconLocation}
    />
  );
};
