import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.handlechange} type="text" value={props.inputiext} />
      <button onClick={props.additem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
