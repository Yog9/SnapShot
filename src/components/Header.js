import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>Handytec Test</h1>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;
