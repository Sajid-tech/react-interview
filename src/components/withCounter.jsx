import { useState } from "react";

const withCounter = (WrappedComponent) => {
  return function NewComponent() {
    const [counter, setCounter] = useState(0);
    return (
      <WrappedComponent
        hello="world"
        counter={counter}
        incrementCounter={() => setCounter(counter + 1)}
      />
    );
  };
};

export default withCounter;
