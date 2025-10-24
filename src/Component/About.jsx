import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>About</h1>

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
      `}
        </code>
      </pre>
    </>
  );
};

export default About;
