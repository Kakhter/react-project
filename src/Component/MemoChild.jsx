import React, { memo } from "react";

//const UseCallbackComponent = () => {
const MemoChild = React.memo(({ value }) => {
  return (
    <>
      <h1>Use of memo Child Component</h1>
      <br />
      <h3>Child Component, Value come from parent: {value}</h3>
      <br />
      {console.log("..called from child component")}
    </>
  );
});

export default MemoChild;
