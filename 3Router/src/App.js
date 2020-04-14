import React from 'react';
import * as ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';
import Edite from './component/Edite';
import {Example} from './component/UseEffect';

function Merchant(props) {
  return (
    <div>merchant component</div>
  )
}
function Shop(props) {
  return (
    <div>Shop component</div>
  )
}
function App() {
  return (
    <div className="App">
      <Example>
      </Example>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React TerryMin1
        </a>
      </header> */}
    </div>
  );
}

export default App;
