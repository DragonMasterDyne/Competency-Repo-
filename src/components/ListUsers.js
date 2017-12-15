import React, { Component } from 'react'
import Title from './Title'


// COMP 37E-2 use export to enable other files to import ListUsers component
export default class ListUsers extends Component {
    constructor() {
        super();

        this.state = {
            title: "This is a list of Users"
        }
    }
    

  // COMP 36F using render to render div h1 and allusers to page
  render() {  
    // COMP 36E Using users prop passed from parent to map a list of users
    const allUsers = this.props.users.map((e,i) => {
        return ( <div key={i}>
            <p>{e}</p>
        </div>
       )
    })

    return (
      <div>
        <Title title={this.state.title}/>
        {/* COMP 36G Using JSX to render a map of users to page */}
            {allUsers}
      </div>
    )
  }
}
