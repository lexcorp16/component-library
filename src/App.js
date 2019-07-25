import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button.tailwind'
import Button2 from './components/Button.styled'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button disabled={true}>Click Me</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button2 disabled={true}>Click Me</Button2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
