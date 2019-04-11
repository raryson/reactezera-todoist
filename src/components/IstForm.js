import React, { Component } from 'react'
import axios from 'axios'

class IstForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {ist: ''}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleChange(event) {
      this.setState({ist: event.target.value} )
    }
  
    async handleSubmit(event) {
      event.preventDefault()
      const response = await axios.post('http://localhost:4000/ists' , this.state)
      if(response.status === 200) {
        const newState = this.props.todoIst.ists.push(response.data)
        this.props.handleCallbackFromForm(newState)
      }
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            What I need to do later?
            <input type="text" value={this.state.ist} name="ist" onChange={this.handleChange} />
          </label>
          <input className="button" type="submit" value="Submit" />
        </form>
      )
    }
  }

  export default IstForm