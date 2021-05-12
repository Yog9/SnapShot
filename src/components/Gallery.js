import React, { useState } from "react";
import NoImages from "./NoImages";
import Image from "./Image";
import Map from "./Map";



const Gallery = props => {
  let [photoId, setId] = useState('');
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
      console.log("id", id)
      console.log("photoId", photoId)
      return <Image url={url} key={id} alt={title} photoId={photoId} id={id}/>;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div className="photo-gallery">
      <div className="photos">
        <ul>{images}</ul>
        {noImages}
      </div>
      <div className= "map-container">
        <Map images={results} setId={setId}/>  
      </div>
    </div>
  );
};

export default Gallery;
