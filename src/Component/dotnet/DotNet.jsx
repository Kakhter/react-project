import React, { useState } from "react";
import RepositoryPattern from "./RepositoryPattern";
import FactoryPattern from "./FactoryPattern";
import CleanArchitecture from "./CleanArchitecture";
import Dapper from "./Dapper";
import Test from "./Test";
import EnvironmentSetting from "./EnvironmentSetting";
import MiddleWare from "./MiddleWare";
import Filter from "./Filter";
import EF from "./EF";
import CORS from "./CORS";
import JWT from "./JWT";
import CSRF from "./CSRF";
import Caching from "./Caching";
import ReturnType from "./ReturnType";
import Throttling from "./Throttling";
import Scope from "./Scope";
import Swagger from "./Swagger";
import Compression from "./Compression";
import WorkerService from "./WorkerSerivce";
import GlobalException from "./GlobalException";
import Data from "./Data";

import "./dotnet.css";

const DotNet = () => {
  const [data, setData] = useState("Select Topic");

  function DisplayData(id, e) {
    if (id == 0) setData(Test);
    if (id == 1) setData(FactoryPattern);
    if (id == 2) setData(RepositoryPattern);
    if (id == 3) setData(CleanArchitecture);
    if (id == 4) setData(Dapper);
    if (id == 5) setData(EnvironmentSetting);
    if (id == 6) setData(MiddleWare);
    if (id == 7) setData(Filter);
    if (id == 8) setData(EF);
    if (id == 9) setData(CORS);
    if (id == 10) setData(JWT);
    if (id == 11) setData(CSRF);
    if (id == 12) setData(Caching);
    if (id == 13) setData(ReturnType);
    if (id == 14) setData(Throttling);
    if (id == 15) setData(Scope);
    if (id == 16) setData(Compression);
    if (id == 17) setData(Swagger);
    if (id == 18) setData(WorkerService);
    if (id == 19) setData(GlobalException);
  }
  return (
    <>
      <h1>
        <span className="highlightText">Dot Net Practices</span>
      </h1>
      Theoretical: <br />
      <div
        style={{
          display: "flex",
          padding: "2px",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {Data.map((data) => (
          <div
            className="oval-text"
            key={data.id}
            // onClick={() => DisplayData(data.id)}
          >
            <div>{data.topic}</div>
            <div>
              <a href={data.pdfLink} target="_blank">
                Link
              </a>
            </div>
          </div>
        ))}
      </div>
      Dot Net Code: C:\Users\KhalidAkhter\source\repos <br />
      Select Topic
      <br />
      <div
        style={{
          display: "flex",
          padding: "2px",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <div className="oval-text" onClick={() => DisplayData(0)}>
          Test
        </div>
        <div className="oval-text" onClick={() => DisplayData(1)}>
          Factory Pattern
        </div>
        <div className="oval-text" onClick={() => DisplayData(2)}>
          Repository Pattern
        </div>
        <div className="oval-text" onClick={() => DisplayData(3)}>
          Clean Architecture
        </div>
        <div className="oval-text" onClick={() => DisplayData(4)}>
          Dapper
        </div>
        <div className="oval-text" onClick={() => DisplayData(5)}>
          API EnvironmentSetting
        </div>
        <div className="oval-text" onClick={() => DisplayData(6)}>
          MiddleWare
        </div>
        <div className="oval-text" onClick={() => DisplayData(7)}>
          Filter
        </div>
        <div className="oval-text" onClick={() => DisplayData(8)}>
          Entity Framework
        </div>
        <div className="oval-text" onClick={() => DisplayData(9)}>
          CORS
        </div>
        <div className="oval-text" onClick={() => DisplayData(10)}>
          JWT:
        </div>
        <div className="oval-text" onClick={() => DisplayData(11)}>
          X-CSRF
        </div>
        <div className="oval-text" onClick={() => DisplayData(12)}>
          Caching
        </div>
        <div className="oval-text" onClick={() => DisplayData(13)}>
          Return XML format
        </div>
        <div className="oval-text" onClick={() => DisplayData(14)}>
          Throttling
        </div>
        <div className="oval-text" onClick={() => DisplayData(15)}>
          DI Scope
        </div>

        <div className="oval-text" onClick={() => DisplayData(16)}>
          Compression
        </div>

        <div className="oval-text" onClick={() => DisplayData(17)}>
          Swagger
        </div>
        <div className="oval-text" onClick={() => DisplayData(18)}>
          WorkerService
        </div>
        <div className="oval-text" onClick={() => DisplayData(19)}>
          GlobalException
        </div>
      </div>
      <pre>
        <code style={{ color: "black" }}>{data}</code>
      </pre>
    </>
  );
};

export default DotNet;
