import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import TimerController from "./components/TimerController";
import "./styles/style.scss";

function App() {
  const defaultSessionSeconds = 25;
  const defaultBreakSeconds = 5;

  const [breakSeconds, setBreakSeconds] = useState(defaultBreakSeconds);
  const [sessionSeconds, setSessionSeconds] = useState(defaultSessionSeconds);
  const [seconds, setSeconds] = useState(defaultSessionSeconds);
  const [isSession, setIsSession] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setBreakSeconds(defaultBreakSeconds);
    setSessionSeconds(defaultSessionSeconds);
    setSeconds(defaultSessionSeconds);
    setIsSession(true);
    setIsRunning(false);
  };

  const onBreakSecondsNewValue = (newValue) => {
    setBreakSeconds(newValue);
    if (!isRunning && !isSession) {
      setSeconds(newValue);
    }
  };

  const onSessionSecondsNewValue = (newValue) => {
    setSessionSeconds(newValue);
    if (!isRunning && isSession) {
      setSeconds(newValue);
    }
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
          onNewValue={onBreakSecondsNewValue}
          isRunning={isRunning}
        />
        <TimerController
          controllerId="session"
          label="Session"
          length={sessionSeconds}
          onNewValue={onSessionSecondsNewValue}
          isRunning={isRunning}
        />
      </div>
    </div>
  );
}

export default App;
