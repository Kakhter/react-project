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
      <pre>
        <code>
          {`
          Your AMAT laptop is ready. You can collect it from the below given address on (03rd Nov '2025-Monday, any time before 5PM IST).
          Manager Name- Lagare, Bharatesh [HM] (154846)
          Business Unit- GIS:DIA:AI&ML (60021547)
          PSID- X0107908

          Project Name: IND-AMAT_DIA_API_SOW
          Task Name:  SQL Developer
          Start Date: 04th November 2025

          -----------------------------------------------------------------------------

          AMAT Induction Guideline

        	Laptop Collection & Configuration: 

        •	Once the AMAT team raises a laptop request and it is approved by the manager, the respective recruiter will notify you to collect the laptop from the AMAT office.
        •	Upon confirmation from the TA team, employees will visit the AMAT office:
        o	Innovator-9th Floor, ITPL, Whitefield
        •	At the reception, you will be asked for your PSID (AMAT ID), which will be communicated to you by your recruiter or Account Manager. Inform the receptionist that you are there to collect a laptop.
        •	The receptionist will notify the IT Team, after which someone will guide you and assist with laptop configuration.
        •	Once you have collected and configured the laptop, you are advised to connect with your manager directly or via Teams/Outlook to gain tool access and begin working.

        	Please contact the respective delivery manager for better understanding. It will be updated by the Account Management team. 

        	For the AMAT ID Card, you must visit Suganthy Devarajan on the 2nd Floor, Explorer Building.

        	It is advised to go through AMAT Website to understand them better- https://www.appliedmaterials.com/ .

        	You must join the WhatsApp GyanSys AMAT Team through the below link-
        o	https://chat.whatsapp.com/KgtLlgY4ph5GeLgCgyy0tB

        	You must attend SIPS Training as a part of onboarding (Safety, Intellectual Property and Security Awareness Induction)
        *(Invite will be sent by Suganthy Devarajan/Shilpi Routray).

        	Parking Details:
        If you choose to use parking, please visit the 2nd floor of Explorer Building. You will need to pay for the parking and then submit it for reimbursement to the expenses section on Replicon.
        o	Visit the Explorer building on the 2nd floor, request a parking receipt, and complete the required form.
        o	Proceed to the pass office located behind the Innovator building and confirm with any security personnel.
        o	Pay the 3-month parking fee at the pass office and collect the receipt.
        o	The parking record will be updated, allowing parking access starting the next day.
        o	Upload the receipt to the Replicon expense tracker for reimbursement.

        	GyanSys Timesheets – Replicon 
        Replicon credentials will be sent by the Account Management Team.
         
        	In case of any issue, your POC from GyanSys:
        Shilpi Routray- 8917212290
        Kumar Siddhant- 8586957893

                      Useful Email ID
        hr.in@gyansys.com
        Onboarding and HR concerns/query (including employee payroll/benefits/time off)
        referral.in@gyansys.com
        New candidates’ referral
        sales.in@gyansys.com
        Submission of potential opportunities/leads & prospects
        timesheets.in@gyansys.com
        Assistance for Timesheet/Expense related issues
        ap.in@gyansys.com
        Contractor invoice submission/payment status
        itsupport.in@gyansys.com
        For hardware, software, IT related issues




          `}
        </code>
      </pre>

      <div style={{ height: "100vh", overflow: "visible" }}>
        {/* <DocViewer
          documents={docs1}
          pluginRenderers={DocViewerRenderers}
          style={{ height: "100%" }}
        /> */}

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
