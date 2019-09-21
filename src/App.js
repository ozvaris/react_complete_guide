import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state ={
    persons:[
      {name:'Max', age: 28},
      {name:'Manu', age: 29},
      {name:'Stephanie', age: 26}
    ],
    otherState : 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    //dont do this this.state.persons[0].name = 'Maximliian';
    this.setState({persons: [
      {name: newName, age: 28},
      {name:'Manu', age: 29},
      {name:'Stephanie', age: 26}
    ]})
  }

  nameChangeHandler = (event) => {
    //console.log('Was clicked!');
    //dont do this this.state.persons[0].name = 'Maximliian';
    this.setState({persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name:event.target.value, age: 26}
    ]})
  }
  render() {
    const style ={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'

    };
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
        {/* <button onClick={this.switchNameHandler.bind(this,'Maximillian')}>Switch Name</button> */}
        <button 
          style={style} 
          onClick={() => this.switchNameHandler.bind('Maximillian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangeHandler}>May hoby racing</Person>
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className:"App"}, 'Hi, I\'m React App'))
  }
}

export default App;
