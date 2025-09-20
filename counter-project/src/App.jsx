import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  let addValue = () => {
    setCount(count + 1);
    if (count >= 20) {
      setCount(20);
    }
  };
  let removeValue = () => {
    setCount(count - 1);
    if (count <= -20) {
      setCount(-20);
    }
  };
  return (
    <>
      <p>Count the value ? increment/decrement</p>
      <h2>counter value: {count}</h2>
      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
    </>
  );
}

export default App;
