import React from "react";

import Data from "./SQLData";
import "./sqlStyle.css";

const SQL = () => {
  return (
    <>
      <h1> SQL Guideline for Developer/DBA</h1>
      <li>
        <ol>Activity Monitor</ol>
        <ol>SQL Server Profiler</ol>
        <ol>Execution Plan</ol>
        <ol>Extended Event</ol>
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
