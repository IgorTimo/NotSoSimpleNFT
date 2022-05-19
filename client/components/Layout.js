import React from 'react'
import { useWeb3Context } from '../hooks/useWeb3Context'
import { Navbar } from './Navbar'

export const Layout = ({ children }) => {
  const { contract } = useWeb3Context()
  return (
    <>
      <Navbar />
      {contract && <main>{children}</main>}
    </>
  )
}
