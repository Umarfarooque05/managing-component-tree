import React from "react";
// import React, { useState } from "react";

function ToDoItem(props) {
  // const [isDone, setIsDone] = useState(false);

  //// codefor line through

  // function handleClick() {
  //   setIsDone((prevValue) => {
  //     return !prevValue;
  //   });
  // }

  return (
    <div
      onClick=/*{handleClick}*/ {() => {
        props.onChecked(props.id);
      }}
    >
      <li /*style={{ textDecoration: isDone ? "line-through" : "none" }}*/>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
