import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Max', age: 30 },
        { name: 'Manu', age: 29},
        { name: 'Ola', age: 40 },
      ],
  });

  const [otherState, setOtherState] = useState('some other valueee');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked');
    // DON'T DO THIS personsState.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 30 },
        { name: 'Manu', age: 29},
        { name: 'Ola', age: 50 },
      ],
    })
  }

  return (
    <div className="App">
    <h1>Hi, I'm React App!</h1>
    <p>This is really working!</p>
    <button onClick={switchNameHandler}>Switch Name</button>
    <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
    <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Football</Person>
    <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Works?'));
}

export default App;
