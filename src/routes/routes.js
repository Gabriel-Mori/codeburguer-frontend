import React from "react";
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import PrivateRoute from "./private-route";


import {Login, Register, Home, Product } from '../containers'


function Routes(){

  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login"/>
        <Route component={Register} path="/cadastro"/>
        <PrivateRoute exact component={Home} path="/"/>
        <PrivateRoute  component={Product} path="/produtos"/>

      </Switch>
    </Router>
  )

}

export default Routes