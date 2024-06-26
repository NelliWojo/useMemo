import { useMemo, useState } from "react";
import { initialItems } from "./utils";

function App() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // const selectedItem = useMemo(() => items.find((item) => item.isSelected), []);
  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [count]
  );

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Selected item: {selectedItem?.id}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
