import React, { Component } from 'react'
import './App.css'
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
          <UserInfos userInfos={this.state.userInfos}/> : null }
          
        { !this.state.showUserInfos ?  
          <button className='button' onClick={this.handleClick}>Click Me</button>: null }
    
      </div>
    )
  }
}

const UserInfos = (props) => {
  console.log(props)
  return (
    <div className='user_infos_container'>
      <h2>Name: {props.userInfos.name}</h2>
      <h2>Age: {props.userInfos.age}</h2>
    </div>
  );
}
export default App