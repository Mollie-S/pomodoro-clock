import React from 'react';
import ClickableElement from './ClickableElement'

function Timer() {
  return (
    <div id='timer'>
        <div id='timer-label'>Session/Break</div>
        <div id='time-left'>mm:ss</div>
        <ClickableElement />
    </div>
  );
}

export default Timer;