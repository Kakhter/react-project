
import React from "react";
import useFetch from "./fetch-url";

function FetchData() {
  const { data, loading, error } = useFetch("http://localhost:5199/api/Customer?customerName=Gold&amount=5000");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Get method using Custom Hook</h1>
      <ul>
        

<div>
    <h1>Customer Details</h1>
    <p>Name: {data?.name}</p>
    <p>Discount: {data?.discount}</p>
  </div>


      </ul>
    </div>
  );
}

export default FetchData;
