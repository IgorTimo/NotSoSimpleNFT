import React from 'react'
import { useWeb3Context } from '../../hooks/useWeb3Context'

export const NavbarFooter = () => {
  const { account } = useWeb3Context()
  const indicatorColor = account ? 'bg-green-700' : 'bg-red-600'
  return (
    <div className="flex items-center mt-auto px-3 no-underline">
      <h3 className="text-center py-1 mr-4">Account connected</h3>
      <span className="flex h-2 w-2">
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${indicatorColor}`}
        >
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full ${indicatorColor} opacity-35`}
          ></span>
        </span>
      </span>
    </div>
  )
}
