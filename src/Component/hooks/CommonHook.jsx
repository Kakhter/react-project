import React from 'react';
import "./CommonHook.css";


const CommonHook = () => {
    return (

        <>
            <h1>Common React Hooks</h1>
            <div className="code_css">
                <pre>
                    <code>

                        {`                              
            ---------------------------------------------------------------------------------------------------                               
                                            1. useContext
            Defination:
            useContext is a React Hook that allows you to access the value of a context directly in a functional 
            component. It provides a way to share data between components without having to pass props down through 
            every level of the component tree.

            It is used in conjunction with the createContext function, which creates a context object that can be 
            shared across components. The useContext hook takes the context object as an argument and returns the 
            current value of that context.  
            ---------------------------------------------------------------------------------------------------   
            Flow:

            createContext()
                │
                ▼
            UserContext
                │
                ▼
            <UserContext.Provider value="Khalid">
                │
                ▼
            ComponentB
                │
                ▼
            ComponentC
                │
                ▼
            ComponentD
                │
                ▼
            useContext(UserContext)
                │
                ▼
            "Khalid"

            ----------------------------------------------------------------                               
                                            User-Context.jsx
            ----------------------------------------------------------------                               

            import { createContext } from "react";
            const UserContext = createContext();
            export default UserContext;

            ----------------------------------------------------------------                               
                                            ComponentA.jsx
            ----------------------------------------------------------------                               

            import React, { createContext, useState } from "react";
            import "./Component.css";
            import ComponentB from "./ComponentB";
            import UserContext from "./User-Context";

            const ComponentA = () => {
            const [user, setUser] = useState(["Khalid", "Akhter"]);
            return (
                <>
                {/* Just pass to ComponentB and it will auto share all nested components. */}
                <h2>
                    <u className="u">useContext</u>
                </h2>
                <div className="box">
                    <h1>ComponentA</h1>
                    Hi {user}
                    <UserContext.Provider value={user}>
                    <ComponentB />
                    </UserContext.Provider>
                </div>
                </>
            );
            };
            export default ComponentA;

            ----------------------------------------------------------------
                                            ComponentB.jsx
            ----------------------------------------------------------------
            import React, { createContext } from "react";
            import "./Component.css";
            import ComponentC from "./ComponentC";
            const ComponentB = () => {
            return (
                <>
                <div className="box">
                    <h1>ComponentB</h1>
                    <ComponentC />
                </div>
                </>
            );
            };
            export default ComponentB;

            ----------------------------------------------------------------
                                            ComponentC.jsx
            ----------------------------------------------------------------
            import React, { useContext } from "react";
            import "./Component.css";
            import ComponentD from "./ComponentD";
            //import {UserContext} from "./ComponentA.jsx";
            import UserContext from "./User-Context";

            const ComponentC = () => {
            const user = useContext(UserContext);
            return (
                <>
                <div className="box">
                    <h1>ComponentC</h1>
                    Hi, Once again {user}
                    <ComponentD />
                </div>
                </>
            );
            };

            export default ComponentC;

            ----------------------------------------------------------------
                                            ComponentD.jsx
            ----------------------------------------------------------------
            import React, { useContext } from "react";
            import "./Component.css";
            //import UserContext from "./ComponentA.jsx";
            import UserContext from "./User-Context";

            const ComponentD = () => {
            const user = useContext(UserContext);

            return (
                <>
                <div className="box">
                    <h1>ComponentD</h1>
                    Bye :{user[0]} - {user[1]}
                </div>
                </>
            );
            };
            export default ComponentD;


            ---------------------------------------------------------------------------------------------------
                                            2. useMemo
            Defination:

            useMemo is a React Hook that allows you to optimize the performance of your functional components by 
            memoizing the result of a function. It takes two arguments: a function that returns a value and an 
            array of dependencies. The function will only be re-evaluated if one of the dependencies has changed 
            since the last render. This can help prevent unnecessary re-renders and improve the performance of your 
            application, especially when dealing with expensive calculations or complex data structures.

            ---------------------------------------------------------------------------------------------------
            import React, { useMemo, useState } from "react";
            import { UseMemoCode } from "./UseMemoCode.jsx";
            import "./UseMemo.css";

            const UseMemo = () => {
            const [num, setNum] = useState(0);
            const [othernum, setOthernum] = useState(0);

            let temp = 0;

            const expCal = () => {
                temp = 0;
                console.log("Inside function");
                for (let i = 0; i < num; i++) {
                temp = temp + i;
                }
                return temp + Number(num);
            };

            const memoExp = useMemo(() => {
                return expCal();
            }, [num]);

            return (
                <>
                        <h3> Expensive Calculation Value: {memoExp}</h3>

                        <input
                        className="textbox"
                        type="text"
                        value={num}
                        onChange={(e) => setNum(e.target.value)}
                        />

                        <input
                        className="textbox"
                        type="text"
                        value={othernum}
                        onChange={(e) => setOthernum(e.target.value)}
                        />
                        {othernum}
                </>
            );
            };

            export default UseMemo;


            ---------------------------------------------------------------------------------------------------
                                3. useCallback
            Defination:

            useCallback is a React Hook that returns a memoized version of a callback function. It is used to optimize 
            the performance of functional components by preventing unnecessary re-renders of child components that 
            depend on the callback function. The useCallback hook takes two arguments: the callback function and an 
            array of dependencies. 
            The callback function will only be re-created if one of the dependencies has changed since the last render. 
            This can help improve the performance of your application, especially when dealing with expensive 
            calculations or complex data structures.     

            ---------------------------------------------------------------------------------------------------

            ----------------------------------------
            Parent.jsx
            ----------------------------------------

            import React, { useState, useCallback } from "react";
            import Child from "./Child.jsx";
            import "./Parent.css";

            const Parent = () => {
            const [count, setCount] = useState(0);
            const [arr, setArr] = useState([""]);

            const increment = () => {
                setCount(count + 1);
            };

            const addArray = useCallback(
                (name) => {
                console.log("inside Parent function");
                return setArr((prev) => [...prev, name]);
                },
                [arr],
            );

            return (
                <>
                <h2>
                    <u className="u">useCallback</u>
                </h2>
                <h3>From Parent Component</h3>
                Count Value: {count}
                <br />
                <button onClick={increment}>Increment</button>
                
                <hr style={{ bottom: "0px" }} />
                <Child func={addArray} arr={arr} />
                </>
            );
            };

            export default Parent;

            ----------------------------------------
            Child.jsx
            ----------------------------------------

            import React, { useState, memo } from "react";

            const Child = ({ func, arr }) => {
            const [name, setName] = useState("");

            const handleFunc = () => {
                func(name);
                setName("");
            };

            return (
                <>
                <h3>From Child Component</h3>
                <h4>Display List: </h4>
                {arr.map((a, index) => {
                    return (
                    <p style={{ color: "blue" }} key={index}>
                        {a}
                    </p>
                    );
                })}
                Add Item:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                
                <button onClick={handleFunc}>Call Function To Add Item</button>
                </>
            );
            };

            export default memo(Child);

            ---------------------------------------------------------------------------------------------------
                                        4. UseReducer
            Defination:
            useReducer is a React Hook used for managing complex state. It uses a reducer function that accepts the 
            current state and an action, then returns a new state. State updates are performed by dispatching actions 
            rather than updating state directly.
            ---------------------------------------------------------------------------------------------------

            -----------------------------------
            EmployeeReducer.jsx
            -----------------------------------
            import React, { useState } from "react";

            export const initialState = {
            items: [],
            };

            const EmployeeReducer = (state, action) => {
            switch (action.type) {
                case (action.type = "ADD"): {
                return {
                    ...state.items,

                    items: [...state.items, action.payload],
                };
                }
                case (action.type = "DELETE"):
                return {
                    ...state.items,
                    items: state.items.filter((item, index) => index !== action.payload),
                };

                case (action.type = "UPDATE"):
                return {
                    ...state.items,
                    items: state.items.map((item, index) =>
                    index === action.payload.index ? action.payload.product : item,
                    ),
                };
            }
            };
            export default EmployeeReducer;

            -----------------------------------
            ReducerImplement.jsx
            -----------------------------------
            import React, { useReducer, useState } from "react";
            import EmployeeReducer, { initialState } from "./EmployeeReducer.jsx";
            import "./ReducerImplement.css";
            import Code from "./Code.jsx";

            const ReducerImplement = () => {
            const [state, dispatch] = useReducer(EmployeeReducer, initialState);

            const [name, setName] = useState("");
            const [price, setPrice] = useState(0);
            const [quantity, setQuantity] = useState(0);
            const [editIndex, setEditIndex] = useState(-1);

            const handleAdd = () => {
                const product = {
                name: name,
                price: Number(price),
                quantity: Number(quantity),
                };

                dispatch({
                type: "ADD",
                payload: product,
                });

                setName("");
                setPrice(0);
                setQuantity(0);
            };

            const handleUpdate = () => {
                const product = {
                name: name,
                price: Number(price),
                quantity: Number(quantity),
                };

                dispatch({
                type: "UPDATE",
                payload: {
                    index: editIndex,
                    product: product,
                },
                });

                setName("");
                setPrice(0);
                setQuantity(0);
                setEditIndex(-1);
            };

            return (
                <>
                <h2>
                    <u className="u">useReducer</u>
                </h2>
                <h2>Defination</h2>
                useReducer is a React Hook used for managing complex state. It uses a
                reducer function that accepts the current state and an action, then
                returns a new state. State updates are performed by dispatching actions
                rather than updating state directly.
                <br />
                <br />
                <input
                    type="text"
                    value={name}
                    placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    value={price}
                    placeholder="Enter Price"
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="number"
                    value={quantity}
                    placeholder="Enter Quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                />
                {editIndex === -1 ? (
                    <button onClick={handleAdd}>Add</button>
                ) : (
                    <button onClick={handleUpdate}>Update</button>
                )}
                <br />
                <br />
                <br />
                <table border="1">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {state.items.map((item, index) => (
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <button
                            onClick={() => dispatch({ type: "DELETE", payload: index })}
                            >
                            Delete{" "}
                            </button>
                            <button
                            onClick={() => {
                                setName(item.name);
                                setPrice(item.price);
                                setQuantity(item.quantity);
                                setEditIndex(index);
                            }}
                            >
                            Edit
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <h2>Code Details</h2>
                <div>
                    <pre>
                    <code>{Code}</code>
                    </pre>
                </div>
                </>
            );
            };

            export default ReducerImplement;
        `}
                    </code>
                </pre>
            </div>


        </>
    )
}

export default CommonHook;