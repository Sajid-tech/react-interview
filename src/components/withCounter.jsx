import { useState } from "react";

const withCounter = (WrappedComponent) => {
  return function NewComponent() {
    const [counter, setCounter] = useState(0);
    return (
      <WrappedComponent
        hello="world"
        counter={counter}
        incrementCounter={() => setCounter(counter + 1)}
        decrementCounter={() => setCounter(counter - 1)}
        disabledCounter={counter <= 0}
      />
    );
  };
};

export default withCounter;
