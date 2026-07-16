import React from "react";

const Session3 = () => {
  return (
    <>
      <h2>Reducer Hook</h2>

      <img src="/UseReducerHook.jpg" alt="useReducer" width="100%"></img>
      <br />
      <img src="/UseReducer.jpg" alt="useReducer" width="100%"></img>
      <pre>
        <code>
          📌 What is a Reducer?
          A pure function: It takes the current state and an action as inputs, and returns the new state.<br />

          No side effects: Reducers don’t modify state directly; they return a new state object.<br />

          Action-driven: State changes are triggered by dispatching actions (objects with a type and optional payload).<br />
          <br />
          {`Reducer:
          Reducer manages the state in a centralized way.
          Component- What should happe
          Reducer: How it's done.

          ticketReducer.js
          Action:
          1. Add ticket
          2. Delete ticket
          3. Update ticket

          React Reducer
          1. Manages state in a centralized way
          2. Separating logic from user actions.
          3. Dispatch actions from components (handled by reducer)
          4. Information gets passed to the reducer in the payload

Code Example:

cartReducer.jsx ------------------------

export const initialCartState = {
  items: []
};

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Update quantity if already in cart
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      }
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case 'CLEAR_CART':
      return initialCartState;

    default:
      throw new Error(\`Unknown action: $\{action.type}\`);
  }
}

Cart.js------------------- 

import React, { useReducer } from 'react';
import { cartReducer, initialCartState } from './cartReducer';

function Cart() {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  // Example product to add
  const product = { id: 1, name: 'Apple iPhone 15', price: 999, quantity: 1 };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>

      <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
        Add iPhone 15
      </button>

      <button onClick={() => dispatch({ type: 'CLEAR_CART' })} style={{ marginLeft: '10px' }}>
        Clear Cart
      </button>

      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {state.items.map(item => (
            <li key={item.id}>
              {item.name} - $\{item.price} × {item.quantity}
              <button
                onClick={() =>
                  dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })
                }
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: 'UPDATE_QUANTITY',
                    payload: { id: item.id, quantity: item.quantity + 1 }
                  })
                }
                style={{ marginLeft: '5px' }}
              >
                +1
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;



Sorting

const sorted = [...users].sort((a, b) =>
  a.name.localeCompare(b.name)

Explaination:

Step-by-Step Explanation
1️⃣ ...users (Spread Operator)

users is an array (e.g., [{ id: 1, name: "Ali" }, ...]).

...users spreads its elements into a new array.

[...] creates a shallow copy of users.

✅ Why?
Because Array.prototype.sort() mutates the array it is called on.
In React, we should avoid mutating state directly — so we copy first.

2️⃣ .sort((a, b) => ...)

.sort() is a built-in JavaScript array method.

It compares two elements at a time (a and b) and decides their order.

If the function returns:

negative number → a comes before b

zero → order remains unchanged

positive number → b comes before a

3️⃣ a.name.localeCompare(b.name)

localeCompare() is a string method that compares a.name with b.name.

It returns:

negative number if a.name < b.name

zero if equal

positive number if a.name > b.name

It respects alphabetical order and works well with different languages/locales.



React Context

Create Context      App.js

                        -- Component A
                        -- Component B
                            --Component C
 User Context               --Component C



`}
        </code>
      </pre>
    </>
  );
};

export default Session3;
