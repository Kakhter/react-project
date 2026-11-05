import React, { useState } from "react";
import Data from "./Data";
import "/src/Component/azure/card.css";

const AppService = () => {

  const [video, setVideo] = React.useState("");
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
          <h3> Azure Service Videos:</h3>
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
          justifyContent: "space-between",
          alignItems: "center",
          width: "85%",
          padding: "10px",
        }}
      >




        {Data.map(({ id, pdfLink, description, image, video1 }) => {
          //console.log({ video1 })
          return (
            <>
              <div key={id}>
                <button className="btn" onClick={() => setVideo(video1)} > {description} </button>
              </div>
            </>

          )
        })}
      </div>
      <div>
        {
          <iframe
            src={video}
            width="90%"
            height="550px"
            allow="autoplay">
          </iframe>
        }
      </div>


      {/* 

        {Data.map(({ id, pdfLink, description, image, video1 }) => {

          return (
            <div key={id}>

              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                <b>Description:</b> {description}
              </p>
              <div>
                {
                  <iframe
                    src={video1}
                    width="90%"
                    height="550px"
                    allow="autoplay">
                  </iframe>
                }
              </div>


              

            </div>
          );
        })}
 */}



      {/* <iframe src="/azure/AppService.pdf" width="100%" height="600px" /> */}
    </>
  );
};

export default AppService;
