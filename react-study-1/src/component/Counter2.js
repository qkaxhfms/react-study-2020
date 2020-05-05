import React, { useState } from "react";

function Counter2() {
  const [number, setNumber] = useState(0);
  const plus = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const minus = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };
  return (
    <>
      <div id="Counter2">
        <h2>{number}</h2>
        <button type="button" onClick={plus}></button>
        <button type="button" onClick={minus}></button>
      </div>
    </>
  );
}

export default Counter2;
