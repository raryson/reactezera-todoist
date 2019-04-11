import React, { Component } from 'react'
import axios from 'axios'
import Scroll from 'react-scroll'

class IstWorker extends React.Component {
  constructor (props) {
        super(props)
    }

    deleteIst = (id) => {
      const searchedIstIndex = this.findIstIndexById(id)
      this.props.todoIst.ists.splice(searchedIstIndex, 1)
      this.setState({ists: this.props.todoIst.ists})
    }
  
    findIstIndexById = (id) => {
      let findedIstId = null
      this.props.todoIst.ists.forEach((ist, index) => {
          if (ist.id == id ) findedIstId = index
      })

      return findedIstId
    }

    addNewIst = (ists) => {
      return ists.map((ist) => {
        return <div className='ist_infos' key={ist.id}>
          <h2>Later I need to do {ist.message}</h2>
          <button className="button" id={ist.id} onClick={this.handleDelete} >Delete</button>
        </div>
      })
    }

   handleDelete = async (event) => {
      const response = await axios.delete(`http://localhost:4000/ists?id=${event.target.id}`)
      this.deleteIst(response.data)
    }
    
    
    async componentDidMount() {
        const response = await axios.get('http://localhost:4000/ists')
        this.props.todoIst.ists = this.props.todoIst.ists.concat(response.data)
        this.setState({ists: this.props.todoIst.ists})
    }

    
    render() {
        const istsInfos = this.addNewIst(this.props.todoIst.ists)
      
        return (
          <div className='ist_infos_container'>
              { istsInfos }
          </div>
        );
    }
}

export default IstWorker