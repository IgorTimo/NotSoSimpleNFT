import { createContext, useState, useEffect } from 'react'
import { ethers } from 'ethers'

export const Web3Context = createContext()

export const web3ContextInitialValues = {
  updateContextState: () => {},
  contract: null,
  provider: null,
  account: null,
}

export const Web3Provider = ({ children }) => {
  const [contextState, setContextState] = useState({
    ...web3ContextInitialValues,
    ethers,
  })
  const { contract, provider } = contextState

  const updateContextState = (newContext) => {
    setContextState((prevContext) => ({ ...prevContext, ...newContext }))
  }

  const newAccount = (accounts) => {
    setContextState((state) => {
      return {
        ...state,
        contract: contract.connect(provider.getSigner(accounts[0])),
        account: accounts[0],
      }
    })
  }

  // Listens for a change in account and updates state
  useEffect(() => {
    if (contract && provider) {
      window.ethereum.on('accountsChanged', newAccount)
      return () => window.ethereum.removeListener('accountsChanged', newAccount)
    }
  })

  // Listens for network changes to reload the page
  useEffect(() => {
    window.ethereum.on('chainChanged', (_chainId) => window.location.reload())
    return () =>
      window.ethereum.removeListener('chainChanged', (_chainId) =>
        window.location.reload(),
      )
  }, [])

  return (
    <Web3Context.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        ...contextState,
        updateContextState,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}
