import WithUseCallback from "./Hooks/useCallback";
import WithoutUseCallback from "./Hooks/useState";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <WithoutUseCallback />
      <hr />
      <WithUseCallback />
      <hr />
      <p>
        <b>Summary: </b>
        <br />
        useState is used for managing and updating state variables. useCallback
        is used for memoizing functions, particularly callback functions, to
        prevent unnecessary re-creations. useState is ideal for managing
        component-level state and triggering re-renders when state changes.
        useCallback is ideal when you want to optimize performance by preventing
        re-creation of callback functions, especially when passed as props to
        child components.
      </p>
    </div>
  );
}
