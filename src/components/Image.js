import React from "react";

const Image = ({ url, title, coords, tooltipId }) => (
    <li data-for={tooltipId} data-tip={JSON.stringify(coords)}>
      <img src={url} alt={title} />
    </li>
  );

export default Image;
