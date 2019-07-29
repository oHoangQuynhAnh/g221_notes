import React, { Component } from 'react'
import axios from 'axios';
import View from './View';

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isLogin: false
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  doLogin = (e) => {
    e.preventDefault();
    axios.post("base_url/auth/login",{
      username: this.state.username,
      password: this.state.password
    }).then((res) => {
      // save jwt to local storage
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="LoginDiv">
        <View onChangeUsername={this.onChangeUsername} onChangePassword={this.onChangePassword} doLogin={this.doLogin} />
      </div>
    )
  }
}
