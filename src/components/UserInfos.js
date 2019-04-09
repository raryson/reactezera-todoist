import React, { Component } from 'react'
import axios from 'axios'

class UserInfos extends React.Component {
  constructor () {
    super()
    this.state = {userInfos: []}
    }
    
    async componentDidMount() {
        const response = await axios.get('http://localhost:4000/users')
        this.setState({userInfos: response.data})
    }

    render() {
        const usersInfos = this.state.userInfos.map((user, index) => {
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
}

export default UserInfos