import React from 'react'
import Login from './containers/login'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Login />
    <GlobalStyles />
  </>
)
