import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
import ReactTooltip from "react-tooltip";
import MapPopoever from "./MapPopover";

/*
  Decided to use ReactTooltip as the bundle size is relatively small:
   26.8 kB MINIFIED
   And the API was very developer-friendly.
   It suited my needs for the new feature.
*/

const displayImages = (images) =>
  images.map(({ farm, server, id, secret, title, latitude, longitude }) => {
    const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    return (
      <>
        <a data-tip data-for={id}>
          <Image url={url} key={id} alt={title} />
        </a>
        <ReactTooltip id={id} type="light">
          <span>{title}</span>
          <MapPopoever coordinates={[longitude, latitude]} />
        </ReactTooltip>
      </>
    );
  });

const Gallery = ({ data }) => (
  <div>
    <ul>{data.length > 0 && displayImages(data)}</ul>
    {!data.length && <NoImages />}
  </div>
);

export default Gallery;
