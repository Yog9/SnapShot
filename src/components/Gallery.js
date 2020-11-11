import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
import ReactTooltip from "react-tooltip";
import Map from "./Map";
const Gallery = props => {
  const results = props.data;
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
      <ReactTooltip 
        id='tooltip_map' 
        getContent={(dataTip) => (
          <Map center={{ lat: 52.6376, lng: -1.135171 }} zoom={13} markerCoords={{ lat: 52.6376, lng: -1.135171 }} />
        )} />
    </div>
  );
};

export default Gallery;
