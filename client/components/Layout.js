import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { useWeb3Context } from '../hooks/useWeb3Context'
import { navigation } from '../routes/navigation'
import { Header } from './Header'
import { MetaMask } from './MetaMask'

export const Layout = ({ children }) => {
  const { items } = navigation
  const [activePage, setActivePage] = useState(items[0].label)
  const { contract, account } = useWeb3Context()

  return !account ? (
    <div className="flex h-screen justify-center items-center">
      <MetaMask />
    </div>
  ) : (
    <div>
      {contract && (
        <div className="h-screen grid grid-cols-custom-sidenav-layout">
          <Navbar
            activePage={activePage}
            setActivePage={setActivePage}
            navigation={navigation}
          />
          <div>
            <Header />
            <main>{children}</main>
          </div>
        </div>
      )}
    </div>
  )
}
