import { useState } from "react";

function WithoutUseCallback() {
  const [count, setCount] = useState(0);

  const [number, setNumber] = useState(0);

  const handleNumber = () => {
    // console.log("number");
    setNumber(number + 1);
  };

  const increament = () => {
    console.log("Rendering...");
    setCount(count + 1);
  };
  return (
    <>
      <h1>Without useCallback</h1>
      <h1>Number : {number} </h1>
      <button onClick={handleNumber}>Number</button>

      <h1>Count : {count}</h1>
      <button onClick={increament}>Increament</button>
      <ul>
        <h4>Use Cases for useState: </h4>
        <li>
          {" "}
          Managing component-level state, such as form input values, toggles, or
          counters.{" "}
        </li>
        <li>Triggering component re-renders when state changes.</li>
        <li>Storing and updating data specific to a component.</li>
      </ul>
    </>
  );
}
export default WithoutUseCallback;

// In this example, useState is used to declare and manage the count state variable. When the "Increment" button is clicked, the increment function is called, updating the count state.
