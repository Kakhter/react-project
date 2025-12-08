import React, { memo } from "react";
const now = new Date();
const UseCallbackComponent = ({ todos, addTodo }) => {
  const time = now.getSeconds();
  const randomNumber = Math.floor(Math.random() * 100); 
  return (
    <>
      <h1>Child Component in separate file {time}</h1>
      {console.log({randomNumber})}
      {console.log("Child triggered")}
      {todos.map((todo, index) => {
        return <p key={index}>{todo + index}</p>;
      })}
      <button onClick={addTodo}>Add To Do</button>
      <br/>
    </>
  );
};
export default memo(UseCallbackComponent);
