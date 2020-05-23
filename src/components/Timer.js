import React from "react";

function Timer(props) {
  return (
    <div id="timer">
      <div id="timer-display">
        <div id="timer-label">{props.timerLabel}</div>
        <div id="time-left">{props.seconds}</div>
      </div>
      <div className="timer-button">
        <button id="start_stop">Start/Stop</button>
        <button id="reset">Reset</button>
      </div>
    </div>
  );
}

export default Timer;
