import React, { Component } from 'react'

export default class FormMessage extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.message)

  }
  capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  render() {
    return (
      <>
        <div className={`alert alert-${this.props.type} alert-dismissible fade show`} role="alert">
          <strong>{this.capitalize(this.props.type)}</strong>:{this.props.message}
        </div>
      </>
    )
  }
}
