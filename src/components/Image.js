import React from "react";

const Image = ({ url, title, photoId, id, setId}) => (
  <li className={id == photoId ? 'highlight-img' : ''} onMouseOver={() => setId(id)}>
    <img src={url} alt={title}/>
  </li>
);

export default Image;
