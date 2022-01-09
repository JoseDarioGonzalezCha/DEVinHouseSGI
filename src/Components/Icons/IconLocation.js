import L from "leaflet";

export const IconLocation = L.icon({
  iconUrl: require("../../assets/location-icon.jpg"),
  iconRetinaUrl: require("../../assets/location-icon.jpg"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});
