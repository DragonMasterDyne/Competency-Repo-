import React, { Component } from 'react';
import './App.css';
// COMP 37E-1 Using import to bring in child component
import ListUsers from './components/ListUsers'

class App extends Component {
  // COMP 36I Using a constructor so I have access to state
  constructor() {
    super();

    // COMP 36C Use state to keep track of user input
    this.state = {
      input: '',
      users: []
    }
    // COMP 37C Can bind to keep react from forgetting context
    this.handleDown = this.handleDown.bind(this)
  }
  // COMP 36D Use setState to return input to an empty string
  handleDown(e) {
    if(e.keyCode === 13) {
      this.moveToUsers(e.target.value)
      this.setState({
        input: ''
      })
    } 
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  moveToUsers(user) {
    this.state.users.push(user)
  }

   // COMP 36F using render to render elements to page
  render() {
    console.log(this.state.users)
    return (
      <div>
        <h1>Add a user</h1>
        <input 
        // COMP 36J Using event handles to keep track of input and push users in to users array
        // COMP 37D Using arrow function to fire off handleChange on input
        onChange={(e)=> this.handleChange(e)}
        onKeyDown={this.handleDown} value={this.state.input} type="text"/>
        {/* COMP 36E Sending this.state.users down to ListUsers so it can map and render it */}
        {/* COMP 36H Using child component ListUsers to map a list of users  */}
        <ListUsers users={this.state.users}/>
      </div>
    );
  }
}

export default App;
