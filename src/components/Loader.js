import React from "react";
import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <Spinner
      animation="border"
      role="status"
      variant="danger"
      style={{
        height: "200px",
        width: "200px",
        margin: "auto",
        display: "block",
      }}
    >      
    </Spinner>
  );
}

export default Loader;
