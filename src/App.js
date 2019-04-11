import React, { Component } from 'react'
import './App.scss'
import IstForm from './components/IstForm' 
import IstWorker from './components/IstWorker'
import Greetings from './components/Greetings'

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
      <div className='button_container col-md-6 offset-md-3'>
          <Greetings message="Welcome TodoIst" redirectTo="submit"/>
          <IstWorker todoIst={this.state} />
          <IstForm todoIst={this.state} handleCallbackFromForm={this.handleCallbackFromForm} />
      </div>
    )
  }

}

export default App