import React,{useState} from "react";

const ChildComponent = (props) => {
  //code here
  const [val,setval]=useState('');
  
  

  return (
    <div id="child">
      Find The Square <br />
      
    </div>
  );
};

export default ChildComponent;
