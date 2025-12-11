import React from 'react'
import AppContextProvider from './(context)/AppContext'
import Header from './(components)/Header'


const Provider = ({children}) => {
  return (
    <AppContextProvider>
        <Header/>
        {children}
    </AppContextProvider>
  )
}


export default Provider