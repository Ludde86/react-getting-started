import React from "react";

// the onClickFunction property allowed the button to invoke the App component's
// incrementCounter();

// we wrap this invocation in an inline function to make in into a referance.

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}

export default Button;
