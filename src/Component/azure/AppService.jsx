import React from "react";
import Data from "./Data";
import "/src/Component/azure/card.css";

const AppService = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div>
          <h3> App Service:</h3>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ padding: "10px" }}>
            <a href="/azure/AppService.pdf" target="_blank" alt="App Service">
              App Service
            </a>
          </div>

          <div style={{ padding: "10px" }}>
            <a href="/azure/AzureDevOps.pdf" target="_blank" alt="App Service">
              AzureDevOps:
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "ThreeDFace",
          display: "flex",
          // justifyContent: "space-between",
          // alignItems: "center",
          width: "100%",
          padding: "10px",
        }}
      >
        {Data.map(({ id, pdfLink, description, image, video1 }) => {
          console.log({ video1 })
          return (
            <div className="card" key={id}>

              <div
                key={id}
                style={{ padding: "3px", backgroundColor: "white" }}
              >
                <div style={{ textAlign: "center" }}>
                  <h3>Topic No: {id}</h3>
                  <img src={image} alt="image" width="50%" height="50%"></img>
                </div>

                <video width="500" controls>
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.

                </video>

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

      {/* <iframe src="/azure/AppService.pdf" width="100%" height="600px" /> */}
    </>
  );
};

export default AppService;
