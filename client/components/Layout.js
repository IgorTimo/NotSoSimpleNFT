import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { useWeb3Context } from '../hooks/useWeb3Context'
import { navigation } from '../routes/navigation'

export const Layout = ({ children }) => {
  const { items } = navigation
  const [activePage, setActivePage] = useState(items[0].label)
  const { contract } = useWeb3Context()

  return (
    <div className="h-screen grid grid-cols-custom-sidenav-layout">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        navigation={navigation}
      />
      {contract && <main>{children}</main>}
    </div>
  )
}
