import React, { useEffect, useState } from "react";

const Footer = () => {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }
  // mounting pashe
  //   useEffect(() => {
  //     console.log("Mounting phase");
  //   }, []);

  //   updating pashe
  //   useEffect(() => {
  //     console.log("updatingf phase");
  //   }, [count]);

  // unmounting pashe   -- component when it get destroyed
  useEffect(() => {
    // clean function in react -- use in api call
    return () => {
      console.log("unmounting phase");
    };
  }, [count]);
  return (
    <>
      <div>
        <h3>React Life cycle </h3>
        <h4>Count is : {count}</h4>
        <button onClick={incrementCount}>click me</button>
      </div>
    </>
  );
};

export default Footer;
