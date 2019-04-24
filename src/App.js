import React from "react";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [counter, setCounter] = React.useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  return (
    <div className="App">
      <header className="App-header">
        <Button onClickFunction={incrementCounter} />
        <Display message={counter} />
      </header>
    </div>
  );
}

export default App;
