import React, { Component } from 'react'
import axios from 'axios'

class UserForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {name: '', age: 0}
  
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleChange(event) {
      this.setState(event.target.name === 'name' ? {name: event.target.value} : {age : event.target.value} )
    }
  
    handleSubmit(event) {
        axios.post('http://localhost:4000/users' ,this.state).then((response) => {
            console.log(response)
        })
  
      event.preventDefault()
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
          </label>
          <label>
            Age:
            <input type="text" value={this.state.age} name="age" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
    }
  }

  export default UserForm