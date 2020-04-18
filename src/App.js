import React from 'react';
import './App.css';
import Visualisator from './components/Visualisator';
import Computer from './components/Computer';
import AddItemsToList from './components/AddItemsToList';

function App() {
  return (
    <div className="container">
      <Visualisator />
      <Computer />
      <AddItemsToList />
    </div>
  );
}

export default App;