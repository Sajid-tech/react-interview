import React from "react";
import withCounter from "./withCounter";

const HoverCounter = ({ incrementCounter, counter, hello }) => {
  //   const { incrementCounter, counter, hello } = props;
  return (
    <>
      <div>
        <p>Hover to increase the count {hello}</p>
        <div>
          <p>Count : {counter}</p>
          <button onMouseEnter={incrementCounter}>Hover</button>
        </div>
      </div>
    </>
  );
};

export default withCounter(HoverCounter);
