import React from "react";
import withCounter from "./withCounter";

const HoverCounter = ({
  incrementCounter,
  counter,
  hello,
  decrementCounter,
  disabledCounter,
}) => {
  //   const { incrementCounter, counter, hello } = props;
  return (
    <>
      <div>
        <p>Hover to increase the count {hello}</p>
        <div>
          <p>Count : {counter}</p>
          <button onMouseOver={incrementCounter}>Hover to inc</button>
          <button onMouseEnter={decrementCounter} disabled={disabledCounter}>
            Hover to dec
          </button>
        </div>
      </div>
    </>
  );
};

export default withCounter(HoverCounter);
