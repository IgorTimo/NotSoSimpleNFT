import React from 'react'
import { useWeb3Context } from '../hooks/useWeb3Context'
import { MetaMask } from './MetaMask'

export const Navbar = () => {
  const { account } = useWeb3Context()

  return (
    <header className="flex justify-around align-center">
      <nav>
        {!account ? (
          <MetaMask />
        ) : (
          <div className="">
            <h3 className="text-center py-1">Wallet Connected</h3>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded"
              onClick={() => console.log(account)}
            >
              Check Account
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
