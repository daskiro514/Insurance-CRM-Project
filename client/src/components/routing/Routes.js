import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from '../auth/Register'
import Login from '../auth/Login'
import Alert from '../layout/Alert'
import NotFound from '../layout/NotFound'
import PrivateRoute from '../routing/PrivateRoute'

import Home from '../layout/Home'

const Routes = props => {
  return (
    <section>
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <PrivateRoute path="/home" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </section>
  )
}

export default Routes
