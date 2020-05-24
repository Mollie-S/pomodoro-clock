import React from "react";

function Timer(props) {
  return (
    <div id="timer">
      <div id="timer-display">
        <div id="timer-label">{props.timerLabel}</div>
        <div id="time-left">{props.timeDisplayed}</div>
      </div>
      <div className="timer-button">
        <button id="start_stop" onClick={props.handleStartStop}>
          Start/Stop
        </button>
        <button id="reset" onClick={props.reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
