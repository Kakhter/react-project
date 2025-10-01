import React, { memo } from "react";

const UseCallbackComponent = ({ todos, addTodo }) => {
  return (
    <>
      <h1>Child Component</h1>
      {console.log("Child triggered")}
      {todos.map((todo, index) => {
        return <p key={index}>{todo + index}</p>;
      })}

      <button onClick={addTodo}>Add To Do</button>
    </>
  );
};
export default memo(UseCallbackComponent);
