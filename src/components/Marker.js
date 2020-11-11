import React from "react";
import marker from '../assets/images/push_pin-black-18dp.svg';

const MarkerComponent = () => <img style={{transform: 'translate(-50%, -100%)'}} className="map__marker" src={marker} alt="Marker" />;

export default MarkerComponent;