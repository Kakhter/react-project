import React from "react";
import { Consultant, Data, DataSalary, AMAT, Docs } from "./Data.js";

import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

// import "/src/Component/azure/card.css";
import "./gyansysStyle.css";

const GyansysReg = () => {
  const docs1 = [
    {
      uri: "/DML.pdf",
      fileType: "pdf",
      fileName: "sample.pdf",
    },
    {
      uri: "https://app.khalida.cloud/pqr.txt",
      fileType: "txt",
      fileName: "sample.txt",
    },
  ];
  return (
    <>
      <DocViewer documents={docs1} pluginRenderers={DocViewerRenderers} />
      <div>
        Send invoice to ap.in@gyansys.com <br />
        Fill replicon and get approver by respective approver <br />
      </div>
      <h2>AMAT Process: Oct 2025</h2>
      <div className="gyancontainer">
        {AMAT.map(({ id, pdfLink, description }) => {
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
      <h2>Gyansys Consultant Process</h2>
      <div className="gyancontainer">
        {Consultant.map(({ id, pdfLink, description }) => {
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
      <h2>Gyansys Salary Slips</h2>
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
