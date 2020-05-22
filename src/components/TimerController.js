import React from 'react';

function TimerController(props) {
  
    
  return (
    <div id={ props.controllerId + '-controller' }>
        <p id={ props.controllerId + '-label' }>{ props.label }</p>
        <div id={ props.controllerId + '-length'}> { props.length }</div>
        <button id={ props.controllerId + '-increment'} onClick={props.increment}>Up</button>
        <button id={ props.controllerId + '-decrement'} onClick={props.decrement}>Down</button>
    </div>
  );
}

export default TimerController;