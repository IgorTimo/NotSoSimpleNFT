import React from 'react'
import { useWeb3Context } from '../../hooks/useWeb3Context'

export const NavbarFooter = () => {
  const { account } = useWeb3Context()
  return (
    <div className="flex items-center mt-auto px-3 no-underline text-gray-50 opacity-70 hover:opacity-100">
      <h3 className="text-center py-1">Wallet Connected</h3>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded"
        onClick={() => console.log(account)}
      >
        Check Account
      </button>
    </div>
  )
}
