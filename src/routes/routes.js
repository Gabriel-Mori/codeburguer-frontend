import React from "react";
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import PrivateRoute from "./private-route";


import {Login, Register, Home, Product, Cart, Admin } from '../containers'
import paths from "../constants/paths";


function Routes(){

  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login"/>
        <Route component={Register} path="/cadastro"/>
        <PrivateRoute exact component={Home} path="/"/>
        <PrivateRoute  component={Product} path="/produtos"/>
        <PrivateRoute  component={Cart} path="/carrinho"/>

        <PrivateRoute  component={Admin} path={paths.Orders}isAdmin/>
        <PrivateRoute  component={Admin} path={paths.Products} isAdmin/>
        <PrivateRoute  component={Admin} path={paths.NewProducts} isAdmin/>


      </Switch>
    </Router>
  )

}

export default Routes