import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
library.add(faSyncAlt, faPlay, faPause);

function Timer(props) {
  return (
    <div id="timer">
      <div id="timer-display">
        <div id="timer-label">{props.timerLabel}</div>
        <div id="time-left">{props.timeDisplayed}</div>
      </div>
      <div className="timer-button">
        <button id="start_stop" onClick={props.handleStartStop}>
          <FontAwesomeIcon icon={!props.isRunning ? faPlay : faPause} />
        </button>
        <button id="reset" onClick={props.reset}>
          <FontAwesomeIcon icon={faSyncAlt} />
        </button>
      </div>
    </div>
  );
}

export default Timer;
