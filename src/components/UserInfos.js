import React, { Component } from 'react'
import axios from 'axios'

class UserInfos extends React.Component {
  constructor (props) {
        super(props)
    }

    addNewUser = (users) => {
      return users.map((user, index) => {
        return <div className='user_infos' key={index}>
          <h2>Name: {user.name}</h2>
          <h2>Age: {user.age}</h2>
        </div>
      })
    }
    
    
    async componentDidMount() {
        const response = await axios.get('http://localhost:4000/users')
        this.props.todoIst.userInfos = this.props.todoIst.userInfos.concat(response.data)
        this.setState({userInfos: this.props.todoIst.userInfos})
    }

    
    render() {
        const usersInfos = this.addNewUser(this.props.todoIst.userInfos)
      
        return (
          <div className='user_infos_container'>
              { usersInfos }
          </div>
        );
    }
}

export default UserInfos