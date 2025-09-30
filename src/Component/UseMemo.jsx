import React, { useMemo, useState } from "react";
import UserMemoExpensive from "./UseMemoExpensive";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  //const calculation = expensiveCalculation(count);

  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />

      <div style={{ textAlign: "center" }}>
        <h1>
          Use of <span style={{ textDecoration: "underline" }}>useMemo</span>{" "}
          Example
        </h1>
        The current value of count is: {count}
        <br />
        Current value of expensive is {calculation}
        <br />
        <button className="btn btn-success" onClick={handleIncrement}>
          Increment
        </button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <hr />
      <UserMemoExpensive />
      <pre>
        <code>
          {`
Syntax:

//const calculation = expensiveCalculation(count);

  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);
  `}
        </code>
      </pre>
    </>
  );
};
export default UseMemo;
