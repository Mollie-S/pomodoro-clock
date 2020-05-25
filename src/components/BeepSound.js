import React from "react";
import soundfile from "../assets/TOWERCLO.mp3";

function BeepSound(props) {
  const audio = new Audio(soundfile);

  if (props.seconds === 0) {
    audio.play();
  }
  return <audio id="beep" src={soundfile}></audio>;
}

export default BeepSound;
