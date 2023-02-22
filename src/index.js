import React from 'react'
import Login from './containers/Login'
import { ToastContainer } from 'react-toastify';
import Register from './containers/Register'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import { UserProvider } from './hooks/UserContext'
import Routes from './routes/routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <UserProvider>
      <Routes />
    </UserProvider>
    <ToastContainer autoClose={2000} />
    <GlobalStyles />
  </>
)
