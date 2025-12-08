import React, { useState } from "react";
import Momo from "././MemoChild";

const useCallback = () => {
  const [count, setCount] = useState(0);
  const [child, setChild] = useState("send to child");
  return (
    <>
      <h1>Use of memo Parent Component</h1>
      <input
        placeholder="Not related to child value"
        type="text"
        value={count}
        onChange={() => setCount(event.target.value)}
      />

      <input
        placeholder="Related to child value"
        type="text"
        value={child}
        onChange={() => setChild(event.target.value)}
      />
      <br />
      <hr />
      <Momo value={child} />
      <br/>
    </>
  );
};
export default useCallback;
