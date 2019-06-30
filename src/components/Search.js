import React from 'react';
import Container from './Container';

const Search = (props) => {
  return (
    <div>
      <h2>{ props.searchTerm } Images</h2>
      <Container searchTerm={ props.searchTerm } />
    </div>
  );
};

export default Search;
