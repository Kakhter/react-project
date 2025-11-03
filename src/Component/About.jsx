import { useNavigate, Link } from "react-router-dom";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import React, { useRef, useEffect, useState } from "react";
import mammoth from "mammoth";
//import "@cyntler/react-doc-viewer/dist/index.css";

import "../App.css";

const About = () => {
  const navigate = useNavigate();

  const docs1 = [
    {
      uri: "/DML.pdf",
      fileType: "pdf",
      fileName: "sample.pdf",
    },
    {
      uri: "https://app.khalida.cloud/resigned/PreEmploymentScreening_Khalid_Akhter.docx",
      fileType: "docx",
      fileName: "sample.docx",
    },
    {
      uri: "https://app.khalida.cloud/resigned/InvoiceFormatContractors.xlsx",
      fileType: "xlsx",
      fileName: "sample.xlsx",
    },
  ];

  return (
    <>
      <h1>Hi</h1>
      <div style={{ height: "100vh", overflow: "visible" }}>
        <DocViewer
          documents={docs1}
          pluginRenderers={DocViewerRenderers}
          style={{ height: "100%" }}
        />

        {/* <iframe
        src="http://localhost:5227/WeatherForecast"
        width="600"
        height="400"
        style={{ border: "2px solid #333" }}
        title="Wikipedia Example"
      ></iframe> */}

        {/* <pre>
        <code>
          {`
      Best regards,  
        Khalid Akhter  
        Full Stack Developer | Independent Contractor  
        Microsoft Certified: Azure Administrator (AZ-104)  
        Master of Computer Applications (MCA)  
        khalid.bharat@gmail.com
        Mob: 9430969786

      Dapper File Path:
      C:\\Users\\KhalidAkhter\\OneDrive - GyanSys Inc\\Desktop\Copy_C_Drive\\inOneFolder\\MyShowCase
      \\CleanArchitecture\\Dapper.WebApi-master\\Dapper.WebApi-master

      InternAPI File Path:
      C:\\Users\\KhalidAkhter\\OneDrive - GyanSys Inc\\Desktop\\TA-IntrimTraining\\DotNet Day Wise
      \\Dot Net Training - 2025\\DotNet_Jan302025\\InternAPI\\InternAPI

      GulfTelent: https://www.gulftalent.com/candidates/edit-cv/cv-review

      Pending Tasks: 
 
    Discuss strategies to secure an ASP.NET Core API using OAuth2 and OpenID Connect.
    Explain the pros, cons, and implementation details of API versioning in ASP.NET Core.

    How have you optimized database access in Entity Framework Core for large-scale applications?

    Describe how you would implement logging in ASP.NET Core with providers such as Serilog or NLog, including structured logging best practices.
      
    React:

    export const authConfig = {
      authority: "https://your-ping-tenant-id.pingidentity.com/as",
      client_id: "YOUR_CLIENT_ID",
      redirect_uri: "http://localhost:3000/callback",
      response_type: "token id_token",
      scope: "openid profile email",
    };



      `}
        </code>
      </pre> */}
      </div>
    </>
  );
};

export default About;
