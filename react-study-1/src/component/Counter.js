import React, { useState } from "react";

function Counter() {
  const [number, changeNum] = useState(0);
  const plus = () => {
    changeNum((prevNumber) => prevNumber + 1);
  };
  const minus = () => {
    changeNum((prevNumber) => prevNumber - 1);
  };
  return (
    <>
      <div>
        <h2>{number}</h2>
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
      </div>
    </>
  );
}

export default Counter;
