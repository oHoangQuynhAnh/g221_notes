import React, { Component } from 'react'
import Authentication from './AuthenticationService'
import View from './View'

export default class LoginPage extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleLogin = e => {
    e.preventDefault()
    Authentication.login(this.state.username, this.state.password).then(data => {
      if (data.status === 200 && data.token) {
        localStorage.token = data.token
        localStorage.userId = data.userId
        this.props.history.push('/')
      } else {
        localStorage.token = null
        localStorage.userId = null
      }
    })
  }

  render() {
    return (
      <View onChange={this.handleInputChange} handleLogin={this.handleLogin} />
    )
  }
}
