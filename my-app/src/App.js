import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component
 {
  state = {
    person :
    [
        { name:"A" },
        { name:"B" }
    ]    
  }
  render()
  {
  return (
    <div className="App">
      <h1>HI , I am a react app </h1>
      <Person name={this.state.person[0].name}/>
      <Person name={this.state.person[1].name}/>

    </div>
  );
  }
}

export default App;
