import React, { useRef, useState } from "react";
// useRef

const Header = () => {
  const inputRef = useRef(null);
  const [show, setShow] = useState("");

  const handleSumbit = () => {
    console.log(inputRef.current.value);
    setShow(inputRef.current.value);
  };
  return (
    <>
      <div>
        <input ref={inputRef} type="text" placeholder="type here to show" />
        <button onClick={handleSumbit}>Focus</button>
        <h5>focus: {show}</h5>
      </div>
    </>
  );
};

export default Header;
