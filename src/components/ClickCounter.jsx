import React from "react";
import withCounter from "./withCounter";

const ClickCounter = (props) => {
  const { incrementCounter, counter } = props;
  return (
    <>
      <div>
        <p>Click to increase the count</p>
        <div>
          <p>Count : {counter}</p>
          <button onClick={incrementCounter}>Click</button>
        </div>
      </div>
    </>
  );
};

export default withCounter(ClickCounter);
