import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 30 },
      { name: 'Manu', age: 29},
      { name: 'Ola', age: 40 },
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked');
    // DON'T DO THIS this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Maximilian', age: 30 },
        { name: 'Manu', age: 29},
        { name: 'Ola', age: 50 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Hi, I'm React App!</h1>
      <p>This is really working!</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Football</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Works?'));
  }
}

export default App;
