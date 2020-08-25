import React from "react";
import Map from "../components/mapFactory";
import { Layer, Feature } from "react-mapbox-gl";

export default function MapPopover({ coordinates }) {
  const areValidCoordinates = coordinates.reduce((x, y) => x + y);
  return (
    <div>
      {(!!areValidCoordinates && (
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "10vh",
            width: "10vw",
            margin: "0 auto",
          }}
          center={coordinates}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            <Feature coordinates={coordinates} />
          </Layer>
        </Map>
      )) || <div>No valid coordinates for this photo 😥</div>}
    </div>
  );
}
