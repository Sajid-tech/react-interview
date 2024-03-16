import React from "react";
import withCounter from "./withCounter";

const ClickCounter = (props) => {
  const { incrementCounter, counter, decrementCounter, disabledCounter } =
    props;
  return (
    <>
      <div>
        <p>Click to increase the count</p>
        <div>
          <p>Count : {counter}</p>
          <button onClick={incrementCounter}>Click to inc</button>
          <button onClick={decrementCounter} disabled={disabledCounter}>
            Click to dec
          </button>
        </div>
      </div>
    </>
  );
};

export default withCounter(ClickCounter);
