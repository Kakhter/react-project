import React from "react";

import Data from "./SQLData";
import "./sqlStyle.css";
import { Link } from "react-router-dom";

const SQL = () => {
  return (
    <>
      <h1> SQL Guideline for Developer/DBA</h1>
      <li>
        <Link to="/app/dml">Some More SQL</Link>
      </li>

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
                <div style={{ padding: "10px", textAlign: "left" }}>
                  <b>Description:</b> {description}{" "}
                </div>
                <br />
                <div
                  style={{
                    backgroundColor: "rgb(116, 200, 137)",
                    textAlign: "center",
                    height: "4vh",
                  }}
                >
                  <a href={pdfLink} target="_blank">
                    <b>PDF Link</b>
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
