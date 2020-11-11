import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
import Tooltip from "./Tooltip";

const Gallery = props => {
  const results = props.data;
  const TOOLTIP_MAP_ID = 'tooltip_map';
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
      let coords = { lat: Number(image.latitude), lng: Number(image.longitude) };
      return <Image url={url} key={id} alt={title} coords={coords} tooltipId={TOOLTIP_MAP_ID}/>;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }

  return (
    <div>
      <ul>{images}</ul>
      {noImages}
      <Tooltip tooltipId={TOOLTIP_MAP_ID} images={results} />
    </div>
  );
};

export default Gallery;
