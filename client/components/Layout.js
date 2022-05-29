import React from 'react'
import { Navbar } from './Navbar'
import { useWeb3Context } from '../hooks/useWeb3Context'
import { navigation } from '../routes/navigation'
import { Header } from './Header'

export const Layout = ({ children }) => {
  const { account } = useWeb3Context()
  return (
    <div className="h-screen grid grid-cols-custom-sidenav-layout">
      <Navbar navigation={navigation} />
      <div className="flex flex-col">
        <Header />
        {account && <main>{children}</main>}
      </div>
    </div>
  )
}
