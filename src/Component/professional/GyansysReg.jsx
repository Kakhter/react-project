import React from "react";
import { Data, DataSalary } from "./Data.js";
// import "/src/Component/azure/card.css";
import "./gyansysStyle.css";

const GyansysReg = () => {
  return (
    <>
      <h2>Gyansys Resignation Documents</h2>
      <div className="gyancontainer">
        {Data.map(({ id, pdfLink, description }) => {
          return (
            <div className="gyancard">
              <div key={id}>
                <div className={id % 2 === 0 ? "cardheader" : "cardheader1"}>
                  Step: {id}
                  {/* <img src={image} alt="image" width="50%" height="50%"></img> */}
                </div>
                <br />
                <div className="carddescription">
                  <b>Description:</b> {description}
                </div>
                <br />
                <div className="cardlink">
                  <a href={pdfLink} target="_blank">
                    <span className={id % 2 === 0 ? "oval-text" : "oval-text1"}>
                      PDF Link
                    </span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h2>Salary Slips</h2>
      <div className="gyancontainer">
        {DataSalary.map(({ id, pdfLink, description }) => {
          return (
            <div className="gyancard">
              <div key={id}>
                <div className="cardheader">
                  Step: {id}
                  {/* <img src={image} alt="image" width="50%" height="50%"></img> */}
                </div>
                <br />
                <div className="carddescription">
                  <b>Description:</b> {description}
                </div>
                <br />
                <div className="cardlink">
                  <a href={pdfLink} target="_blank">
                    <span className="oval-text">PDF Link</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />
    </>
  );
};
export default GyansysReg;
