/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import "./App.css";

/*

Reat provides a set of  hooks, special methods to
do specific tasks, like updating a value of a variable in elements

hooks come from { useState } from "react"
*/

function App() {
  // Use state is a hook
  // it accepts a default value of an variable could be any literal
  // in this case we are initializing a counter variable with
  // default value of 15
  // useState returns a setter function and a reference to the
  // literal value
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  function addValue() {
    console.log(`${counter++}`);
    // Invoke setter method to update this variable vaule in front end
    setCounter(counter);
    // Counter value is updated vwherever it is referred
  }

  function subtractValue() {
    console.log(`${counter--}`);
    // Invoke setter method to update this variable vaule in front end
    setCounter(counter);
  }

  // Below tree is parsed through babel
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter</h2>
      <h4>
        <button onClick={subtractValue}>-</button>
        <span> {counter} </span>
        <button onClick={addValue}>+</button>
      </h4>
      <h4>counter was updated to {counter}</h4>
    </>
  );
}

export default App;
