import React from "react";

const SomeCode = () => {
   
        const fruit =["apple","banana"];
        const otherFruit=["lichi","gabha","pineapple"];
        const allFruits = [...fruit, otherFruit];
  return (
    <>
      
        <p>{allFruits.join(",")}</p>
      <h3>Other Command</h3>
      <ol>
        <li>Rest Operator</li>
        function test(v1,v2,...v)
        <br />
        {"{"}
        <br />
        console.log(v1);
        <br />
        console.log(v2);
        <br />
        console.log(v);
        <br />
        {"}"}
        <br />
        Call the function <br />
        test("x","y","z","1","2","3")
        <br />
        Result:
        <br />
        x<br />
        y<br />
        [z,1,2,3]
        <br />
        <li>Spread Operator</li>
        <br />
        const fruit =["apple","banana"];
        <br />
        const otherFruit=["lichi","gabha","pineapple"];
        <br />
        const allFruits = [...fruit, otherFruit];
        <br />
        The above syntax merging two array and '...' triple dot symbol called
        spread operator.
        <br />
        or
        <br />
        const newState = [ ...fruit,"Mosammi"]
       
        <br />
        State is mutable.
        <br />
        <li>map function</li>
        <pre>
          <code>
            {`movies.map(movie => (
<div key={movie.id}>
<p>Movie Title: {movie.title}</p>
</div>
))`}
          </code>
        </pre>
        <li>Path concaneting</li>
        <code>{`<img src={./image/$/{variable}} `}</code>
        -- / is extra after $.
        

        <br />
        <li>input button code</li>
        <pre>
          <code>
            {`
const handleSearchChange=(e)=>{
SetSearchTerm(e.target.value)
};

<input 
type="text"
className="search-input"
placeholder="Search Movies"
value={searchTerm}
onChange={handleSearchChange}
/>
`}
          </code>
        </pre>
        <li>
          <b>filter</b>
        </li>
        <pre style={{ background: "#f4f4f4", padding: "0px" }}>
          <code>
            {`
const filteredMovies = movies.filter(movie=>
movie.title.toLowerCase().include(searchTerm.toLowerCase()))

Here 'searchTerm' we are updating from input control property value i.e. value={searchTerm}

filteredMovies.map(movie => (
<div key={movie.id}>
<p>Movie Title: {movie.title}</p>
</div>
));
`}
          </code>
        </pre>
        <pre>
          <code>
            {`
Here is testing

f
d
d
d
d
`}
          </code>
        </pre>

      </ol>
    </>
  );
};

export default SomeCode;
