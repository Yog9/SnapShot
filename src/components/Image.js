import React from "react";

const Image = ({ url, title }) => (
  <li data-for="tooltip_map" data-tip={url}>
    <img src={url} alt={title} />
  </li>
);

export default Image;
