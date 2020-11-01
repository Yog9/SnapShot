import React from 'react';
import Container from './Container';

const Search = ({ searchTerm }) => (
  <>
    <h2>{searchTerm} Images</h2>
    <Container searchTerm={searchTerm} />
  </>
);

export default Search;
