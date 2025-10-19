import React, { useState } from "react";
import RepositoryPattern from "./RepositoryPattern";
import FactoryPattern from "./FactoryPattern";
import CleanArchitecture from "./CleanArchitecture";
import "./dotnet.css";

const DotNet = () => {
  const [data, setData] = useState("Select Topic");

  function DisplayData(id, e) {
    if (id == 1) setData(FactoryPattern);
    if (id == 2) setData(RepositoryPattern);
    if (id == 3) setData(CleanArchitecture);
  }

  return (
    <>
      <h1>Dot Net Practices</h1>
      Dot Net Code: C:\Users\KhalidAkhter\source\repos <br />
      <div style={{ display: "flex", padding: "2px", gap: "10px" }}>
        <div className="oval-text" onClick={() => DisplayData(1)}>
          Factory Pattern
        </div>
        <div className="oval-text" onClick={() => DisplayData(2)}>
          Repository Pattern
        </div>
        <div className="oval-text" onClick={() => DisplayData(3)}>
          Clean Architecture
        </div>
      </div>
      <pre>
        <code>{data}</code>
      </pre>
    </>
  );
};

export default DotNet;
