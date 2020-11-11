import React from "react";
import Map from "./Map";

const TooltipContent = ({ coords }) => {
  return (
    <div>
      <h3>Photo Location:</h3>
      <Map center={coords} zoom={12} markerCoords={coords} />
    </div>
  );
};

export default TooltipContent;