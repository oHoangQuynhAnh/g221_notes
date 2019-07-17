import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import axios from 'axios';

const LoginFormControl = styled(FormControl)`
  padding: 10em;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
const LoginButton = styled(Button)`
  float: left;
`
const LoginGithubButton = styled(Button)`
  margin:auto;
  margin-top: 4em;
  font-size: 1.25em;
  display:block;
`
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
    e.preventDefault();
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword = (e) => {
    e.preventDefault();
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
        <LoginGithubButton variant="outlined">
          <i className="fa fa-github" aria-hidden="true"></i> Login with github
        </LoginGithubButton>
        <LoginFormControl>
          <TextField variant="outlined" id="email-input" label="Email Address" onChange={this.onChangeUsername} />
          <hr/>
          <TextField variant="outlined" type="password" label="Password" onChange={this.onChangePassword} />
          <hr/>
          <Grid container spacing={3}>
            <Grid item xs={10}>
              <FormHelperText>Create new account</FormHelperText>
            </Grid>
            <Grid item xs={2}>
              <LoginButton variant="outlined" onClick={this.doLogin}>Log in</LoginButton>
            </Grid>
          </Grid>
        </LoginFormControl>
      </div>
    )
  }
}
