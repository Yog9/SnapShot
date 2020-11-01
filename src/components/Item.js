import React from 'react';
import Container from './Container';

const Item = ({ searchTerm }) => {
  return (
    <>
      <h2>{searchTerm} Pictures</h2>
      <Container searchTerm={searchTerm} />
    </>
  );
};

export default Item;
