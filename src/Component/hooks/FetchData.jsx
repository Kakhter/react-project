

import React, { Suspense, lazy } from "react";

//const useFetch = lazy(()=> import("./fetch-url"));

import useFetch  from "./fetch-url";

function FetchData() {

 
  const { data, loading, error } = useFetch("http://localhost:5281/api/Customer/GetAllEmployee");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Get method using Custom Hook</h1>
      <ul>
        

<div>
  
    <h1>Customer Details</h1>
    
    {
      data.map(cust => (
        <div key={cust.id}>
            <b>Customer ID: {cust.id}</b>
            <p>Name: {cust.name}</p>
            <p>Description: {cust.description}</p>
            <p>Salary: {cust.salary}</p>
            {<hr style={{ width: "25%",  marginLeft: 0 }} />}
        </div>
       
        ))
    }
 

 
    {/* <p>Name: {data?.name}</p>
    <p>Discount: {data?.discount}</p> */}
  </div>


      </ul>
    </div>
  );
}

export default FetchData;
