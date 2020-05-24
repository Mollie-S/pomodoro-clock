import React from "react";

function TimerController(props) {
  const increment = () => {
    if (props.length >= 1 && props.length < 60 && !props.isRunning) {
      props.onNewValue(props.length + 1);
    }
  };
  const decrement = () => {
    if (props.length > 1 && props.length <= 60 && !props.isRunning) {
      props.onNewValue(props.length - 1);
    }
  };

  return (
    <div id={props.controllerId + "-controller"}>
      <p id={props.controllerId + "-label"}>{props.label}</p>
      <div id={props.controllerId + "-length"}> {props.length}</div>
      <button id={props.controllerId + "-increment"} onClick={increment}>
        Up
      </button>
      <button id={props.controllerId + "-decrement"} onClick={decrement}>
        Down
      </button>
    </div>
  );
}

export default TimerController;
