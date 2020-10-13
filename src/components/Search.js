import React from "react";
import Container from "./Container";
import DangerousInput from "./DangerousInput";

const Search = ({ searchTerm }) => {
  return (
    <div>
      <DangerousInput />
      <h2>{searchTerm} Images</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
