import React from "react";

const Image = ({ url, title, photoId, id }) => (
  <li className={id == photoId ? 'highlight-img' : ''}>
    <img src={url} alt={title}/>
  </li>
);

export default Image;
