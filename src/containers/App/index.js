import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import routes from '../../routes'
import HomePage from '../HomePage'
import LoginPage from '../LoginPage'
import DummyPage from '../DummyPage'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.dummy} component={DummyPage} />
      </Switch>
    </BrowserRouter>
  )
}
