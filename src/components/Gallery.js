import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";

const displayImages = (images) =>
  images.map(({ farm, server, id, secret, title }) => {
    const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    return <Image url={url} key={id} alt={title} />;
  });

const Gallery = ({ data }) => (
  <div>
    <ul>{data.length > 0 && displayImages(data)}</ul>
    {!data.length && <NoImages />}
  </div>
);

export default Gallery;
