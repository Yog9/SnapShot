import React from "react";

const Image = ({ url, title, onClick }) => (
  <li>
    <img src={url} alt={title} onClick={() => onClick(url)} />
  </li>
);

export default Image;
