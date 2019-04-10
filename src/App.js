import React, { Component } from 'react'
import './App.css'
import UserForm from './components/UserForm' 
import UserInfos from './components/UserInfos'
class App extends Component {

  constructor (props) {
    super(props) 
    this.handleCallbackFromForm = this.handleCallbackFromForm.bind(this)
    this.state = {userInfos: []}
  }

  handleCallbackFromForm = () => {
    this.setState(this.state)
  }
  
  render () {
    return (
      <div className='button__container'>
          <UserInfos todoIst={this.state} />
          <UserForm todoIst={this.state} handleCallbackFromForm={this.handleCallbackFromForm} />
      </div>
    )
  }

}

export default App