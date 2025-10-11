import React from "react";
import { Link } from "react-router-dom";

const DML = () => {
  return (
    <>
      <a href="/DML.pdf" target="_blank" rel="noopener noreferrer">
        Open pdf in new tab
      </a>
      <br />

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
