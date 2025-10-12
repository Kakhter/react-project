import React from "react";
import Data from "./Data";
import "/src/Component/azure/card.css";

const GyansysReg = () => {
  return (
    <>
      <h1>Gyansys Resignation Documents</h1>

      <div
        style={{
          backgroundColor: "ThreeDFace",
          display: "flex",
          //   justifyContent: "space-between",
          //   alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          padding: "10px",
        }}
      >
        {Data.map(({ id, pdfLink, description }) => {
          return (
            <div className="card">
              <div
                key={id}
                style={{
                  padding: "3px",
                  backgroundColor: "white",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <h3>Step: {id}</h3>
                  {/* <img src={image} alt="image" width="50%" height="50%"></img> */}
                </div>
                <p>
                  <b>Description:</b> {description}
                </p>
                <a href={pdfLink} target="_blank">
                  PDF Link
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default GyansysReg;
