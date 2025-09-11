import { useState } from "react";

export default function UseStateEx() {
  const [counter, setCount] = useState(0);
  function add() {
    setCount((x) => x + 1);
  }
  function del() {
    setCount((x) => x - 1);
  }
  return (
    <>
      <h3>Counter: {counter}</h3>
      <br />
      <button onClick={add}>Increase</button>
      <button onClick={del}>Decrease</button>
    </>
  );
}
