import React from 'react';
import './css/tailwind.css';
import Timer from './components/Timer';
import TimerControllers from './components/TimerControllers';
import Sound from './components/Sound';
import Header from './components/Header';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router><Header/></Router>
      <Timer/>
      <TimerControllers/>
      <Sound/>
    </div>
  );
}

export default App;
