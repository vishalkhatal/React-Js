import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>HI , I am a react app </h1>
      <Person name="vishal"/>
      <Person name="Pooja"/>

    </div>
  );
}

export default App;
