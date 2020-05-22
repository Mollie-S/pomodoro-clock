import React, {useState} from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import TimerController from './components/TimerController';
import './styles/style.scss';

function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds] = useState('00');

  function incrementMinutes() {
    setMinutes(prevState => prevState + 1)
  }
  function decrementMinutes() {
    setMinutes(prevState => prevState - 1)
  }

  return (
    <div className="App">
      <Header />
      <Timer minutes={minutes} seconds={seconds}/>
      <div className='timer-controller'>
        <TimerController 
          controllerId='break' 
          label='Break' 
          length='5'
          increment={incrementMinutes}
          decrement={decrementMinutes}/>
        <TimerController 
          controllerId='session'
          label='Session' 
          length={minutes}
          increment={incrementMinutes}
          decrement={decrementMinutes}
          />
      </div>
     
    </div>
  );
}

export default App;
