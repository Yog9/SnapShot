import React, {useState} from "react";
import NoImages from "./NoImages";
import Image from "./Image";
import ImagePopup from "./ImagePopup";

const Gallery = props => {
  const [showImage, setShowImage] = useState(false);

  const results = props.data;
  let images;
  let noImages;
  
  const onImageClick = (val) => {
    console.log(val)
    setShowImage(true)
  }
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} onClick={onImageClick}/>;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
      <ImagePopup show={showImage}/>
    </div>
  );
};

export default Gallery;
