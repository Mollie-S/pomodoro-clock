import React from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import TimerController from './components/TimerController';
import './styles/style.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <TimerController />

    </div>
  );
}

export default App;
