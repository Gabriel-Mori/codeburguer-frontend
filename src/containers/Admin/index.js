import React from "react";

import { SideMenuAdmin } from "../../components/SideMenuAdmin";
import ListProducts from "./ListProducts";
import Orders from './Orders'
import PropTypes from 'prop-types'
import { Container, ContainerItems } from './styles'
import paths from "../../constants/paths";
import NewProducts from "./NewProducts";


export function Admin({ match: {path}}) {


  return (

    <Container>
      <SideMenuAdmin path={path}/>
      <ContainerItems>
        {path === paths.Orders && <Orders /> }
        {path === paths.Products && <ListProducts />}
        {path === paths.NewProducts && <NewProducts />}
      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}