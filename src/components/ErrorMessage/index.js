import React from "react";
import Proptypes from 'prop-types'


import {
  Error


} from './styles'



export function ErrorMessage({ children }) {



  return (
    <Error>
      {children}
    </Error>

  )

}

ErrorMessage.propTypes = {
  children: Proptypes.string
}