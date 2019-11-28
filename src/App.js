import React from 'react';
import logo from './logo.png';
import './App.css';
import Clock from "./components/clock";
function App() {
  return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"  />
          <h2><Clock ></Clock></h2>
        </div>

      </div>
  );
}

export default App;
