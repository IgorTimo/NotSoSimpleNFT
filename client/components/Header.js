import React from 'react'
import { MetaMaskAuth } from './MetaMaskAuth/MetaMaskAuth'
import { useWeb3Context } from '../hooks/useWeb3Context'

export const Header = () => {
  const { contract, account } = useWeb3Context()
  return (
    <div className="flex p-6 ml-auto">
      <MetaMaskAuth />
    </div>
  )
}
