import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>About</h1>

      {/* <iframe
        src="http://localhost:5227/WeatherForecast"
        width="600"
        height="400"
        style={{ border: "2px solid #333" }}
        title="Wikipedia Example"
      ></iframe> */}

      <pre>
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
    
      2***. Gyansys Experience Letter :regined//pending.pdf

      Discuss strategies to secure an ASP.NET Core API using OAuth2 and OpenID Connect.
     Explain the pros, cons, and implementation details of API versioning in ASP.NET Core.

    How have you optimized database access in Entity Framework Core for large-scale applications?

    Describe how you would implement logging in ASP.NET Core with providers such as Serilog or NLog, including structured logging best practices.
      



      `}
        </code>
      </pre>
    </>
  );
};

export default About;
