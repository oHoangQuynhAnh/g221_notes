import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const LoginFormControl = styled(FormControl)`
  position: relative;
  width: 100%;
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
  margin-top: 2em;
  font-size: 1.25em;
  display:block;
`

export default function View({onChangeUsername, onChangePassword, doLogin}) {
  return (
    <div>
      <LoginGithubButton variant="outlined">
        <i className="fa fa-github" aria-hidden="true"></i> Login with github
      </LoginGithubButton>
      <hr />
      <LoginFormControl>
        <TextField variant="outlined" id="email-input" label="Email Address" fullWidth={true} onChange={onChangeUsername} />
        <hr/>
        <TextField variant="outlined" type="password" label="Password" fullWidth={true} onChange={onChangePassword} />
        <hr/>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Typography>
              <Link href="javascript:;">Create new account</Link>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <LoginButton variant="outlined" onClick={doLogin}>Log in</LoginButton>
          </Grid>
        </Grid>
      </LoginFormControl>
    </div>
  )
}

