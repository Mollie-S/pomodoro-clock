import React from 'react';
import IncrementDecrementElements from './IncrementDecrementElements'

function TimerController() {
  return (
    <div id='timer-controller'>
        <div id='break-controller'>
            <p id='break-label'>Break</p>
            <div id='break-length'>5</div>
        </div>
        <div id='session-controller'>
            <p id='session-label'>Session</p>
            <div id='session-length'>25</div>
            <IncrementDecrementElements />

        </div>
    </div>
  );
}

export default TimerController;