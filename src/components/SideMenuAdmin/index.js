import React from "react";
import listLink from "./menu-list";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useUser } from '../../hooks/UserContext'
import PropTypes from 'prop-types'


import {
  Container,
  ItemContainer,
  ListLink

} from './styles'



export function SideMenuAdmin({path}) {
const { logout } = useUser()


  return (
    <Container>
      <hr></hr>
      {listLink.map((link) => (
      <ItemContainer key={link.id} isActive={path === link.link}>
        <link.icon className='icon'/>
        <ListLink
        to={link.link}
        >
            {link.label}
        </ListLink>
        </ItemContainer>
      ))}
      <hr></hr>

      <ItemContainer style={{position: 'fixed', bottom: '30px'}}>
        <ExitToAppIcon/>
      <ListLink to='/login' onClick={logout}>
        Sair
      </ListLink>
      </ItemContainer>

    </Container>
  )

}

SideMenuAdmin.propTypes = {
    path: PropTypes.string

}