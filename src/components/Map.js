import React from "react";
import GoogleMapReact from 'google-map-react';
import MarkerComponent from './Marker';
import { googleMapKey } from "../api/config";

const Map = ({ center, zoom, markerCoords }) => {
  const MAP_OPTIONS = {
    zoomControl: false,
    scrollwheel: false,
    fullscreenControl: false
  };
  return (
    <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapKey }}
          center={center}
          zoom={zoom}
          options={MAP_OPTIONS}
        >
          <MarkerComponent { ...markerCoords } />
        </GoogleMapReact>
      </div>
  );
};

export default Map;