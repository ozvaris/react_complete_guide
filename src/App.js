import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state ={
    persons:[
      {id: 'wertw', name:'Max', age: 28},
      {id: 'dsfgs', name:'Manu', age: 29},
      {id: 'fdgjs', name:'Stephanie', age: 26}
    ],
    otherState : 'some other value',
    showPersons:false
  }

  switchNameHandler = (newName) => {
    this.setState({persons: [
      {name: newName, age: 28},
      {name:'Manu', age: 29},
      {name:'Stephanie', age: 26}
    ]})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
     return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //this.setState({persons: [
    //  {id: 'wertw', name: 'Max', age: 28},
    //  {id: 'dsfgs', name: 'Manu', age: 29},
    //  {id: 'fdgjs', name:event.target.value, age: 26}
    //]})

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) =>{
      //const persons = this.state.persons;
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons:persons});
  }

  tooglePersonHandler = () =>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
  }
  render() {
    const style ={
      backgroundColor:'green',
      font:'white',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'

    };

    let persons = null;
    if(this.state.showPersons){

      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}/>

          })}
        
      </div> 
      )

      style.backgroundColor = 'red';

    }
    return (
      
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is reallty working?</p>
        <button 
          style={style} 
          onClick={this.tooglePersonHandler}>Toogle Person</button>
          {persons}
        
      </div>
    );
    
  }
}

export default App;
