import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import routes from '../../routes'
import DefaultLayout from '../../layouts/DefaultLayout'
import HomePage from '../HomePage'
import LoginPage from '../LoginPage'
import DummyPage from '../DummyPage'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout exact path={routes.home} component={HomePage} />
        <DefaultLayout path={routes.login} component={LoginPage} />
        <DefaultLayout path={routes.dummy} component={DummyPage} />
      </Switch>
    </BrowserRouter>
  )
}
