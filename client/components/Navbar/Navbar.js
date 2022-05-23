import React from 'react'
import { NavbarHeader } from './NavbarHeader'
import { NavbarMenu } from './NavbarMenu'
import { NavbarFooter } from './NavbarFooter'

export const Navbar = ({ activePage, setActivePage, navigation }) => {
  const { items, label } = navigation

  return (
    <div className="flex flex-col bg-gray-900 text-gray-50 px-6 py-4">
      <NavbarHeader title={label} />
      <NavbarMenu
        activePage={activePage}
        setActivePage={setActivePage}
        items={items}
      />
      <NavbarFooter />
    </div>
  )
}
