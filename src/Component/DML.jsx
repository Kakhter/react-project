import React from "react";
import { Link } from "react-router-dom";

const DML = () => {
  return (
    <>
      <Link to="../about">About Page</Link>
      <iframe
        src="./DML.pdf"
        width="100%"
        height="600px"
        title="PDF Viewer"
        style={{ backgroundColor: "white", border: "none" }}
      />
    </>
  );
};

export default DML;
