import '../styles/globals.css'
import React from 'react'
import { Layout } from '../components/Layout'
import { Web3Provider, AppContextProvider } from '../contexts'

function Application({ Component, pageProps }) {
  return (
    <Web3Provider>
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </Web3Provider>
  )
}

export default Application
