import React from 'react';
import './App.css';
import Visualisator from './components/Visualisator';
import Computer from './components/Computer';

function App() {
  return (
    <div className="container">
      <Visualisator />
      <Computer />
    </div>
  );
}

export default App;