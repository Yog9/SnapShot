import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import config from "../api/config";

const { mapboxApiKey } = config;

// This should come from a secret on .env
// Note: this is the public token for every user of mapbox - not mine.
// This is just for development purposes

// why a factory function? 
// It's a bad patter to hardcode a token explicitly dependant on the implementation of the map. IMO
// it makes it cleaner to invoke the factory only once and consume the map whenever it needs to be consumed 
// than creating a new instance of ReactMapboxGl every time

const mapFactory = (token) => {
  const Map = ReactMapboxGl({
    accessToken: token,
  });

  return (mapProps) => <Map {...mapProps} />;
};

export default mapFactory(mapboxApiKey);
