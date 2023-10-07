import { useCallback, useState } from "react";

function WithUseCallback() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const handleNumber = () => {
    // console.log("number");
    setNumber(number + 1);
  };

  const handleButton = useCallback(() => {
    console.log("rendering");
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <h1>With useCallback</h1>
      <h1>Number : {number} </h1>
      <button onClick={handleNumber}>Number</button>
      <h1>Count : {count}</h1>
      <button onClick={handleButton}>Increament</button>
      <ul>
        <h4>Use Cases for useCallback:</h4>
        <li>
          Memoizing callback functions that are passed as props to child
          components to prevent re-renders of those child components.
        </li>
        <li>
          Optimizing performance when functions depend on specific values or
          state.
        </li>
        <li>
          Avoiding unnecessary function re-creations when the function
          dependencies haven't changed.
        </li>
      </ul>
    </>
  );
}
export default WithUseCallback;
