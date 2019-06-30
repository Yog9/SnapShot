import React from 'react';
import Container from './Container';

const Bird = (props) => {
  return (
    <div>
      <h2>{props.searchTerm} Pictures</h2>
      <Container searchTerm={props.searchTerm} />
    </div>
  );
};

export default Bird; 
