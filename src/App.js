import React, { Component } from 'react'
import './App.css'
import IstForm from './components/IstForm' 
import IstWorker from './components/IstWorker'
class App extends Component {

  constructor (props) {
    super(props) 
    this.handleCallbackFromForm = this.handleCallbackFromForm.bind(this)
    this.state = {ists: []}
  }

  handleCallbackFromForm = () => {
    this.setState(this.state)
  }
  
  render () {
    return (
      <div className='button_container'>
          <IstWorker todoIst={this.state} />
          <IstForm todoIst={this.state} handleCallbackFromForm={this.handleCallbackFromForm} />
      </div>
    )
  }

}

export default App