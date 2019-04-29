import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Login from '../pages/User/Login'

const BasicRoute = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/Home" component={Home}/>
    </Switch>
  </Router>
)

export default BasicRoute
