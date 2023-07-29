import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history }) => {
  return (
    <div>
      <h1>SnapShot</h1>
      <Form history={history} />
      <Navigation />
    </div>
  );
};

export default Header;
