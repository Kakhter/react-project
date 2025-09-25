import React from "react";

const TutorialReact = () => {
  return (
    <>
      <h2> How to create react application using vite</h2>
      <h3>Using Vite</h3>
      <ol>
        <li>npm create vite@latest </li>
        <li>
          it will ask project name and variation, give the proper name and
          variation
        </li>
        <li>npm install</li>
        <li>npm run dev</li>
        <li>cd my-app</li>
      </ol>

      <h3>Using npx</h3>
      <ol>
        <li>npx create-react-app myApp</li>
        <li>cd myApp</li>
        <li>npm i</li>
        <li>npm start</li>
        <li>npm run build (For Production)</li>
      </ol>

      <h3>Install Extension for React</h3>
      <ol>
        <li>
          <h3>ESLint </h3>{" "}
        </li>{" "}
        is a static code analysis tool for JavaScript and React projects.
        <br />
        Its main job is to find and fix problems in your code automatically{" "}
        <br />— such as syntax errors, unused variables, or code style issuesX
        <li>
          <h3>Code Formatter</h3>{" "}
        </li>
        Search: Prettier - Code formatter
        <br />
        It will format the code on Save. <br />
        Configure it: File-:Preference-:Setting-:[Search] Format on Save.
        <br />✅ Click the checkbox
      </ol>

      <h3>Add React Developer Tool</h3>
      <a
        href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
        target="_blank"
      >
        React Developer Tool
      </a>
      <ol>
        <li>Click Add to Chrome</li>
        <li>Then click Add Extension</li>
        <li>
          It will install and show up in your extensions list (puzzle icon 🧩 on
          the top-right of Chrome)
        </li>
      </ol>
    </>
  );
};

export default TutorialReact;
