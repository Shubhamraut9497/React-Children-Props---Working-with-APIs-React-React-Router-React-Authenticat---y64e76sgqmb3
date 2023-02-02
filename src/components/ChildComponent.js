import React, { useState, useEffect } from "react";

const ChildComponent = (props) => {
  //code here
  const [val, setval] = useState("");

  useEffect(() => {
    setval(props.input * props.input);
  }, [props.input]);

  return (
    <div id="child">
      Find The Square <br />
      {/* <p id="output">{val}</p> */}
    </div>
  );
};

export default ChildComponent;

