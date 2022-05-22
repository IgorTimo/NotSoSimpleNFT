import '../styles/globals.css'
import React from 'react'
import { Layout } from '../components/Layout'
import { Web3Provider, AppContextProvider } from '../contexts'
import { ErrorBoundary } from '../components/ErrorBoundary'

function Application({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Web3Provider>
        <AppContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContextProvider>
      </Web3Provider>
    </ErrorBoundary>
  )
}

export default Application
