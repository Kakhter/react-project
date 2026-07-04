import React from "react";

const SomeCode = () => {

  const fruit = ["apple", "banana"];
  const otherFruit = ["lichi", "gabha", "pineapple"];
  const allFruits = [...fruit, otherFruit];
  return (
    <>

      <p>{allFruits.join(",")}</p>

      Dependency: <br />
      [] → run once (like componentDidMount).<br />

      [deps] → run when those deps change.<br />

      No array → run every render.<br />

      null or invalid → ❌ error (must always be an array).<br />


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
        <code>
          <br />
          {`
          Destructuring: 
          const person = {name: "Harry", age: 25 };
          const {name, age} = person;
          `}
        </code>
        <br />

        <br />
        <li>Spread Operator</li>
        <br />
        What the Spread Operator Does <br />
        Expands arrays/objects into individual elements.<br />
        Copies data immutably (important in React state management).<br />
        Passes props cleanly to child components.<br />

        Merges multiple arrays/objects without mutating originals.<br />
        <br />
        🔗 Examples in React<br />
        <pre> {`
        1. Copying 

            jsx:
            const numbersOne = [1, 2, 3];
            const numbersTwo = [4, 5, 6];
            const combined = [...numbersOne, ...numbersTwo];
            // [1, 2, 3, 4, 5, 6]

        2. Copying/Merging Objects

            jsx:
            const car = {brand: 'Ford', color: 'red' };
            const carMore = {year: 2025, color: 'blue' };
            const myCar = {...car, ...carMore };

            // {brand: 'Ford', year: 2025, color: 'blue' }
            👉 Notice how color was overwritten by the last object.
        
        3. Passing Props to Components

          jsx:
          const person = {name: "Khalid", age: 35 };
          <Profile {...person} title="Developer" />

          Equivalent to:

          jsx:
          <Profile name="Khalid" age={35} title="Developer" />

        4. Updating State Immutably

          jsx:
            this.setState(prevState => ({
            ...prevState,
            user: {
            ...prevState.user, name: "New Name" }

            }));
        `}
        </pre>
        👉 Ensures React sees a new object and re-renders correctly.
        <br />
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
        <br />
        <li>Path concaneting</li>
        <code>{`<img src={./image/$/{variable}} `}</code>
        -- / is extra after $.

        <br />
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
