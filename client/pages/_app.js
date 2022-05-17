import '../styles/globals.css'
import React from 'react'
import { Layout } from '../components/Layout'
import { AppContextProvider } from '../contexts/AppContext'

function Application({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  )
}

export default Application
