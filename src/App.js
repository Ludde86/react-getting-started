import React from "react";
import Button from "./components/Button";
import Display from "./components/Display";

// useState() - use state without writing a class. it returns a pair of values: the current
// state (counter) and a function (setCounter) that updates it.

// we pass props to other components so they can access the data (counter) /functions
// (incrementCounter).

// the incrementCounter() receives incrementValue, and as an argument we can use it. now we
// can invoke the incrementCounter() with different values.

function App() {
  const [counter, setCounter] = React.useState(0);
  const incrementCounter = incrementValue =>
    setCounter(counter + incrementValue);
  return (
    <div className="App">
      <header className="App-header">
        <Button onClickFunction={incrementCounter} increment={1} />
        <Button onClickFunction={incrementCounter} increment={5} />
        <Button onClickFunction={incrementCounter} increment={10} />
        <Button onClickFunction={incrementCounter} increment={100} />
        <Display message={counter} />
      </header>
    </div>
  );
}

export default App;
