import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import TimerController from "./components/TimerController";
import "./styles/style.scss";

function App() {
  const [breakSeconds, setBreakSeconds] = useState(5);
  const [sessionSeconds, setSessionSeconds] = useState(25);
  const [seconds, setSeconds] = useState(sessionSeconds);
  const [isSession, setIsSession] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setBreakSeconds(5);
    setSeconds(sessionSeconds);
    setIsSession(true);
  };

  let timerLabel;
  if (isSession) {
    timerLabel = "Session";
  } else {
    timerLabel = "Break";
  }

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 0) {
            setIsSession(!isSession);
            return isSession ? breakSeconds : sessionSeconds;
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isSession, breakSeconds, sessionSeconds, isRunning]);

  return (
    <div className="App">
      <Header />
      <Timer
        seconds={seconds}
        timerLabel={timerLabel}
        reset={reset}
        handleStartStop={handleStartStop}
      />
      <div className="timer-controller">
        <TimerController
          controllerId="break"
          label="Break"
          length={breakSeconds}
          onNewValue={setBreakSeconds}
          isRunning={isRunning}
        />
        <TimerController
          controllerId="session"
          label="Session"
          length={sessionSeconds}
          onNewValue={setSessionSeconds}
          isRunning={isRunning}
        />
      </div>
    </div>
  );
}

export default App;
