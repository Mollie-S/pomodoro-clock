import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import TimerController from "./components/TimerController";
import "./styles/style.scss";
import soundfile from "./assets/TOWERCLO.mp3";

function App() {
  const defaultSessionMinutes = 25;
  const defaultBreakMinutes = 5;

  const [breakMinutes, setBreakMinutes] = useState(defaultBreakMinutes);
  const [sessionMinutes, setSessionMinutes] = useState(defaultSessionMinutes);
  const [seconds, setSeconds] = useState(defaultSessionMinutes * 60);
  const [isSession, setIsSession] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  const beepAudioRef = useRef();

  const timeDisplayed = (() => {
    const minutesDisplayed = Math.floor(seconds / 60).toLocaleString("en", {
      minimumIntegerDigits: 2,
      maximumFractionDigits: 0,
    });
    const secondsDisplayed = (seconds - minutesDisplayed * 60).toLocaleString(
      "en",
      {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 0,
      }
    );
    return `${minutesDisplayed}:${secondsDisplayed}`;
  })();

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setBreakMinutes(defaultBreakMinutes);
    setSessionMinutes(defaultSessionMinutes);
    setSeconds(defaultSessionMinutes * 60);
    setIsSession(true);
    setIsRunning(false);

    if (!beepAudioRef.current.paused) {
      beepAudioRef.current.pause();
      beepAudioRef.current.currentTime = 0;
    }
  };

  const onBreakMinutesNewValue = (newValue) => {
    setBreakMinutes(newValue);
    if (!isRunning && !isSession) {
      setSeconds(newValue * 60);
    }
  };

  const onSessionMinutesNewValue = (newValue) => {
    setSessionMinutes(newValue);
    if (!isRunning && isSession) {
      setSeconds(newValue * 60);
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

            beepAudioRef.current.play();
            return isSession ? breakMinutes * 60 : sessionMinutes * 60;
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
  }, [isSession, breakMinutes, sessionMinutes, isRunning]);

  return (
    <div
      className="App"
      // style={
      //   !isSession
      //     ? { background: "linear-gradient(#eaefb1, #B5D6B2)" }
      //     : { background: "linear-gradient(#FDF15F, #ffbc4b)" }
      // }
    >
      <Header />
      <Timer
        timeDisplayed={timeDisplayed}
        timerLabel={timerLabel}
        reset={reset}
        handleStartStop={handleStartStop}
        isRunning={isRunning}
        isSession={isSession}
      />
      <audio id="beep" ref={beepAudioRef} src={soundfile}></audio>
      <div className="timer-controller">
        <TimerController
          controllerId="break"
          label="Break"
          length={breakMinutes}
          onNewValue={onBreakMinutesNewValue}
          isRunning={isRunning}
        />
        <TimerController
          controllerId="session"
          label="Session"
          length={sessionMinutes}
          onNewValue={onSessionMinutesNewValue}
          isRunning={isRunning}
        />
      </div>
    </div>
  );
}

export default App;
