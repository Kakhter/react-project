import React, { useState, useCallback } from "react";
import UseCallbackComponent from "./UseCallbackComponent";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Hi this is first"]);

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `Item No: `]);
  }, [todos]);
  function increment() {
    setCount(count + 1);
  }
  return (
    <>
      <img src="./UseCallback.jpeg" width="95%" alt="Image" />
      <UseCallbackComponent todos={todos} addTodo={addTodo} />
      <h1>Use of useCallback Parent Component</h1>
      Count: {count}
      <br></br>
      <button onClick={increment}>Increment</button>
    </>
  );
};
export default UseCallback;
