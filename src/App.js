import React, { Component } from 'react'
import './App.css'
import UserForm from './components/UserForm' 
import UserInfos from './components/UserInfos'
class App extends Component {

  constructor (props) {
    super(props) 
  }
  
  render () {
    return (
      <div className='button__container'>
          <UserInfos/>
          <UserForm/>
      </div>
    )
  }

}

export default App