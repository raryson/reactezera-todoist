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
  
    async handleSubmit(event) {
      event.preventDefault()
      const response = await axios.post('http://localhost:4000/users' , this.state)
      if(response.status === 200) {
        const newState = this.props.todoIst.userInfos.push(response.data)
        this.props.handleCallbackFromForm(newState)
      }
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
          <input className="button" type="submit" value="Submit" />
        </form>
      )
    }
  }

  export default UserForm