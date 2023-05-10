import React from "react";
import { useEffect } from 'react';
import Container from "./Container";
import { useDispatch } from 'react-redux';
import { setSearchParamter } from "../store/photos/photos.actions";
import { runSearch } from '../context/PhotoContext';

const Search = ({ searchTerm }) => {

  const dispatch = useDispatch();
  dispatch((setSearchParamter(searchTerm)));
  
  useEffect(() => {
    runSearch(searchTerm);
  }, []);

  return (
    <div>
      <h2>{searchTerm} Images</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
