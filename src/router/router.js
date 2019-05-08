import React from 'react'
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Login from '../pages/User/Login'
const BasicRoute = () => (
  <Router>
    <Switch>
      <Route path='/Login' component={Login} />
      <Redirect exact from='/' to='/Login' />
      <Route path="/Home" component={Home}>
      </Route>
    </Switch>
  </Router>
)

export default BasicRoute 
