import React, { Component } from 'react'
import './App.css'
import UserForm from './components/UserForm' 
import axios from 'axios'
class App extends Component {

  constructor (props) {
    super(props) 
    this.state = {showUserInfos: false}
    this.state = {userInfos: false}
    this.handleClick = this.handleClick.bind(this)
  
  }
  

  handleClick () {
    axios.get('http://localhost:4000/users')
      .then((response) => {
        this.setState({userInfos: response.data})
        this.setState({showUserInfos: true})
      })
  }

  render () {
    return (
      <div className='button__container'>
        { this.state.showUserInfos ? 
          <RenderUserInfos userInfos={this.state.userInfos}/> : 
          <button className='button' onClick={this.handleClick}>Click Me</button> }
          <UserForm/>
      </div>
    )
  }
}

const RenderUserInfos = (props) => {
  const usersInfos = props.userInfos.map((user, index) => {
    return <div className='user_infos' key={index}>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
    </div>
  })

  return (
    <div className='user_infos_container'>
        { usersInfos }
    </div>
  );
}

export default App