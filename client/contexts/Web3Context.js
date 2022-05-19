import { createContext, useState, useEffect } from 'react'
import { ethers } from 'ethers'

export const Web3Context = createContext()

export const Web3Provider = ({ children }) => {
  const [contract, setContract] = useState(null)
  const [provider, setProvider] = useState(null)
  const [account, setAccount] = useState('')

  // Listens for a change in account and updates state
  useEffect(() => {
    if (contract && provider) {
      window.ethereum.on('accountsChanged', newAccount)
      return () => window.ethereum.removeListener('accountsChanged', newAccount)
    }
  })

  const newAccount = (accounts) => {
    setContract(contract.connect(provider.getSigner(accounts[0])))
    setAccount(accounts[0])
  }

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
        ethers,
        provider,
        setProvider,
        contract,
        setContract,
        account,
        setAccount,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}
