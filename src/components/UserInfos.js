import React, { Component } from 'react'
import axios from 'axios'

class UserInfos extends React.Component {
  constructor (props) {
        super(props)
    }

    deleteUser = (id) => {
      const searchedUserIndex = this.findUserIndexById(id)
      this.props.todoIst.userInfos.splice(searchedUserIndex, 1)
      this.setState({userInfos: this.props.todoIst.userInfos})
    }
  
    findUserIndexById = (id) => {
      let findedUserId = null
      this.props.todoIst.userInfos.forEach((user, index) => {
          if (user.id == id ) findedUserId = index
      })

      return findedUserId
    }

    addNewUser = (users) => {
      return users.map((user) => {
        return <div className='user_infos' key={user.id}>
          <h2>Name: {user.name}</h2>
          <h2>Age: {user.age}</h2>
          <button className="button" id={user.id} onClick={this.handleDelete} >Delete</button>
        </div>
      })
    }

   handleDelete = async (event) => {
      const response = await axios.delete(`http://localhost:4000/users?id=${event.target.id}`)
      this.deleteUser(response.data)
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