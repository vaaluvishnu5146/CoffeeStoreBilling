import { useEffect, useLayoutEffect, useState } from "react";

export default function Counter() {
  // `count` is the state variable, `setCount` is the updater function.
  const [count, setCount] = useState(0);
  const [evenCount, setEvenCount] = useState(false);

  useLayoutEffect(() => {
    if (count % 2 === 0) {
      setEvenCount(true);
    } else {
      setEvenCount(false);
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      {evenCount && <p>Count is even</p>}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
