import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import TimerController from "./components/TimerController";
import "./styles/style.scss";

function App() {
  const [breakSeconds, setBreakSeconds] = useState(5);
  const [sessionSeconds, setSessionSeconds] = useState(10);
  const [seconds, setSeconds] = useState(sessionSeconds);

  const [isSession, setIsSession] = useState(true);

  // function incrementMinutes() {
  //   setMinutes(prevState => prevState + 1)
  // }
  // function decrementMinutes() {
  //   setMinutes(prevState => prevState - 1)
  // }
  let timerLabel;
  if (isSession) {
    timerLabel = "Session";
  } else {
    timerLabel = "Break";
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 0) {
          setIsSession(!isSession);
          return isSession ? breakSeconds : sessionSeconds;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSession, breakSeconds, sessionSeconds]);

  return (
    <div className="App">
      <Header />
      <Timer seconds={seconds} timerLabel={timerLabel} />
      <div className="timer-controller">
        <TimerController
          controllerId="break"
          label="Break"
          length={breakSeconds}
          // increment={incrementMinutes}
          // decrement={decrementMinutes}
        />
        <TimerController
          controllerId="session"
          label="Session"
          length={sessionSeconds}
          // increment={incrementMinutes}
          // decrement={decrementMinutes}
        />
      </div>
    </div>
  );
}

export default App;
