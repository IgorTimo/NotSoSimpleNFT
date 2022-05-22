import React from 'react'
import { useWeb3Context } from '../../hooks/useWeb3Context'
import { MetaMask } from '../MetaMask'
import { NavbarHeader } from './NavbarHeader'
import { NavbarMenu } from './NavbarMenu'
import { NavbarFooter } from './NavbarFooter'

export const Navbar = ({ activePage, setActivePage, navigation }) => {
  const { account } = useWeb3Context()
  const { items, label } = navigation

  return (
    <div className="flex flex-col bg-gray-900 text-gray-50 px-6 py-4">
      {!account ? (
        <MetaMask />
      ) : (
        <>
          <NavbarHeader title={label} />
          <NavbarMenu
            activePage={activePage}
            setActivePage={setActivePage}
            items={items}
          />
          <NavbarFooter />
        </>
      )}
    </div>
  )
}
