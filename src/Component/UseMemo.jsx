import React, { useMemo, useState } from "react";
// import UserMemoExpensive from "./UseMemoExpensive";

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

<b>Code Example:</b>
<pre><code>
{`
  const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
  };

   const calculation = useMemo(() => {
  return expensiveCalculation(count);
  }, [count]);
 -----------------
  In-Html

  The current value of count is: {count}
  <br />
  Current value of expensive is {calculation}
`}
</code></pre>

      <div>
        <div style={{ textAlign: "center" }}>
          <img src="/UseMemo.jpg" alt="use memo" width="70%" />
        </div>
        <div style={{ display: "flex", marginLeft: "40px" }}>
          <div
            style={{
              textAlign: "center",
              width: "100%",
              backgroundColor: "green",
            }}
          >
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
              return <p key={index}>{todo} {index}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
          </div>

          <div
            style={{
              textAlign: "center",
              marginLeft: "20px",
              backgroundColor: "grey",
              width: "100%",
            }}
          >
            <h1>
              Use of{" "}
              <span style={{ textDecoration: "underline" }}>useMemo</span>{" "}
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
        </div>
      </div>

      {/* <UserMemoExpensive /> */}
    </>
  );
};
export default UseMemo;
