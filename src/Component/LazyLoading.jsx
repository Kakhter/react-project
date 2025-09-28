import React, { useEffect, useState } from "react";
const LazyLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2-second delay
    return () => clearTimeout(timer); // cleanup
  }, []);

  if (isLoading) {
    return <h3>⏳ Loading content...</h3>;
  }

  return (
    <>
      <h2>✅ Content Loaded after delay inside component!</h2>
      <p>
        Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
      </p>
      <a
        href="https://polarislogin.replicon.com/?companykey=&msg=&code=PleaseLoginToContinue&init="
        target="_blank"
      >
        Replicon
      </a>
      <a
        href="https://careers.appliedmaterials.com/careers?domain=appliedmaterials.com&triggerGoButton=false&query=Senior+Software+Engineer&start=0&location=KA%2C+India&pid=790304526739&sort_by=solr&filter_include_remote=1"
        target="_blank"
      >
        {" "}
        Applied Material Carrer
      </a>
      <br />
      <a
        href="https://learn.microsoft.com/en-us/users/khalidakhter-6307/credentials/ef97b0e1efed23f8"
        target="_blank"
      >
        AZ-104
      </a>
      <br />
      <a
        href="https://arch-center.azureedge.net/Credentials/Certification-Poster_en-us.pdf"
        target="_blank"
      >
        AZ Path
      </a>
      <br />
      <a
        href="https://polite-desert-02c508c00.1.azurestaticapps.net"
        target="_blank"
      >
        Azure Static Web
      </a>{" "}
      <br />
      <br />
      <a href="https://www.naukri.com/mnjuser/homepage" target="_blank">
        {" "}
        Noukri Com@Gyansys@2025
      </a>
      <br />
      <br />
      <a
        href="https://www.udemy.com/course/master-react/learn/lecture/43464416#overview"
        target="_blank"
      >
        React Udemy
      </a>
      <br />
      <a
        href="https://marketplace.hiringhood.ai/jobseeker/jobs"
        target="_blank"
      >
        Job
      </a>
      <br />
      <a
        href="https://github.com/Kakhter/react-project/actions"
        target="_blank"
      >
        Git Kakhter Workflow
      </a>
      <a href="https://youtu.be/QamPUyCZZpA" target="_blank">
        Azure Custom Domain for Static web
      </a>
    </>
  );
};

export default LazyLoading;
