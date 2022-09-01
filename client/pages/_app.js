import '../styles/globals.css'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Layout } from '../components/Layout'
import { Web3Provider, AppContextProvider } from '../contexts'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { Provider } from '@components/Modal/Context'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

function Application({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Web3Provider>
          <AppContextProvider>
            <Provider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Provider>
          </AppContextProvider>
        </Web3Provider>
      </ErrorBoundary>
    </QueryClientProvider>
  )
}

export default Application
