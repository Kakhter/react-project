import React from "react"

const TutorialReact=() =>
{

return(
    <>
     <h2> How to create react application using vite</h2>
     <h3>Using Vite</h3>
     <ol>
        <li>npm create vite@latest </li>
        <li>it will ask project name and variation, give the proper name and variation</li>
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
        <li><h3>ESLint </h3> </li> is a static code analysis tool for JavaScript and React projects.<br />
        Its main job is to find and fix problems in your code automatically <br />
        — such as syntax errors, unused variables, or code style issuesX
        <li><h3>Code Formatter</h3> </li>
        It will format the code on Save. <br />
        Configure it: File-:Preference-:Setting-:[Search] Format on Save.<br />
        ✅ Click the checkbox
     </ol>

     <h3>Add React Developer Tool</h3>
     <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi" target="_blank">React Developer Tool</a>
     <ol>
        <li>Click Add to Chrome</li>
        <li>Then click Add Extension</li>
        <li>It will install and show up in your extensions list (puzzle icon 🧩 on the top-right of Chrome)</li>
    </ol>

<h3>Other Command</h3>
     <ol>
        <li>Rest Operator</li>
            function test(v1,v2,...v)<br />
            {"{"}<br />
                console.log(v1);<br />
                console.log(v2);<br />
                console.log(v);<br />
            {"}"}<br />
            Call the function <br />
            test("x","y","z","1","2","3")<br />
            Result:<br />
            x<br />
            y<br />
            [z,1,2,3]<br />

        <li>Spread Operator</li><br />
            const fruit =["apple","banana"];<br />
            const otherFruit=["lichi","gabha","pineapple"];<br />
            const allFruits = [...fruit, otherFruit];<br />
            
            The above syntax merging two array and '...' triple dot symbol called spread operator.<br />

            or<br />
            const newState = [ ...fruit,"Mosammi"]<br />
            State is mutable.<br />




        <li>map function</li>
        <pre>
        <code>
        {`movies.map(movie => (
        <div key={movie.id}>
        <p>Movie Title: {movie.title}</p>
        </div>
        ))`}
        </code>
        </pre>

       
        <li>Path concaneting</li>
        <code>
        {`<img src={./image/{$}{variable}} `}
        </code>
<li>Path concaneting</li>
<li>Path concaneting</li>
<li>Path concaneting</li>
<li>Path concaneting</li>



     </ol>
    </>
)}

export default TutorialReact;
