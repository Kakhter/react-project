import React, { useMemo, useState } from "react";

const UserMemoExpensive = () => {
  const now = new Date();
  //const res = expensiveCalculation1();

  const res = useMemo(() => {
    return expensiveCalculation1();
  }, []);

  function expensiveCalculation1() {
    let res = 0;
    for (let i = 0; i <= 100000; i++) {
      res = i;
      console.log(i);
    }
    return res;
  }
  return (
    <>
     <h1>Use Memo Expensive::</h1>
      <div style={{ border: "1px solid black" }}>
        <h3>Expensive Calculation Performed.</h3>
        Time: {now.getTime()}
        <br />
        Value: {res}
      </div>
    </>
  );
};

export default UserMemoExpensive;
