import React, { Component } from 'react'
import Scroll from 'react-scroll'

class Greetings extends React.Component {
    elementName

    constructor(props) {
      super(props)
      this.elementName = this.props.redirectTo
    }

    handleOnClick() {
        const scroll = Scroll.animateScroll
        scroll.scrollToBottom()
    }
  
    render() {
      return (
        <div className="greetings">
            <h1 className="clip-text">{this.props.message}</h1>
            <button onClick={this.handleOnClick} >Start</button>
        </div>
      )
    }
  }

  export default Greetings