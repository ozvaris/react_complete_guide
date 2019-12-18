import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
  state = {
    persons: [
      { id: 'wertw', name: 'Max', age: 28 },
      { id: 'dsfgs', name: 'Manu', age: 29 },
      { id: 'fdgjs', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
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

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  tooglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {


    let persons = null;
   

    if (this.state.showPersons) {

      persons = <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler} />;


    }

    
    return (


    
        <div className={classes.App}>

          <Cockpit 
            title= {this.props.appTitle}
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.tooglePersonHandler}
            />
          
          {persons}

        </div>

     


    );

  }
}

export default App;
