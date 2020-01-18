import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link } from 'react-router-dom';
import logo from './logo.svg';
import './css/tailwind.css';
import Header from './components/header.js';

function App() {
  return (
    <div className="App">
    <Router><Header/></Router>
    </div>
  );
}

export default App;
