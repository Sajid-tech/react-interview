/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
import React, { useReducer, useState } from "react";
// use reducer

const reducer = (state, action) => {
  switch (action.payload) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const Hero = () => {
  // const [count, setCount] = useState(0);
  // const [hide, setHide] = useState(false);

  const [state, dispatch] = useReducer(reducer, { count: 0, hide: false });

  return (
    <>
      <div>
        <h1>count :{state.count}</h1>
        <button
          onClick={() => {
            dispatch({ payload: "INCREMENT" });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ payload: "DECREMENT" });
          }}
        >
          Decrement
        </button>
        <button>Hide</button>
      </div>
    </>
  );
};

export default Hero;
