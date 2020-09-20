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
  greeting=()=>
  {
    alert("Success!!");
  }
  render()
  {
  return (
    <div className="App">
      <h1>HI , I am a react app </h1>
      <button onClick={this.greeting}>Click on me !!!</button>
      <Person name={this.state.person[0].name}/>
      <Person name={this.state.person[1].name}/>

    </div>
  );
  }
}

export default App;
