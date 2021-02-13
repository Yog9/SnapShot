import React from "react";
import Container from "./Container";
import {useParams} from 'react-router-dom'
const Search = () => {
  const {searchInput} = useParams();
  return (
    <div>
      <h2>{searchInput} Images</h2>
      <Container searchTerm={searchInput} />
    </div>
  );
};

export default Search;
