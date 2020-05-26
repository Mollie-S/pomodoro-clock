import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

library.add(faCaretUp, faCaretDown);

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
      <div className="spinner">
        <button id={props.controllerId + "-decrement"} onClick={decrement}>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>

        <div id={props.controllerId + "-length"}> {props.length}</div>
        <button id={props.controllerId + "-increment"} onClick={increment}>
          <FontAwesomeIcon icon={faCaretUp} />
        </button>
      </div>
    </div>
  );
}

export default TimerController;
