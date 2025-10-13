import React from "react";

import Data from "./SQLData";
import "./sqlStyle.css";

const SQL = () => {
  return (
    <>
      <h1> SQL Guideline for Developer/DBA</h1>

      <div className="container">
        {Data.map(({ id, pdfLink, description, pdfimage }) => {
          return (
            <div className="sqlcard">
              <div key={id}>
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "lightblue",
                    fontSize: "19px",
                  }}
                >
                  Topic: {id}
                </div>
                <br />
                <img
                  src={pdfimage}
                  alt="pdf image"
                  width="25%"
                  height="25%"
                ></img>
                <br />

                <div style={{ textAlign: "left" }}>
                  <b>Description:</b> {description}{" "}
                </div>
                <br />
                <div style={{ textAlign: "right" }}>
                  <a href={pdfLink} target="_blank">
                    PDF Link
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SQL;
