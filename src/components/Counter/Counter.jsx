import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  function increment() {
    console.log("Increment");
    setCount((c) => c + 1);
    console.log(count);
  }
  function decrement() {
    console.log("Decrement");
    setCount((c) => c - 1);
    console.log(count);
  }

  return (
    <>
      <h1>{props.title}</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
