import React, { useState, useEffect } from "react";
import "../styles/App.css";
import ChildComponent from "./ChildComponent";
const App = () => {
  //code here
  const [input, setInput] = useState(0);
  const [val, setval] = useState(0);
  const change = () => {};
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div id="main">
      <ChildComponent input={input} />
      <input id="input" value={input} onChange={handleChange} />

      <p id="output" onchange={change}>
        {input * input}
      </p>
    </div>
  );
};

export default App;

