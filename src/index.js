import React from 'react'
import { ToastContainer } from 'react-toastify';
import ReactDOM from 'react-dom/client'


import GlobalStyles from './styles/globalStyles'
import AppProvider  from './hooks'
import Routes from './routes/routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <AppProvider>
      <Routes />
    </AppProvider>
    <ToastContainer autoClose={2000} />
    <GlobalStyles />
  </>
)
