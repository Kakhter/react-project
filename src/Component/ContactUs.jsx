import React from "react";

const ContactUs = () => {
  //const dynamicHTML = "<h2 style='color:blue'>Hello from dynamic HTML!</h2>";
  return (
    <>
      <div className="box"> Contact Us</div>
      {/* <div dangerouslySetInnerHTML={{ __html: dynamicHTML }} /> */}


      <pre>
        <code>
          {`
--------------------------------------------------------------------------------------------------------------------
            1. How to display dynamic html data in react ?
            Ans:
            const dynamicHTML = "<h2 style='color:blue'>Hello from dynamic HTML!</h2>";
            <div dangerouslySetInnerHTML={{ __html: dynamicHTML }} />
--------------------------------------------------------------------------------------------------------------------

            2. How do you send data from parent component to child component in react ?
            Ans:
            In React, the most common way to send data from a parent component to a child component is by using props.
            <ChildComponent text={message} userInfo={user} />
--------------------------------------------------------------------------------------------------------------------

            3. How to call parent component method from child component in react ?
            Ans:
            Parent Component:
            
            import React from "react";
            import Child from "./Child";

            function Parent() {
              const handleMessage = (msg) => {
                alert('Message from Child: $/{msg}');   -- use carret, and remove /
              };

              return (
                <div>
                  <h1>Parent Component</h1>
                  <Child sendMessage={handleMessage} />
                </div>
              );
            }

            export default Parent;

          CHILE COMPONENT:

            import React from "react";

            function Child({ sendMessage }) {
              return (
                <div>
                  <h2>Child Component</h2>
                  <button onClick={() => sendMessage("Hello Parent!")}>
                    Call Parent Method
                  </button>
                </div>
              );
            }

            export default Child;
--------------------------------------------------------------------------------------------------------------------
            
            4. How do you access the dom element ?
            Ans:
            function App() {
              const inputRef = useRef(null);

              const handleFocus = () => {
                inputRef.current.focus(); // Access DOM element and focus it
              };

              return (
                <div>
                  <input ref={inputRef} type="text" placeholder="Type here" />
                  <button onClick={handleFocus}>Focus Input</button>
                </div>
              );
            }

            export default App;
--------------------------------------------------------------------------------------------------------------------

            5. How to bind array/array of objects to dropdown in react ?
            Ans:
            function App() {
              const users = [
                { id: 1, name: "Khalid" },
                { id: 2, name: "Sateesh" },
                { id: 3, name: "Doron" }
              ];

              return (
                <select>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              );
            }

            export default App;
--------------------------------------------------------------------------------------------------------------------

            6. Create a lazy loaded component in react ?
            Ans: 

            import React from "react";
            export default function MyComponent() {
              return <h2>This is a lazy-loaded component!</h2>;
            }
            
            Main Component loading lazy component.
            
            import React, { Suspense, lazy } from "react";

            const MyComponent = lazy(() => import("./MyComponent"));

            function App() {
              return (
                <div>
                  <h1>Main Component</h1>
                  <Suspense fallback={<div>Loading...</div>}>
                    <MyComponent />
                  </Suspense>
                </div>
              );
            }

            export default App;
--------------------------------------------------------------------------------------------------------------------

            7. How to display data entered by the user in another textbox ?
            
            import React, { useState } from "react";

            function App() {
              const [text, setText] = useState("");

              return (
                <div>
                  <h2>Enter text:</h2>
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type something"
                  />

                  <h2>Display in another textbox:</h2>
                  <input type="text" value={text} readOnly />
                </div>
              );
            }

            export default App;
--------------------------------------------------------------------------------------------------------------------

            8. How to loop array/array of objects in react ?
            
              function App() {
                const fruits = ["Apple", "Banana", "Orange"];

                return (
                  <ul>
                    {fruits.map((fruit, index) => (
                      <li key={index}>{fruit}</li>
                    ))}
                  </ul>
                );
              }

              export default App;
--------------------------------------------------------------------------------------------------------------------

            9. How to conditionally render an element or text in react ?
            
            function App() {
              const showMessage = true;

              return (
                <div>
                  {showMessage && <p>This message is shown because condition is true.</p>}
                </div>
              );
            }
--------------------------------------------------------------------------------------------------------------------

            10. How to change styles based on condition in react ?

            function App() {
              const isActive = false;

              return (
                <div className={isActive ? "active" : "inactive"}>
                  {isActive ? "Active" : "Inactive"}
                </div>
              );
            }
--------------------------------------------------------------------------------------------------------------------

            11. How to show and hide data based on condition in react ?
            Ans:
            
            function App() {
              const isLoggedIn = true;

              return (
                <div>
                  {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
                </div>
              );
            }
--------------------------------------------------------------------------------------------------------------------
            12.Bind array/array of objects to radio button in react ?
            
            import React, { useState } from "react";

            function App() {
              const options = ["Apple", "Banana", "Orange"];
              const [selectedValue, setSelectedValue] = useState("");

              return (
                <div>
                  <h3>Select a Fruit:</h3>
                  {options.map((item, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        value={item}
                        checked={selectedValue === item}
                        onChange={(e) => setSelectedValue(e.target.value)}
                      />
                      {item}
                    </label>
                  ))}
                  <p>Selected: {selectedValue}</p>
                </div>
              );
            }


--------------------------------------------------------------------------------------------------------------------            
            13.Display radio button data selected by user in another textbox ?
    
            import React, { useState } from "react";

            function App() {
              const options = ["Apple", "Banana", "Orange"];
              const [selectedValue, setSelectedValue] = useState("");

              return (
                <div>
                  <h3>Select a Fruit:</h3>
                  {options.map((item, index) => (
                    <label key={index} style={{ display: "block" }}>
                      <input
                        type="radio"
                        value={item}
                        checked={selectedValue === item}
                        onChange={(e) => setSelectedValue(e.target.value)}
                      />
                      {item}
                    </label>
                  ))}

                  <h3>Selected Fruit:</h3>
                  <input
                    type="text"
                    value={selectedValue}
                    readOnly
                    style={{ width: "200px" }}
                  />
                </div>
              );
            }

            export default App;

--------------------------------------------------------------------------------------------------------------------            
            14. How to call a method when component is rendered for the first time in react ?
            
            import React, { useEffect } from "react";

            function App() {
              useEffect(() => {
                // This runs only once when the component mounts
                console.log("Component rendered for the first time!");
                fetchData(); // Example method call
              }, []); // Empty array means run only on initial render

              const fetchData = () => {
                console.log("Fetching data...");
                // Your API call or logic here
              };

              return <h1>Hello React!</h1>;
            }

            export default App;

--------------------------------------------------------------------------------------------------------------------

            15.Display keys and values of objects in a loop in react?
            
            import React from "react";

            function App() {
              const users = [
                { name: "Alice", age: 25, email: "alice@example.com" },
                { name: "Bob", age: 30, email: "bob@example.com" }
              ];

              return (
                <div>
                  <h3>User List:</h3>
                  {users.map((user, index) => (
                    <div key={index}>
                      <p>Name: {user.name}</p>
                      <p>Age: {user.age}</p>
                      <p>Email: {user.email}</p>
                      <hr />
                    </div>
                  ))}
                </div>
              );
            }

            export default App;


--------------------------------------------------------------------------------------------------------------------
            16. How to rerender a component on value change in react ?
            Ans:                       
            import React, { useState } from "react";

            function App() {
              const [count, setCount] = useState(0);

              const handleIncrement = () => {
                setCount(count + 1); // Changing state triggers re-render
              };

              return (
                <div>
                  <h2>Count: {count}</h2>
                  <button onClick={handleIncrement}>Increment</button>
                </div>
              );
            }

            export default App;


--------------------------------------------------------------------------------------------------------------------
            17. How to call a method on every rerender of a component ?
            
            import React, { useState, useEffect } from "react";

            function App() {
              const [count, setCount] = useState(0);

              useEffect(() => {
                console.log("Component rendered or updated!");
                myMethod();
              }); // No dependency array → runs after every render

              const myMethod = () => {
                console.log("Method called on every render");
              };

              return (
                <div>
                  <h2>Count: {count}</h2>
                  <button onClick={() => setCount(count + 1)}>Increment</button>
                </div>
              );
            }

            export default App;


--------------------------------------------------------------------------------------------------------------------
            18. How to add data into useState array in functional component in react ?
            
            import React, { useState } from "react";

            function App() {
              const [fruits, setFruits] = useState(["Apple", "Banana"]);

              const addFruit = () => {
                setFruits([...fruits, "Orange"]); // Add new item
              };

              return (
                <div>
                  <h3>Fruits:</h3>
                  <ul>
                    {fruits.map((fruit, index) => (
                      <li key={index}>{fruit}</li>
                    ))}
                  </ul>
                  <button onClick={addFruit}>Add Orange</button>
                </div>
              );
            }

            export default App;

--------------------------------------------------------------------------------------------------------------------
            19. Create a search textbox filter ?
            
            import React, { useState } from "react";

            function App() {
              const [searchTerm, setSearchTerm] = useState("");
              const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

              // Filter fruits based on search term
              const filteredFruits = fruits.filter((fruit) =>
                fruit.toLowerCase().includes(searchTerm.toLowerCase())
              );

              return (
                <div>
                  <h3>Search Fruits:</h3>
                  <input
                    type="text"
                    placeholder="Type to search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />

                  <ul>
                    {filteredFruits.map((fruit, index) => (
                      <li key={index}>{fruit}</li>
                    ))}
                  </ul>
                </div>
              );
            }

            export default App;

--------------------------------------------------------------------------------------------------------------------
            20.Create a counter component using useState ?
            
            import React, { useState } from "react";

            function Counter() {
              const [count, setCount] = useState(0); // Initialize state

              const increment = () => setCount(count + 1);
              const decrement = () => setCount(count - 1);
              const reset = () => setCount(0);

              return (
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                  <h2>Counter: {count}</h2>
                  <button onClick={increment}>Increment</button>
                  <button onClick={decrement} style={{ marginLeft: "10px" }}>
                    Decrement
                  </button>
                  <button onClick={reset} style={{ marginLeft: "10px" }}>
                    Reset
                  </button>
                </div>
              );
            }

            export default Counter;

--------------------------------------------------------------------------------------------------------------------            
            21.Create a counter component using useReducer ?
            
            import React, { useReducer } from "react";

            // Define initial state
            const initialState = { count: 0 };

            // Define reducer function
            function reducer(state, action) {
              switch (action.type) {
                case "increment":
                  return { count: state.count + 1 };
                case "decrement":
                  return { count: state.count - 1 };
                case "reset":
                  return { count: 0 };
                default:
                  return state;
              }
            }

            function Counter() {
              const [state, dispatch] = useReducer(reducer, initialState);

              return (
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                  <h2>Count: {state.count}</h2>
                  <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
                  <button onClick={() => dispatch({ type: "decrement" })} style={{ marginLeft: "10px" }}>
                    Decrement
                  </button>
                  <button onClick={() => dispatch({ type: "reset" })} style={{ marginLeft: "10px" }}>
                    Reset
                  </button>
                </div>
              );
            }

            export default Counter;

--------------------------------------------------------------------------------------------------------------------                
            22.Change focus/enable/disable textbox in child component based on parent component button click ?
             
            import React, { useState, useRef } from "react";

            // Child Component
            function Child({ isDisabled, shouldFocus }) {
              const inputRef = useRef(null);

              // Focus the textbox when shouldFocus changes
              React.useEffect(() => {
                if (shouldFocus && inputRef.current) {
                  inputRef.current.focus();
                }
              }, [shouldFocus]);

              return (
                <input
                  type="text"
                  ref={inputRef}
                  disabled={isDisabled}
                  placeholder="Enter text"
                />
              );
            }

            // Parent Component
            function Parent() {
              const [isDisabled, setIsDisabled] = useState(false);
              const [shouldFocus, setShouldFocus] = useState(false);

              return (
                <div>
                  <Child isDisabled={isDisabled} shouldFocus={shouldFocus} />

                  <div style={{ marginTop: "10px" }}>
                    <button onClick={() => setIsDisabled(false)}>Enable</button>
                    <button onClick={() => setIsDisabled(true)} style={{ marginLeft: "10px" }}>
                      Disable
                    </button>
                    <button onClick={() => setShouldFocus(true)} style={{ marginLeft: "10px" }}>
                      Focus
                    </button>
                  </div>
                </div>
              );
            }
            export default Parent;

--------------------------------------------------------------------------------------------------------------------            
            23. How to perform debouncing ?
            
            import React, { useState, useEffect } from "react";

            function App() {
              const [searchTerm, setSearchTerm] = useState("");
              const [debouncedValue, setDebouncedValue] = useState("");

              useEffect(() => {
                const handler = setTimeout(() => {
                  setDebouncedValue(searchTerm); // Update after delay
                }, 500); // 500ms delay

                return () => {
                  clearTimeout(handler); // Cleanup previous timeout
                };
              }, [searchTerm]);

              return (
                <div>
                  <h3>Search:</h3>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Type to search..."
                  />
                  <p>Debounced Value: {debouncedValue}</p>
                </div>
              );
            }

            export default App;


--------------------------------------------------------------------------------------------------------------------            
            24.Create a component to fetch data from api ?
          
            import React, { useState, useEffect } from "react";

            function DataFetcher() {
              const [data, setData] = useState([]);
              const [loading, setLoading] = useState(true);
              const [error, setError] = useState(null);

              useEffect(() => {
                // Fetch data when component mounts
                fetch("https://jsonplaceholder.typicode.com/posts") // Example API
                  .then((response) => {
                    if (!response.ok) {
                      throw new Error("Network response was not ok");
                    }
                    return response.json();
                  })
                  .then((data) => {
                    setData(data);
                    setLoading(false);
                  })
                  .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                  });
              }, []); // Empty dependency array → runs only once

              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error: {error}</p>;

              return (
                <div>
                  <h3>Fetched Data:</h3>
                  <ul>
                    {data.slice(0, 10).map((item) => (
                      <li key={item.id}>{item.title}</li>
                    ))}
                  </ul>
                </div>
              );
            }

            export default DataFetcher;

--------------------------------------------------------------------------------------------------------------------            
            25.Force a component to rerender with out using useState in react ?
            Example 1:
            If you have a function that needs to run on every render, you can call it inside 
            useEffect without dependencies:

            useEffect(() => {
              console.log("Runs on every render");
            });

            Example 2: using useReducer
            import React, { useReducer } from "react";

            function ForceRenderComponent() {
              const [, forceUpdate] = useReducer(x => x + 1, 0);

              return (
                <div>
                  <h2>Force Re-render Example</h2>
                  <button onClick={forceUpdate}>Force Re-render</button>
                </div>
              );
            }

            export default ForceRenderComponent;


--------------------------------------------------------------------------------------------------------------------            
            26. How to call a method immediately after state is updated or 
                after component is rerendered ?

                
                import React, { useState, useEffect } from "react";

                function App() {
                  const [count, setCount] = useState(0);

                  // This runs after every render when "count" changes
                  useEffect(() => {
                    console.log("State updated! New count:", count);
                    myMethod();
                  }, [count]); // Dependency array ensures it runs after count changes

                  const myMethod = () => {
                    console.log("Method called after state update");
                  };

                  return (
                    <div>
                      <h2>Count: {count}</h2>
                      <button onClick={() => setCount(count + 1)}>Increment</button>
                    </div>
                  );
                }

                export default App;

--------------------------------------------------------------------------------------------------------------------            
            27. How to display number of characters remaining functionality for textarea using react useRef?

            import React, { useState, useRef } from "react";

            function TextAreaWithCounter() {
              const maxChars = 200; // Maximum allowed characters
              const [text, setText] = useState("");
              const textAreaRef = useRef(null);

              const handleChange = () => {
                setText(textAreaRef.current.value);
              };

              const remainingChars = maxChars - text.length;

              return (
                <div style={{ width: "300px" }}>
                  <textarea
                    ref={textAreaRef}
                    value={text}
                    onChange={handleChange}
                    maxLength={maxChars}
                    rows="5"
                    cols="30"
                          placeholder="Type something..."
                  />
                  <p>{remainingChars} characters remaining</p>
                </div>
              );
            }


--------------------------------------------------------------------------------------------------------------------            
            28.Given two dropdowns, select 2nd dropdown options based on value selected in one dropdown ?
            (Load states based on country selected)
            
              import React, { useState } from "react";

              const countryStateData = {
                India: ["Karnataka", "Maharashtra", "Tamil Nadu"],
                USA: ["California", "Texas", "New York"],
                Canada: ["Ontario", "Quebec", "British Columbia"],
              };

              function CountryStateDropdown() {
                const [selectedCountry, setSelectedCountry] = useState("");
                const [states, setStates] = useState([]);

                const handleCountryChange = (e) => {
                  const country = e.target.value;
                  setSelectedCountry(country);
                  setStates(countryStateData[country] || []);
                };

                return (
                  <div>
                    <h3>Select Country and State</h3>
                    <select onChange={handleCountryChange} value={selectedCountry}>
                      <option value="">-- Select Country --</option>
                      {Object.keys(countryStateData).map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>

                    <select disabled={!selectedCountry}>
                      <option value="">-- Select State --</option>
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                            ))}
                    </select>
                  </div>
                );
              }

--------------------------------------------------------------------------------------------------------------------            
            29.Perform type checking using prop-types ?
            
              import React from "react";
              import PropTypes from "prop-types";

              function CountryStateDropdown({ countries, onCountryChange }) {
                return (
                  <select onChange={(e) => onCountryChange(e.target.value)}>
                    <option value="">-- Select Country --</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                );
              }

              // ✅ Define prop types
              CountryStateDropdown.propTypes = {
                countries: PropTypes.arrayOf(PropTypes.string).isRequired,
                onCountryChange: PropTypes.func.isRequired,
              };

--------------------------------------------------------------------------------------------------------------------            
            30.Share data between components using context api ?
            
            Check our existing codebase.
            http://localhost:5050/app/session4

--------------------------------------------------------------------------------------------------------------------            
            31.Give an example of optimization using useMemo ?
               Check our existing codebase.
               http://localhost:5050/app/usememo
--------------------------------------------------------------------------------------------------------------------            
            32.Give an example of optimization using usecallbacks in react ?
               Check our existing codebase.
               http://localhost:5050/app/usecallback
--------------------------------------------------------------------------------------------------------------------            
            33.Create an error boundary component in react ?

            1. Create ErrorBoundary Component
            -------------------------------
            import React from "react";

            class ErrorBoundary extends React.Component {
              constructor(props) {
                super(props);
                this.state = { hasError: false };
              }

              static getDerivedStateFromError(error) {
                // Update state so next render shows fallback UI
                return { hasError: true };
              }

              componentDidCatch(error, info) {
                // Log error details (optional)
                console.error("Error caught by ErrorBoundary:", error, info);
              }

              render() {
                if (this.state.hasError) {
                  return <h2>Something went wrong.</h2>;
                }
                return this.props.children;
              }
            }

            2. Use ErrorBoundary in App
            ---------------------------

            import React from "react";
            import ErrorBoundary from "./ErrorBoundary";
            import BuggyComponent from "./BuggyComponent";

            function App() {
              return (
                <div>
                  <h1>Error Boundary Example</h1>
                  <ErrorBoundary>
                    <BuggyComponent />
                  </ErrorBoundary>
                </div>
              );
            }

            export default App;

          3. Example Buggy Component
            ------------------------
            
            import React from "react";

            function BuggyComponent() {
              throw new Error("I crashed!");
              return <div>This will never render</div>;
            }

            export default BuggyComponent;

            Anther Example:
            --------------
            npm install react-error-boundary

            
            import React from "react";
            import { ErrorBoundary } from "react-error-boundary";

            function FallbackComponent({ error, resetErrorBoundary }) {
              return (
                <div>
                  <h2>Something went wrong!</h2>
                  <p>{error.message}</p>
                  <button onClick={resetErrorBoundary}>Try Again</button>
                  </div>
              );
            }

            function BuggyComponent() {
              throw new Error("I crashed!");
            }

            function App() {
              return (
                <ErrorBoundary
                  FallbackComponent={FallbackComponent}
                  onReset={() => {
                    // Reset logic if needed
                  }}
                >
                  <BuggyComponent />
                </ErrorBoundary>
              );
            }



--------------------------------------------------------------------------------------------------------------------            
            34. How to display dropdown value selected by user in another textbox ?

            import React, { useState } from "react";

            function DropdownTextboxExample() {
              const [selectedValue, setSelectedValue] = useState("");

              const handleChange = (e) => {
                setSelectedValue(e.target.value);
              };

              return (
                <div>
                  <h3>Select an option:</h3>
                  <select onChange={handleChange} value={selectedValue}>
                    <option value="">-- Select --</option>
                    <option value="Apple">Apple</option>
                    <option value="Banana">Banana</option>
                    <option value="Orange">Orange</option>
                  </select>

                  <h3>Selected Value:</h3>
                  <input type="text" value={selectedValue} readOnly />
                </div>
              );
            }


--------------------------------------------------------------------------------------------------------------------            
            35.Create a pure component ?
            In React, a Pure Component is one that only re-renders when its props or state change, 
            preventing unnecessary renders.
            For functional components, you can achieve this using React.memo().

            
            import React, { useState } from "react";

            // Pure Component using React.memo
            const PureChild = React.memo(({ value }) => {
              console.log("Child re-rendered");
              return <h3>Value: {value}</h3>;
            });

            function App() {
              const [count, setCount] = useState(0);
              const [text, setText] = useState("");

              return (
                  <div>
                  <h2>Count: {count}</h2>
                  <button onClick={() => setCount(count + 1)}>Increment</button>
                  <br />
                  <input
                    type="text"
                    placeholder="Type something"
                    onChange={(e) => setText(e.target.value)}
                  />
                  <PureChild value={text} />
                </div>
              );
            }



--------------------------------------------------------------------------------------------------------------------            
            36.Create a controlled and uncontrolled component in react ?
            In React, controlled components are those where the form element’s value is managed by React state, 
            while uncontrolled components rely on the DOM to manage their own state (accessed via ref).
            
            Controlled Component Example
            ----------------------------
            import React, { useState } from "react";

            function ControlledComponent() {
              const [inputValue, setInputValue] = useState("");

              return (
                <div>
                      <h3>Controlled Component</h3>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <p>Value: {inputValue}</p>
                </div>
              );
            }

            Uncontrolled Component Example
            ------------------------------
            
            import React, { useRef } from "react";

            function UncontrolledComponent() {
              const inputRef = useRef();

              const handleShowValue = () => {
                alert("Value: $/{inputRef.current.value}"); // double quotes to be replaced with backtick. remove /
              };

              return (
                <div>
                  <h3>Uncontrolled Component</h3>
                  <input type="text" ref={inputRef} />
                  <button onClick={handleShowValue}>Show Value</button>
                </div>
              );
            }

--------------------------------------------------------------------------------------------------------------------            
            37.Create a custom hook using ?
            Check our existing codebase.
            http://localhost:5050/app/fetchdata

--------------------------------------------------------------------------------------------------------------------            
            38.Create a popup using portal ?

            Step 1: Add a modal root in public/index.html
            
            <body>
              <div id="root"></div>
              <div id="modal-root"></div> <!-- Portal target -->
            </body>

            Step 2: Create Modal.js
            
            import React from "react";
            import ReactDOM from "react-dom";

            const Modal = ({ children, onClose }) => {
              return ReactDOM.createPortal(
                <div style={styles.overlay}>
                  <div style={styles.modal}>
                    {children}
                    <button onClick={onClose}>Close</button>
                  </div>
                </div>,
                document.getElementById("modal-root")
              );
            };

            const styles = {
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                borderRadius: "8px",
                minWidth: "300px",
                textAlign: "center",
              },
            };

            Step 3: Complete App.js

              import React, { useState } from "react";
              import Modal from "./Modal";

              function App() {
                const [showModal, setShowModal] = useState(false);

                return (
                  <div>
                    <h1>React Portal Popup Example</h1>
                    <button onClick={() => setShowModal(true)}>Open Popup</button>

                        >This is a popup!</h2>
                        <p>You can put any content here.</p>
                      </Modal>
                    )}
                  </div>
                );
              }



--------------------------------------------------------------------------------------------------------------------            
            39.Which lifecycle hooks in class component are replaced with useEffect in functional components ? 
            Summary Table
            Class Component Method	      Functional Equivalent with useEffect
            componentDidMount	            useEffect(() => {...}, [])
            componentDidUpdate	          useEffect(() => {...}, [deps])
            componentWillUnmount	        Cleanup function inside useEffect

--------------------------------------------------------------------------------------------------------------------            
            40.Create a pagination component ?

            
            import React from "react";

            function Pagination({ totalPages, currentPage, onPageChange }) {
              const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

              return (
                <div style={{ marginTop: "20px" }}>
                  {pages.map((page) => (
                    <button
                      key={page}
                      onClick={() => onPageChange(page)}
                      style={{
                        margin: "5px",
                                  padding: "8px",
                        backgroundColor: page === currentPage ? "#007bff" : "#f0f0f0",
                        color: page === currentPage ? "#fff" : "#000",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                      }}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              );
            }


--------------------------------------------------------------------------------------------------------------------            
`}
        </code>
      </pre>
      <h1>37. Custom Hook</h1>
      <br />
      <img src="/CustomHook.jpg" width="90%"></img>
    </>
  );
};

export default ContactUs;
