import React from "react";
import Container from "./Container";
import { useDispatch } from 'react-redux';
import { setSearchParamter } from "../store/photos/photos.actions";

const Item = ({ searchTerm }) => {

  const dispatch = useDispatch();
  dispatch((setSearchParamter(searchTerm)));

  return (
    <div>
      <h2>{searchTerm} Pictures</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
