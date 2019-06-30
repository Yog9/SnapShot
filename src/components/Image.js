import React from 'react';

const Image = props => (
  <li>
    <img src={props.url} alt={props.title} />
  </li>
);

export default Image;
