import React from "react";
import GoogleMapReact from 'google-map-react';
import MarkerComponent from './Marker';

const Map = ({ center, zoom, markerCoords }) => {
  return (
    <div className="map">
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <MarkerComponent { ...markerCoords } />
        </GoogleMapReact>
      </div>
  );
};

export default Map;