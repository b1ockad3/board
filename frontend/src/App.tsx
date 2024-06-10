import React from 'react';
import logo from './logo.svg';
import './App.css';
import './global.css';

import { Mail } from "lucide-react"
import { Button } from "../src/components/ui/button"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
      </header>
    </div>
  );
}

export default App;
