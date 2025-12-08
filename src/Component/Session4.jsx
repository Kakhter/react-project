import React from "react";
import { useContext } from "react";
import MessageContext from "../utilities/OurMessageContext";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light";

const Session4 = () => {
  return (
    <>
      <h1> [Use of useContext]</h1>
      <img src="/UseContext.jpg" alt="useReducer" width="100%"></img>
      <div>
        <ComponentA></ComponentA>

        <ComponentC />
      </div>
    </>
  );
};

export default Session4;

function ComponentA() {
  return (
    <>
      <div className="box">
        <h4>Inside Component A</h4>
        <ComponentB />
      </div>
    </>
  );
}

function ComponentB() {
  const messageInfo = "Hello useContext Details";

  return (
    <>
      <div className="box">
        <h4>Inside Component B</h4>
        <MessageContext.Provider value={messageInfo}>
          <ComponentZ />
          <ComponentZ />
        </MessageContext.Provider>
      </div>
    </>
  );
}

function ComponentZ() {
  const message2 = useContext(MessageContext);

  return (
    <>
      <div className="box">
        <h4>
          In Component Z:Here we received the useContext value: {message2}
        </h4>
      </div>
    </>
  );
}

function ComponentC() {
  return (
    <>
      <h2>Below are the code explained</h2>

      <pre>
        <code>
          {`
In ManageContext.jsx
---------------------
import {createContext} from "react"; 
const MessageContext = createContext(); 
export default MessageContext;

-----------------------------------------------------
          
import React from "react";
import { useContext } from "react";
import MessageContext from "../utilities/messageContext";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light";

const Session4 = () => {
  return (
    <>
      <div>
        <h1> Use of useContext</h1>

        <ComponentA></ComponentA>

        <ComponentC />
      </div>
    </>
  );
};

export default Session4;

function ComponentA() {
  return (
    <>
      <div className="box">
        <h4>Inside Component A</h4>
        <ComponentB />
      </div>
    </>
  );
}

function ComponentB() {
  const messageInfo = "Hello useContext Details";

  return (
    <>
      <div className="box">
        <h4>Inside Component B</h4>
        <MessageContext.Provider value={messageInfo}>
          <ComponentZ />
          <ComponentZ />
        </MessageContext.Provider>
      </div>
    </>
  );
}

function ComponentZ() {
  const message2 = useContext(MessageContext);

  return (
    <>
      <div className="box">
        <h4>
          In Component Z:Here we received the useContext value: {message2}
        </h4>
      </div>
    </>
  );
}

    `}
        </code>
      </pre>
      {/* Rough:
      <SyntaxHighlighter
        language="javascript"
        customStyle={{ background: "lightgreen" }}
      >
        {`console.log("Normal line");
        console.log("I want to highlight this line");`}
      </SyntaxHighlighter>
      <pre>
        <code>
          <div>Normal line 1</div>
          <div style={{ backgroundColor: "lightgreen" }}>
            ✅ I want to highlight this line
          </div>
          <div>Normal line 2</div>
        </code>
      </pre> */}
    </>
  );
}
