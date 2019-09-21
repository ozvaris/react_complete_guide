import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app1 = props => {
  const [ personsState, setPersonsState] = useState({
    persons:[
      {name:'Max', age: 28},
      {name:'Manu', age: 29},
      {name:'Stephanie', age: 26}
    ],
    otherState : 'some other value'
  });  

  const switchNameHandler = () => {
    //console.log('Was clicked!');
    //dont do this this.state.persons[0].name = 'Maximliian';
    setPersonsState({persons: [
      {name:'Maximillian', age: 28},
      {name:'Manu', age: 29},
      {name:'Stephanie', age: 26}
    ],
    otherState : personsState.otherState})
  }

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  return (
      
    //prop used
    // <div className="App">
    //   <h1>Hi, I'm React App</h1>
    //   <p>This is reallty working?</p>
    //   <button>Switch Name</button>
    //   <Person name="Max" age="28"/>
    //   <Person name="Manu" age="29"/>
    //   <Person name="Stephanie" age="26">May hoby racing</Person>
    // </div>

    //state used
    // <div className="App">
    //   <h1>Hi, I'm React App</h1>
    //   <p>This is reallty working?</p>
    //   <button >Switch Name</button>
    //   <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
    //   <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
    //   <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>May hoby racing</Person>
    // </div>
    
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is reallty working?</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>May hoby racing</Person>
    </div>
  );
}

export default app1;


