import { useNavigate, Link } from "react-router-dom";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import React, { useRef, useEffect, useState } from "react";
import mammoth from "mammoth";
//import "@cyntler/react-doc-viewer/dist/index.css";

import "../App.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <pre>
        <code>
          {`

          Custom dome static web: https://www.youtube.com/watch?v=QamPUyCZZpA
          n&n: https://khalid1972.app.n8n.cloud/signin?redirect=%252Fworkflow%252FrvGvANYgKeIQWIUX
          n&n chat: https://khalid1972.app.n8n.cloud/webhook/c4b0d7cb-95df-4ee5-bce3-d9c9d5697b85/chat

          git url: https://github.com/Kakhter/react-project/tree/main/.github/workflows
          Home Paper:

          Self
            Birth Certificate
            Passport Photo
            Bank Acount HDFC & SBI
            PAN Number
            Aadhar
            Voter Card
            Driving Licence
            Passport


          Spouse:
            Birth Certificate
            Passport Photo
            Bank Account Details
            PAN Number
            Aadhar
            Voter Card
            Academic Certificate

          Kamran:
            Birth Certificate
            Passport Photo
            Aadhar
            Income
            Residential
            Cast
            Academic Certificate
          
          Kehkasha:
            Birth Certificate
            Passport Photo
            Aadhar
            Income
            Residential
            Cast
            Academic Certificate

          Farhan:
            Birth Certificate
            Passport Photo
            Aadhar
            Income
            Residential
            Cast
            Voter Card
            Academic Certificate
      
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
      </pre>
    </>
  );
};

export default About;
