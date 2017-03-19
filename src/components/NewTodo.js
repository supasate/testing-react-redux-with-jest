import React, { Component } from 'react'

class NewTodo extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(event) {
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    return (
      <div className="new-todo">
        <input onChange={this.changeHandler} value={this.state.text} />
        <button className="btn btn-primary">Add</button>
      </div>
    )
  }
}

export default NewTodo
